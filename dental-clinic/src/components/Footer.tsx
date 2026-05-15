import { Link } from 'react-router-dom';
import { FaTooth, FaInstagram, FaWhatsapp, FaFacebook, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div>
            <Link to="/" className="flex items-center gap-2 text-primary mb-6">
              <FaTooth className="w-8 h-8" />
              <span className="text-xl font-bold text-white tracking-tight">Luxe<span className="text-primary">Dental</span></span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Experience premium dental care in a modern, calming environment. We bring beautiful, healthy smiles to life with advanced technology and expert care.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Clinic</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Smile Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Patient Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Treatments</h3>
            <ul className="space-y-3">
              <li><Link to="/services/teeth-cleaning" className="hover:text-primary transition-colors">Teeth Cleaning</Link></li>
              <li><Link to="/services/root-canal" className="hover:text-primary transition-colors">Root Canal</Link></li>
              <li><Link to="/services/implants" className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link to="/services/invisalign" className="hover:text-primary transition-colors">Invisalign</Link></li>
              <li><Link to="/services/whitening" className="hover:text-primary transition-colors">Teeth Whitening</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>123 Wellness Avenue, Medical District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-primary flex-shrink-0" />
                <span>hello@luxedental.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Clinic Hours</h4>
              <p className="text-sm text-slate-400">Mon - Fri: 8:00 AM - 8:00 PM</p>
              <p className="text-sm text-slate-400">Sat - Sun: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} LuxeDental Clinic. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
