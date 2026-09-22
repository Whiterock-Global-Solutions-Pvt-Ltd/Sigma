const stats = [
  { value: "£200M+", label: "Funding facilitated" },
  { value: "5,000+", label: "UK businesses helped" },
  { value: "50+", label: "Specialist lenders" },
  { value: "24–48h", label: "Typical decision time" },
  { value: "6.9%", label: "Rates from" },
];

export default function StatsBar() {
  return (
    <section className="border-y border-primary-800/10 bg-primary-950">
      <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 text-center lg:text-left">
            <span className="text-2xl font-bold text-white sm:text-3xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-primary-200/80 sm:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
