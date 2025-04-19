import Link from "next/link";
import { Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">About Us</h3>
            <p className="text-slate-300 mb-6">
              A leading renewable energy consultancy, with a multi-disciplined team of skilled
              engineers, specialising in the design, construction and project management of
              renewable energy projects in the UK and internationally.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/HydroplanUK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/hydroplan-uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/associations" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Associations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <address className="not-italic">
              <p className="text-slate-300 mb-2">Head Office:</p>
              <p className="text-slate-300 mb-4">
                Unit 12 Riverside Park<br />
                Station Road, Wimborne<br />
                Dorset, England<br />
                BH21 1QU
              </p>
              <p className="text-slate-300 mb-2">
                Phone: <a href="tel:+441202886622" className="hover:text-blue-400 transition-colors">+44 (0)1202 886622</a>
              </p>
              <p className="text-slate-300 mb-2">
                E-Mail: <a href="mailto:info@hydroplan.co.uk" className="hover:text-blue-400 transition-colors">info@hydroplan.co.uk</a>
              </p>
              <p className="text-slate-300">
                Web: <a href="https://www.hydroplan.co.uk" className="hover:text-blue-400 transition-colors">www.hydroplan.co.uk</a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-slate-950 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-slate-400">
            ©{new Date().getFullYear()} Hydroplan. All Rights Reserved | Hydropower Consultancy
          </p>
        </div>
      </div>
    </footer>
  );
}
