import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-slate-400 text-lg">We're here to help. Get in touch with us for any inquiries or to book an appointment.</p>
        </div>
      </div>
      
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"></textarea>
                </div>
                <button type="button" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-medium transition-all w-full shadow-md">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Clinic Address</h4>
                      <p className="text-slate-600 mt-1">123 Wellness Avenue, Medical District, NY 10001</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Phone Number</h4>
                      <p className="text-slate-600 mt-1">+1 (555) 123-4567</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <FaEnvelope />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">Email</h4>
                      <p className="text-slate-600 mt-1">hello@luxedental.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white text-green-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <FaWhatsapp className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">WhatsApp</h4>
                      <p className="text-slate-600 mt-1">+1 (555) 987-6543</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-2xl overflow-hidden h-64 border border-slate-200">
                {/* Mock Google Maps embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1689253406461!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
