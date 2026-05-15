import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const feed = [
  'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
];

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-4 shadow-lg">
            <FaInstagram />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2">Follow Our Journey</h2>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">@LuxeDentalClinic</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {feed.map((img, index) => (
            <motion.a
              href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-xl overflow-hidden shadow-sm"
            >
              <img src={img} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <FaInstagram className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity transform scale-50 group-hover:scale-100 duration-300" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
