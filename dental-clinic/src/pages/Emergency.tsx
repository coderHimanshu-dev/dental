import { FaPhoneAlt, FaAmbulance, FaClock, FaTooth } from 'react-icons/fa';

export default function Emergency() {
  return (
    <div className="pt-[72px]">
      <div className="bg-red-600 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl relative z-10">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <FaAmbulance className="text-4xl text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Emergency Dental Care</h1>
          <p className="text-red-100 text-xl font-medium mb-8">Fast, painless relief when you need it most. We prioritize dental emergencies for same-day treatment.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              <FaPhoneAlt /> Call Now: (555) 123-4567
            </a>
            <a href="https://wa.me/15559876543" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
      
      <div className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">When to seek emergency care?</h2>
              <p className="text-slate-600 text-lg">If you are experiencing any of the following symptoms, please contact us immediately.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {[
                { icon: <FaTooth />, title: 'Severe Toothache', desc: 'Intense, unremitting pain that prevents sleep or normal activities.' },
                { icon: <FaTooth />, title: 'Knocked-Out Tooth', desc: 'A permanent tooth that has been completely knocked out of its socket.' },
                { icon: <FaTooth />, title: 'Chipped or Broken Tooth', desc: 'Significant fracture causing pain or sharp edges.' },
                { icon: <FaTooth />, title: 'Abscess or Swelling', desc: 'Painful swelling in gums, face, or neck indicating an infection.' },
                { icon: <FaTooth />, title: 'Lost Filling or Crown', desc: 'Resulting in severe sensitivity or pain.' },
                { icon: <FaTooth />, title: 'Bleeding Gums', desc: 'Severe or uncontrollable bleeding following a procedure or injury.' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center flex-shrink-0 text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl text-center">
              <FaClock className="text-4xl text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">After-Hours Protocol</h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                If you experience a dental emergency outside our regular clinic hours, please call our emergency hotline. Our on-call specialist will advise you on the next steps and arrange an immediate appointment if necessary.
              </p>
              <a href="tel:+15551234567" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Emergency Hotline: (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
