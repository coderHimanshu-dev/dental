import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import AboutClinic from '../components/sections/AboutClinic';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import SmileGalleryPreview from '../components/sections/SmileGalleryPreview';
import DentalAnxiety from '../components/sections/DentalAnxiety';
import Testimonials from '../components/sections/Testimonials';
import InstagramFeed from '../components/sections/InstagramFeed';
import AppointmentCTA from '../components/sections/AppointmentCTA';
import FAQPreview from '../components/sections/FAQPreview';

export default function Home() {
  return (
    <div className="pt-[72px]">
      <HeroSection />
      <ServicesPreview />
      <AboutClinic />
      <WhyChooseUs />
      <SmileGalleryPreview />
      <DentalAnxiety />
      <Testimonials />
      <InstagramFeed />
      <AppointmentCTA />
      <FAQPreview />
    </div>
  );
}
