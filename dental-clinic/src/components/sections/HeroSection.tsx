import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaStar, FaCheckCircle } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <section className="relative bg-light overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 z-0"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-6 border border-slate-100">
              <span className="flex text-yellow-400"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span>
              <span className="text-sm font-semibold text-slate-700">4.9/5 from 2,000+ Patients</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
              Experience the Future of <span className="text-gradient">Premium Dentistry</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Transform your smile in a calming, state-of-the-art environment. Gentle care, advanced technology, and a commitment to your long-term oral health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/book" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-medium text-center transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Book Appointment
              </Link>
              <Link to="/emergency" className="bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-full font-medium text-center transition-all hover:shadow-md">
                Emergency Care
              </Link>
            </div>
            
            <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary w-5 h-5" />
                <span>Pain-Free Procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-secondary w-5 h-5" />
                <span>Top Rated Experts</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Modern Dental Clinic" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-dark rounded-2xl p-6 text-white max-w-xs shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-xl font-bold">
                  15+
                </div>
                <div>
                  <h4 className="font-semibold">Years Experience</h4>
                  <p className="text-sm text-slate-300">Trusted by thousands</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
