const Statistics = () => {
  const stats = [
    { value: "5K+", label: "Jobs Posted" },
    { value: "3K+", label: "Freelancers" },
    { value: "1K+", label: "Companies" },
  ];

  return (
    <section className="py-16">
      <div className="grid md:grid-cols-3 gap-6 text-center shadow-sm shadow-orange-500 rounded-md py-10 px-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white hover:bg-orange-300 p-6 rounded-xl shadow">
            <h3 className="text-3xl font-bold text-orange-500">{s.value}</h3>
            <p className="text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
