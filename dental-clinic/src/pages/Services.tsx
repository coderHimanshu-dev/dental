import ServicesPreview from '../components/sections/ServicesPreview';

export default function Services() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Treatments & Services</h1>
          <p className="text-slate-400 text-lg">Comprehensive, modern, and pain-free dental treatments tailored to your unique smile.</p>
        </div>
      </div>
      <ServicesPreview />
    </div>
  );
}
