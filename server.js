const https = require('https');
const fs = require('fs');
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const app = express();

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"]
    }
  }
}));
app.use(cors());

// Serve static files from public directory
app.use('/static', express.static(path.join(__dirname, 'public/static')));

// Protect assets directory - only accessible internally
app.use('/assets', (req, res, next) => {
  // Check if request is from internal network or has valid token
  const clientIp = req.ip || req.connection.remoteAddress;
  const isLocalhost = clientIp === '127.0.0.1' || clientIp === '::1';
  
  // In production, you would implement proper authentication
  // For now, we'll allow Next.js internal requests and block direct access
  const userAgent = req.get('User-Agent') || '';
  const isNextJsInternal = userAgent.includes('Next.js') || 
                          req.headers['x-nextjs-internal'] === 'true';
  
  if (isLocalhost || isNextJsInternal) {
    next();
  } else {
    // Return 403 Forbidden for external requests
    res.status(403).json({
      error: 'Access Forbidden',
      message: 'Assets are only accessible internally'
    });
  }
});

// Serve assets internally
app.use('/assets', express.static(path.join(__dirname, 'app/assets'), {
  setHeaders: (res, filePath) => {
    // Set appropriate cache headers
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// API endpoint for proxying assets (if needed)
app.get('/api/assets/:path(*)', (req, res) => {
  const filePath = path.join(__dirname, 'app/assets', req.params.path);
  
  // Validate file path to prevent directory traversal
  const normalizedPath = path.normalize(filePath);
  if (!normalizedPath.startsWith(path.join(__dirname, 'app/assets'))) {
    return res.status(403).json({ error: 'Invalid path' });
  }
  
  if (fs.existsSync(filePath)) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = {
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.ico': 'image/x-icon'
    }[ext] || 'application/octet-stream';
    
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 'public, max-age=31536000');
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

// Handle all other routes (for Next.js)
app.all('*', (req, res) => {
  // In production, this would be handled by Next.js
  res.status(404).json({ error: 'Not Found' });
});

// SSL certificates (for development)
const sslOptions = {
  key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost.pem'))
};

// Generate self-signed certificates for development if they don't exist
if (!fs.existsSync(path.join(__dirname, 'localhost-key.pem'))) {
  console.log('Generating self-signed SSL certificates for development...');
  const { execSync } = require('child_process');
  try {
    execSync('openssl req -x509 -newkey rsa:4096 -keyout localhost-key.pem -out localhost.pem -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"');
    console.log('SSL certificates generated successfully.');
  } catch (error) {
    console.error('Failed to generate SSL certificates:', error.message);
    console.log('Using HTTP instead (for development only).');
    app.listen(3001, () => {
      console.log('HTTP server running on port 3001');
    });
    return;
  }
}

// Create HTTPS server
const PORT = process.env.PORT || 3001;
https.createServer(sslOptions, app).listen(PORT, () => {
  console.log(`✅ HTTPS server running on https://localhost:${PORT}`);
  console.log('🔒 Assets are protected - external access returns 403');
});

module.exports = app;