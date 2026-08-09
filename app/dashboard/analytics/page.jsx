const TRAFFIC = [
  { source: "Google search", visits: 1240 },
  { source: "GitHub profile", visits: 860 },
  { source: "LinkedIn", visits: 610 },
  { source: "Direct", visits: 520 },
  { source: "Referral", visits: 252 },
];

const max = Math.max(...TRAFFIC.map((t) => t.visits));

export default function Analytics() {
  return (
    <div>
      <h1 className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium tracking-tight">
        Analytics
      </h1>
      <p className="mt-1 text-sm text-[#9BA3AF]">
        Where your portfolio traffic is coming from this month.
      </p>

      <div className="mt-6 rounded-lg border border-[#23262E] bg-[#14161C] p-5 sm:p-6">
        <div className="space-y-4">
          {TRAFFIC.map((row) => (
            <div key={row.source}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-[#C4C9D1]">{row.source}</span>
                <span className="font-mono text-xs text-[#7A8290]">
                  {row.visits.toLocaleString()}
                </span>
              </div>
              <div className="h-2 rounded-full bg-[#1B1E26] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#4FD1C5]"
                  style={{ width: `${(row.visits / max) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
