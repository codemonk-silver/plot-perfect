// components/layout/footer.tsx
import { Container } from './Container';
import { Building2, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  properties: [
    { label: 'Buy', href: '/properties?type=sale' },
    { label: 'Rent', href: '/properties?type=rent' },
    { label: 'Commercial', href: '/properties?type=commercial' },
    { label: 'Luxury', href: '/properties?luxury=true' },
    { label: 'New Developments', href: '/properties?new=true' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-white">
                ClassyTan
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-sm">
              Discover extraordinary living with our curated collection of premium properties worldwide.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Properties</h4>
            <ul className="space-y-3">
              {footerLinks.properties.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © 2024 ClassyTan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <button className="hover:text-white transition-colors">🇺🇸 United States</button>
            <button className="hover:text-white transition-colors">English</button>
            <button className="hover:text-white transition-colors">USD ($)</button>
          </div>
        </div>
      </Container>
    </footer>
  );
}