export function TrustStrip() {
  const items = [
    "Chartered Accountants",
    "Law Firms",
    "Architecture Studios",
    "Real Estate Agencies",
    "Medical Clinics",
    "50+ SMEs Served",
    "Independent Consultants",
    "Financial Advisors",
    "Tax Professionals",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="border-y border-white/[0.06] bg-[#0D1117] overflow-hidden py-3.5">
      <div className="flex">
        <div className="flex items-center gap-0 animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-7
                                     text-[13px] text-white/25"
            >
              <span className="w-1 h-1 rounded-full bg-brand-blue flex-shrink-0" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
