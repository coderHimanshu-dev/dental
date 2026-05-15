import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AppointmentCTA() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 bg-slate-800 relative">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Clinic Background" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary p-10 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Ready for your new smile?</h2>
            <p className="text-blue-50 mb-8 text-lg">Book your consultation today and take the first step towards perfect oral health.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  1
                </div>
                <div>
                  <h4 className="font-semibold">Fill the form</h4>
                  <p className="text-sm text-blue-100">Takes less than 2 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  2
                </div>
                <div>
                  <h4 className="font-semibold">Get a confirmation</h4>
                  <p className="text-sm text-blue-100">We'll call you to confirm time</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  3
                </div>
                <div>
                  <h4 className="font-semibold">Visit Clinic</h4>
                  <p className="text-sm text-blue-100">Experience premium care</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 p-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Request Appointment</h3>
            
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-600 p-6 rounded-xl border border-green-200 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                <h4 className="text-xl font-bold mb-2">Request Sent!</h4>
                <p>We'll contact you shortly to confirm your appointment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                    <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                    <input required type="text" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input required type="tel" className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Treatment Type</label>
                  <select required className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-white">
                    <option value="">Select Treatment</option>
                    <option value="general">General Checkup</option>
                    <option value="cleaning">Teeth Cleaning</option>
                    <option value="whitening">Whitening</option>
                    <option value="pain">Tooth Pain / Emergency</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 mt-2 shadow-md"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : 'Submit Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
