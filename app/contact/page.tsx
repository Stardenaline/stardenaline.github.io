'use client';

import { Mail } from 'lucide-react';

export default function ContactPage() {
  const email = 'contact.stars.business@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-background-card rounded-2xl overflow-hidden border border-accent/10 shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* Contact Message */}
          <div className="p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-6 relative inline-block">
              Get In Touch
              <div className="w-16 h-1 bg-accent mt-2"></div>
            </h1>
            
            <p className="text-text-primary text-lg mb-4">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
            
            <p className="text-text-primary mb-6">
              Email me directly at:
            </p>
            
            <button
              onClick={handleEmailClick}
              className="w-full md:w-auto px-8 py-4 bg-transparent text-accent border-2 border-accent rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-accent hover:text-background-dark hover:shadow-xl hover:shadow-accent/30 flex items-center justify-center gap-3"
            >
              <Mail size={24} />
              {email}
            </button>
            
            <p className="text-text-primary mt-8">
              I'm always open to new collaborations, projects, or just a friendly chat!
            </p>
          </div>

          {/* Contact Image */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 p-12 flex items-center justify-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-48 h-48 mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-full h-full text-accent"
                >
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-conic from-accent/10 via-transparent to-accent/10 animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
