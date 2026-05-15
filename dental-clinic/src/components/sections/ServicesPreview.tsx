import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTooth, FaSmile, FaNotesMedical } from 'react-icons/fa';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { BiPlusMedical } from 'react-icons/bi';

const services = [
  { id: 'teeth-cleaning', title: 'Teeth Cleaning', icon: <FaTooth />, desc: 'Professional cleaning and polishing for a brighter, healthier smile.' },
  { id: 'root-canal', title: 'Root Canal', icon: <MdOutlineMedicalServices />, desc: 'Pain-free root canal treatment using advanced rotary endodontics.' },
  { id: 'implants', title: 'Dental Implants', icon: <FaTooth />, desc: 'Permanent, natural-looking replacement for missing teeth.' },
  { id: 'braces', title: 'Braces', icon: <FaTooth />, desc: 'Traditional and ceramic braces for perfect teeth alignment.' },
  { id: 'invisalign', title: 'Invisalign', icon: <FaSmile />, desc: 'Clear, removable aligners for discreet orthodontic treatment.' },
  { id: 'whitening', title: 'Teeth Whitening', icon: <FaTooth />, desc: 'Advanced laser whitening for instantly brighter teeth.' },
  { id: 'pediatric', title: 'Pediatric Dentistry', icon: <FaNotesMedical />, desc: 'Gentle, friendly care tailored specifically for children.' },
  { id: 'smile-makeover', title: 'Smile Makeover', icon: <BiPlusMedical />, desc: 'Comprehensive cosmetic treatments for your dream smile.' },
];

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Premium <span className="text-gradient">Services</span></h2>
          <p className="text-slate-600 text-lg">Comprehensive dental care utilizing state-of-the-art technology for painless, effective treatments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/services/${service.id}`} className="block h-full bg-slate-50 rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-blue-100 text-primary rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-2">{service.desc}</p>
                <div className="text-primary font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-primary transition-colors">
            View All Services <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
