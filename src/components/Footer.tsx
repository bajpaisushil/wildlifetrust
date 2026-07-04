"use client";

import { useState } from "react";
import Link from "next/link";
import { TreePine, Mail, Phone, MapPin, Send } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-primary text-white border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-2 bg-accent rounded-lg text-white">
                <TreePine className="h-6 w-6" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                WildTrust
              </span>
            </Link>
            <p className="text-stone-300 text-sm leading-relaxed">
              We are a dedicated non-profit organization focused on protecting critical habitats, conserving endangered species, and engaging communities worldwide in environmental stewardship.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors duration-300" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors duration-300" aria-label="Twitter">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors duration-300" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.008 3.752.052 1.014.044 1.57.213 1.941.35.498.193.853.423 1.229.8.376.377.605.733.798 1.23.137.37.306.927.35 1.94.042.969.05 1.327.05 3.753 0 2.43-.008 2.784-.052 3.752-.044 1.014-.213 1.57-.35 1.941-.193.498-.423.853-.8 1.229-.377.376-.733.605-1.23.798-.37.137-.927.306-1.94.35-1.025.044-1.378.052-3.77.052-2.422 0-2.775-.008-3.752-.052-1.014-.044-1.57-.213-1.941-.35a3.444 3.444 0 01-1.229-.8 3.444 3.444 0 01-.8-1.229c-.137-.37-.306-.927-.35-1.94-.044-1.025-.052-1.378-.052-3.77 0-2.422.008-2.775.052-3.752.044-1.014.213-1.57.35-1.941.193-.498.423-.853.8-1.229.376-.377.733-.605 1.23-.798.37-.137.927-.306 1.94-.35C8.905 2.008 9.26 2 11.69 2h.625zm-.007 1.777c-2.38 0-2.663.01-3.601.053-.883.041-1.36.19-1.68.314-.424.164-.726.36-1.042.677-.317.316-.513.618-.677 1.042-.124.32-.273.797-.313 1.68-.043.938-.052 1.22-.052 3.6 0 2.38.01 2.663.053 3.601.04 883.19 1.36.314 1.68.164.424.36.726.677 1.042.316.317.618.513 1.042.677.32.124.797.273 1.68.313.938.044 1.22.053 3.601.053 2.38 0 2.663-.01 3.601-.053.883-.04 1.36-.19 1.68-.314.424-.164.726-.36 1.042-.677.317-.316.513-.618.677-1.042.124-.32.273-.797.313-1.68.043-.938.052-1.22.052-3.6 0-2.38-.01-2.663-.053-3.601-.04-.883-.19-1.36-.314-1.68a2.507 2.507 0 00-.677-1.042 2.507 2.507 0 00-1.042-.677c-.32-.124-.797-.273-1.68-.313-.938-.043-1.22-.052-3.6-.052zm0 3.058a4.85 4.85 0 100 9.7 4.85 4.85 0 000-9.7zm0 7.923a3.073 3.073 0 110-6.146 3.073 3.073 0 010 6.146zm4.823-7.923a1.162 1.162 0 100 2.324 1.162 1.162 0 000-2.324z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-accent rounded-full transition-colors duration-300" aria-label="Github">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg border-b border-white/10 pb-2">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">Home Page</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">Our History & Team</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">Active Conservation Projects</Link>
              </li>
              <li>
                <Link href="/get-involved" className="hover:text-accent transition-colors">Ways to Get Involved</Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-accent transition-colors">Trust News & Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg border-b border-white/10 pb-2">Contact Info</h3>
            <ul className="space-y-3.5 text-sm text-stone-300">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>142 Redwood Canopy Road, Emerald Valley, CA 94025</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <span>+1 (800) 555-WILD</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <span>contact@wildlifetrust.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg border-b border-white/10 pb-2">Newsletter</h3>
            <p className="text-stone-300 text-sm leading-relaxed">
              Subscribe to receive wildlife stories, habitat updates, and urgent alerts directly in your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder-stone-400 focus:outline-none focus:border-accent transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bg-accent hover:bg-accent-hover text-white p-2 rounded-full transition-colors duration-300"
                  aria-label="Subscribe"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-green-400 animate-fade-in font-medium">
                  Thanks for subscribing! Check your inbox soon.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer Credits */}
      <div className="border-t border-white/5 bg-primary-hover/50 py-6 text-xs text-stone-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Wildlife and Habitat Trust. All Rights Reserved. NGO Registration No. WHT-98317A.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-200 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-stone-200 transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
