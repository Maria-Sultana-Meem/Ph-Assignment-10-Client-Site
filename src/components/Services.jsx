const Services = () => {
  return (
    <section className="py-16 ">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our <span className="text-orange-500">Services</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {["Job Posting", "Task Acceptance", "Secure Payments"].map((s, i) => (
          <div key={i} className="bg-white hover:bg-orange-300 p-6 rounded-xl shadow">
            <h3 className="font-semibold text-xl mb-2">{s}</h3>
            <p className="text-gray-600 text-sm">
              Professional freelance services designed for productivity.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
