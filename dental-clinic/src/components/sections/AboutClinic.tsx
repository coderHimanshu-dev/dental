import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AboutClinic() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Clinic Interior" 
                className="rounded-2xl h-64 object-cover w-full shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Doctor Treating Patient" 
                className="rounded-2xl h-80 object-cover w-full shadow-lg translate-y-8"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Redefining Dental Care with <span className="text-gradient">Compassion & Technology</span></h2>
            <p className="text-slate-600 mb-6 text-lg leading-relaxed">
              At LuxeDental, we believe visiting the dentist should be a relaxing and positive experience. Our clinic combines a soothing atmosphere with cutting-edge dental technology to provide you with the highest standard of care.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                'Internationally certified specialists',
                'Advanced sterilization protocols',
                'Painless treatment techniques',
                'Modern 3D imaging technology'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <FaCheckCircle className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="inline-flex items-center justify-center bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
              More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
