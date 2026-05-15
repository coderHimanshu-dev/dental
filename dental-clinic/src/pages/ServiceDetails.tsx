import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ServiceDetails() {
  const { id } = useParams();

  // In a real app, you would fetch details based on ID.
  // For this mockup, we'll just format the ID into a title.
  const title = id?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Service Details';

  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-slate-400 text-lg">Learn more about our advanced {title.toLowerCase()} procedures.</p>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt={title}
            className="w-full h-96 object-cover rounded-3xl mb-12 shadow-lg"
          />
          
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Overview</h2>
            <p className="mb-6">
              Our {title.toLowerCase()} treatment is designed with your comfort and long-term oral health in mind. Utilizing the latest technology and materials, we ensure a seamless and pain-free experience from start to finish.
            </p>
            
            <h3 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Treatment Steps</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Comprehensive initial consultation and 3D imaging.</li>
              <li>Customized treatment planning tailored to your needs.</li>
              <li>Painless execution using advanced anesthetics.</li>
              <li>Post-treatment care and follow-up to ensure optimal recovery.</li>
            </ul>
          </div>
          
          <div className="mt-12 bg-light p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100">
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-2">Ready to transform your smile?</h4>
              <p className="text-slate-600">Book your consultation for {title.toLowerCase()} today.</p>
            </div>
            <Link to="/book" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-all shadow-md">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
