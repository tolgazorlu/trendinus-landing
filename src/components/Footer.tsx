import React from "react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Analytics", href: "#analytics" },
    { name: "Brand Matching", href: "#brands" },
    { name: "Campaign Tools", href: "#campaigns" },
  ],
  resources: [
    { name: "Help Center", href: "/help" },
    { name: "Creator Guide", href: "/guide" },
    { name: "API Documentation", href: "/docs" },
    { name: "Case Studies", href: "/cases" },
    { name: "Blog", href: "/blog" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Press Kit", href: "/press" },
    { name: "Contact", href: "/contact" },
    { name: "Partners", href: "/partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "DMCA", href: "/dmca" },
  ],
};

const socialLinks = [
  { name: "Discord", icon: "💬", href: "https://discord.gg/trendinus" },
  { name: "Twitter", icon: "🐦", href: "https://twitter.com/trendinus" },
  { name: "YouTube", icon: "📺", href: "https://youtube.com/trendinus" },
  { name: "Twitch", icon: "🎮", href: "https://twitch.tv/trendinus" },
  { name: "LinkedIn", icon: "💼", href: "https://linkedin.com/company/trendinus" },
];

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                TRENDINUS
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">
                Transform your gaming passion into influence and income. 
                Join the revolution of gaming creators.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-lg hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-purple-500/20 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-3">
              Stay in the Game
            </h3>
            <p className="text-gray-400 mb-6 text-sm">
              Get the latest gaming trends, creator tips, and exclusive opportunities.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-purple-900/20 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Trendinus. All rights reserved. Built for gamers, by gamers.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>🎮 Supporting 50+ Games</span>
              <span>🌍 Available Worldwide</span>
              <span>⚡ 99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
