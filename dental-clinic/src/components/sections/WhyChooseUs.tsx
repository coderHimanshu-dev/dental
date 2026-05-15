import { motion } from 'framer-motion';
import { FaHeartbeat, FaMicroscope, FaUserMd, FaAmbulance, FaShieldAlt, FaHandHoldingHeart } from 'react-icons/fa';

const features = [
  { icon: <FaHeartbeat />, title: 'Pain-Free Dentistry', desc: 'Experience gentle treatments with our advanced pain management techniques.' },
  { icon: <FaMicroscope />, title: 'Advanced Technology', desc: 'We utilize 3D scanners, digital X-rays, and lasers for precise care.' },
  { icon: <FaUserMd />, title: 'Experienced Doctors', desc: 'Our specialists have decades of combined experience in complex cases.' },
  { icon: <FaAmbulance />, title: 'Emergency Care', desc: 'Same-day appointments for urgent dental problems and toothaches.' },
  { icon: <FaShieldAlt />, title: 'Sterilized Equipment', desc: 'Strict multi-step sterilization protocols for your safety.' },
  { icon: <FaHandHoldingHeart />, title: 'Personalized Treatment', desc: 'Custom care plans tailored to your specific needs and budget.' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-primary">LuxeDental?</span></h2>
          <p className="text-slate-400 text-lg">We combine luxury, technology, and compassion to provide an unmatched dental experience.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-14 h-14 bg-slate-700 rounded-xl flex items-center justify-center text-primary text-2xl mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
