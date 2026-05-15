import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const transformations = [
  { id: 1, category: 'Whitening', imgBefore: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', imgAfter: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 2, category: 'Implants', imgBefore: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', imgAfter: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' },
  { id: 3, category: 'Braces', imgBefore: 'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', imgAfter: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' }
];

export default function SmileGalleryPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Real Patients, <span className="text-gradient">Real Results</span></h2>
            <p className="text-slate-600 text-lg">Browse our gallery of stunning smile transformations and see the difference premium dental care can make.</p>
          </div>
          <Link to="/gallery" className="flex-shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-medium transition-colors">
            View Full Gallery
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-square"
            >
              {/* Note: In a real app, you'd use a react-compare-slider component here. For now, we simulate a before/after split */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 overflow-hidden border-r-2 border-white relative">
                   <img src={item.imgBefore} alt="Before" className="w-[200%] max-w-none h-full object-cover" />
                   <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-xs font-semibold backdrop-blur-sm">Before</div>
                </div>
                <div className="w-1/2 overflow-hidden relative">
                   <img src={item.imgAfter} alt="After" className="w-[200%] max-w-none h-full object-cover -translate-x-1/2" />
                   <div className="absolute bottom-4 right-4 bg-primary/80 text-white px-3 py-1 rounded text-xs font-semibold backdrop-blur-sm">After</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-800 px-4 py-1 rounded-full text-sm font-bold shadow">
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
