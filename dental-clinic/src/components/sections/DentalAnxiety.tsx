import { motion } from 'framer-motion';
import { FaSpa, FaHeadphones, FaCoffee, FaBed } from 'react-icons/fa';

export default function DentalAnxiety() {
  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white rounded-full opacity-50 blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-blue-100 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-6 inline-block">Nervous Patient Program</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Overcome Your Dental Anxiety</h2>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              We understand that visiting the dentist can be daunting. That&apos;s why we&apos;ve designed our clinic and procedures specifically to help you relax, feel safe, and experience completely pain-free dentistry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <FaSpa />, title: 'Calming Environment', desc: 'Aromatherapy and soothing decor.' },
              { icon: <FaHeadphones />, title: 'Entertainment', desc: 'Noise-canceling headphones & Netflix.' },
              { icon: <FaCoffee />, title: 'Beverage Bar', desc: 'Complimentary tea, coffee, and water.' },
              { icon: <FaBed />, title: 'Sedation Options', desc: 'Safe sedation for complete relaxation.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
              >
                <div className="w-12 h-12 bg-blue-50 text-secondary rounded-full flex items-center justify-center text-xl mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
