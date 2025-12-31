#!/usr/bin/env python3
"""
HTTPS Server that serves HTML files from all directories,
but restricts access to image files under "Assets" folder to internal requests only.
"""

import http.server
import socketserver
import ssl
import os
import sys
from pathlib import Path
from urllib.parse import urlparse, unquote

class RestrictedHTTPServer(http.server.HTTPServer):
    """Custom HTTPS server with SSL support"""
    pass

class RestrictedHTTPHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP handler with access restrictions for Assets folder"""
    
    # Image file extensions to restrict in Assets folder
    RESTRICTED_EXTENSIONS = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.ico', '.tiff'}
    
    def translate_path(self, path):
        """Translate URL path to filesystem path"""
        # Decode URL-encoded path
        path = unquote(path)
        path = urlparse(path).path
        
        # Get the absolute path
        abs_path = super().translate_path(path)
        
        # Convert to Path object for easier manipulation
        return Path(abs_path)
    
    def is_internal_request(self):
        """Check if request is from internal network/localhost"""
        client_ip = self.client_address[0]
        
        # Check for localhost or internal IP ranges
        internal_ips = ['127.0.0.1', 'localhost', '::1']
        
        # Check for private IP ranges (RFC 1918)
        if client_ip.startswith(('10.', '172.16.', '172.17.', '172.18.', '172.19.', 
                                '172.20.', '172.21.', '172.22.', '172.23.', '172.24.',
                                '172.25.', '172.26.', '172.27.', '172.28.', '172.29.',
                                '172.30.', '172.31.', '192.168.')):
            return True
        
        return client_ip in internal_ips
    
    def is_restricted_path(self, path):
        """Check if the requested path should be restricted"""
        # Convert to Path object if it's a string
        if isinstance(path, str):
            path = Path(path)
        
        # Check if path is within an "Assets" folder
        try:
            # Get all parent directories
            parts = path.parts
            for i, part in enumerate(parts):
                if part.lower() == "assets":
                    # Check if the file extension is in our restricted list
                    if path.suffix.lower() in self.RESTRICTED_EXTENSIONS:
                        return True
        except:
            pass
        
        return False
    
    def do_GET(self):
        """Handle GET requests with access control"""
        try:
            # Get the filesystem path
            fs_path = self.translate_path(self.path)
            
            # Check if file exists
            if not fs_path.exists():
                self.send_error(404, "File not found")
                return
            
            # Check if it's a directory (serve index.html if present)
            if fs_path.is_dir():
                index_file = fs_path / 'index.html'
                if index_file.exists():
                    fs_path = index_file
                else:
                    # List directory contents
                    super().do_GET()
                    return
            
            # Check if this is a restricted path
            if self.is_restricted_path(fs_path):
                # Check if request is internal
                if not self.is_internal_request():
                    self.send_error(403, "Forbidden: Access to Assets is restricted to internal network")
                    return
            
            # Serve the file
            super().do_GET()
            
        except Exception as e:
            self.send_error(500, f"Internal server error: {str(e)}")
    
    def log_message(self, format, *args):
        """Custom logging with client IP and access status"""
        client_ip = self.client_address[0]
        request_line = args[0] if args else ""
        
        # Check if this was a restricted access attempt
        fs_path = self.translate_path(self.path)
        if self.is_restricted_path(fs_path) and not self.is_internal_request():
            status = "[RESTRICTED ACCESS ATTEMPT]"
        else:
            status = "[ALLOWED]"
        
        print(f"{client_ip} - {status} {request_line}")

def generate_self_signed_cert(cert_file="server.crt", key_file="server.key"):
    """Generate self-signed SSL certificate for HTTPS"""
    try:
        from OpenSSL import crypto
        from datetime import datetime, timedelta
        
        # Generate key
        key = crypto.PKey()
        key.generate_key(crypto.TYPE_RSA, 2048)
        
        # Generate certificate
        cert = crypto.X509()
        cert.get_subject().CN = "localhost"
        cert.set_serial_number(1000)
        cert.gmtime_adj_notBefore(0)
        cert.gmtime_adj_notAfter(365 * 24 * 60 * 60)  # Valid for 1 year
        cert.set_issuer(cert.get_subject())
        cert.set_pubkey(key)
        cert.sign(key, 'sha256')
        
        # Save certificate
        with open(cert_file, "wb") as f:
            f.write(crypto.dump_certificate(crypto.FILETYPE_PEM, cert))
        
        # Save private key
        with open(key_file, "wb") as f:
            f.write(crypto.dump_privatekey(crypto.FILETYPE_PEM, key))
        
        print(f"Generated SSL certificate: {cert_file}")
        print(f"Generated private key: {key_file}")
        return True
        
    except ImportError:
        print("Error: pyOpenSSL is required for SSL certificate generation.")
        print("Install it with: pip install pyopenssl")
        return False

def main():
    """Main function to start the HTTPS server"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Restricted HTTPS Server')
    parser.add_argument('--port', '-p', type=int, default=8443,
                       help='Port to listen on (default: 8443)')
    parser.add_argument('--bind', '-b', default='0.0.0.0',
                       help='IP address to bind to (default: 0.0.0.0)')
    parser.add_argument('--cert', default='server.crt',
                       help='SSL certificate file (default: server.crt)')
    parser.add_argument('--key', default='server.key',
                       help='SSL private key file (default: server.key)')
    parser.add_argument('--directory', '-d', default='.',
                       help='Directory to serve files from (default: current directory)')
    
    args = parser.parse_args()
    
    # Change to the specified directory
    os.chdir(args.directory)
    
    # Check for SSL certificates
    if not os.path.exists(args.cert) or not os.path.exists(args.key):
        print("SSL certificate files not found.")
        if input("Generate self-signed certificates? (y/n): ").lower() == 'y':
            if not generate_self_signed_cert(args.cert, args.key):
                sys.exit(1)
        else:
            print("You can generate certificates with: openssl req -new -x509 -keyout server.key -out server.crt -days 365 -nodes")
            sys.exit(1)
    
    # Create server
    with RestrictedHTTPServer((args.bind, args.port), RestrictedHTTPHandler) as httpd:
        # Setup SSL
        httpd.socket = ssl.wrap_socket(
            httpd.socket,
            keyfile=args.key,
            certfile=args.cert,
            server_side=True,
            ssl_version=ssl.PROTOCOL_TLS
        )
        
        print(f"Server starting on https://{args.bind if args.bind != '0.0.0.0' else 'localhost'}:{args.port}")
        print(f"Serving files from: {os.path.abspath(args.directory)}")
        print(f"Assets folder images are restricted to internal access only")
        print("Press Ctrl+C to stop the server")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
        except Exception as e:
            print(f"Server error: {e}")
            sys.exit(1)

if __name__ == "__main__":
    main()
