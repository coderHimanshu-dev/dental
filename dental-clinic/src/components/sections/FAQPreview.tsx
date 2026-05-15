import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const faqs = [
  {
    q: 'Is root canal painful?',
    a: 'Not at all. With our advanced anesthesia and modern techniques, a root canal is completely painless and feels similar to getting a routine filling.'
  },
  {
    q: 'How long does braces treatment take?',
    a: 'Treatment time varies depending on the complexity of your case, but typically ranges from 12 to 24 months. We also offer fast-acting aligners for minor corrections.'
  },
  {
    q: 'Is teeth whitening safe?',
    a: 'Yes, professional teeth whitening at our clinic is 100% safe. We use FDA-approved materials and carefully monitor the process to protect your enamel and gums.'
  },
  {
    q: 'Do you provide emergency dental care?',
    a: 'Yes, we provide same-day emergency dental care. If you are experiencing severe pain, bleeding, or have a broken tooth, please call us immediately or use our emergency booking form.'
  }
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked <span className="text-gradient">Questions</span></h2>
            <p className="text-slate-600 text-lg mb-8">Got questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact our support team.</p>
            
            <div className="flex gap-4">
              <Link to="/faq" className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-medium transition-colors">
                View All FAQs
              </Link>
              <Link to="/contact" className="text-primary hover:text-primary/80 px-6 py-3 font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-primary bg-blue-50/30' : 'border-slate-200 bg-white hover:border-slate-300'}`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-800">{faq.q}</span>
                  <HiChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180 text-primary' : ''}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
