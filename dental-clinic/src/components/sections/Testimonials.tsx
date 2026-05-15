import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const reviews = [
  {
    name: 'Sarah Johnson',
    text: 'The best dental experience I\'ve ever had. The staff is incredibly friendly, and the clinic feels like a luxury spa. My Invisalign treatment went perfectly!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Michael Chen',
    text: 'I\'ve always had severe dental anxiety, but the team here made me feel so relaxed. The painless root canal was actually painless. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    name: 'Emma Williams',
    text: 'Got my veneers done here and I literally cannot stop smiling. The attention to detail and care they put into their work is unmatched.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Loved by <span className="text-gradient">Thousands</span></h2>
          <p className="text-slate-600 text-lg">Don&apos;t just take our word for it. Read what our happy patients have to say about their experience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl relative mt-8"
            >
              <div className="absolute -top-6 left-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-lg">
                <FaQuoteLeft />
              </div>
              
              <div className="flex gap-1 text-yellow-400 mb-4 mt-2">
                {[...Array(review.rating)].map((_, i) => <FaStar key={i} />)}
              </div>
              
              <p className="text-slate-600 mb-6 italic">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                <div>
                  <h4 className="font-bold text-slate-800">{review.name}</h4>
                  <p className="text-xs text-slate-500">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
