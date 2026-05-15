import AppointmentCTA from '../components/sections/AppointmentCTA';

export default function BookAppointment() {
  return (
    <div className="pt-[72px]">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Book an Appointment</h1>
          <p className="text-slate-400 text-lg">Schedule your visit online. Fast, easy, and convenient.</p>
        </div>
      </div>
      <AppointmentCTA />
    </div>
  );
}
