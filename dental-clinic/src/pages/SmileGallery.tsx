import SmileGalleryPreview from '../components/sections/SmileGalleryPreview';

export default function SmileGallery() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smile Gallery</h1>
          <p className="text-slate-400 text-lg">Browse our collection of stunning transformations and see what's possible for your smile.</p>
        </div>
      </div>
      <SmileGalleryPreview />
      {/* We can reuse the preview component and maybe duplicate it or add more items in a real app */}
      <div className="pb-20 bg-white -mt-10">
         <SmileGalleryPreview />
      </div>
    </div>
  );
}
