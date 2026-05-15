import FAQPreview from '../components/sections/FAQPreview';

export default function FAQ() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-slate-400 text-lg">Find answers to common questions about our services, insurance, and procedures.</p>
        </div>
      </div>
      <FAQPreview />
      {/* We can reuse the preview component or build a full one. For demo purposes, we reuse */}
    </div>
  );
}
