import TestimonialsSection from '../components/sections/Testimonials';

export default function Testimonials() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Patient Reviews</h1>
          <p className="text-slate-400 text-lg">Read real stories from our patients who have transformed their smiles and their lives.</p>
        </div>
      </div>
      <TestimonialsSection />
      {/* Duplicate for visual fill in demo */}
      <div className="pb-20 bg-white -mt-10">
         <TestimonialsSection />
      </div>
    </div>
  );
}
