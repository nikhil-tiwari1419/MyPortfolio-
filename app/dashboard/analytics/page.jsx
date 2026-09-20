import { Globe, ArrowUpRight } from "lucide-react";

const TRAFFIC = [
  { source: "Google Search", visits: 1240, percentage: 35 },
  { source: "GitHub Profile", visits: 860, percentage: 24 },
  { source: "LinkedIn", visits: 610, percentage: 17 },
  { source: "Direct Traffic", visits: 520, percentage: 15 },
  { source: "Referrals", visits: 252, percentage: 9 },
];

export default function Analytics() {
  const totalVisits = TRAFFIC.reduce((acc, curr) => acc + curr.visits, 0);

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium tracking-tight text-[#1A1D26]">
            Analytics
          </h1>
          <p className="mt-1 text-sm text-[#6B7280]">
            Where your portfolio traffic is coming from this month.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#E6F7F5] border border-[#0F766E]/20 px-3 py-1.5 rounded-lg text-xs font-mono text-[#0F766E] w-fit">
          <span className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
          Live Metrics
        </div>
      </div>

      <div className="mt-6 rounded-xl border border-[#E8EAF0] bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between pb-6 border-b border-[#E8EAF0]">
          <div>
            <p className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">Total Monthly Views</p>
            <p className="mt-1 font-[Space_Grotesk,ui-sans-serif] text-3xl font-semibold text-[#111827]">
              {totalVisits.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-[#0F766E] bg-[#E6F7F5] px-3 py-1.5 rounded-full">
            <ArrowUpRight size={14} />
            +18.4%
          </div>
        </div>

        <div className="mt-6 space-y-5">
          <p className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">Traffic Sources</p>
          {TRAFFIC.map((row) => (
            <div key={row.source} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#4B5563] flex items-center gap-2">
                  <Globe size={14} className="text-[#9CA3AF]" />
                  {row.source}
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    {row.visits.toLocaleString()} visits
                  </span>
                  <span className="font-mono text-xs font-medium text-[#0F766E] w-8 text-right">
                    {row.percentage}%
                  </span>
                </div>
              </div>
              <div className="h-2 rounded-full bg-[#F3F4F6] border border-[#E8EAF0] overflow-hidden">
                <div
                  className="h-full rounded-full bg-[#0F766E] transition-all duration-500"
                  style={{ width: `${row.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
