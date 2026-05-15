import AboutClinic from '../components/sections/AboutClinic';
import WhyChooseUs from '../components/sections/WhyChooseUs';

export default function About() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About LuxeDental</h1>
          <p className="text-slate-400 text-lg">We are committed to providing the highest quality dental care in a relaxing, state-of-the-art environment.</p>
        </div>
      </div>
      <AboutClinic />
      <WhyChooseUs />
    </div>
  );
}
