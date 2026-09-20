export default function Settings() {
  return (
    <div>
      <h1 className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium tracking-tight text-[#1A1D26]">
        Settings
      </h1>
      <p className="mt-1 text-sm text-[#6B7280]">
        Manage your portfolio preferences and configurations.
      </p>

      <div className="mt-6 space-y-6">
        <div className="rounded-xl border border-[#E8EAF0] bg-white overflow-hidden shadow-sm">
          <div className="border-b border-[#E8EAF0] px-5 py-4 bg-[#F9FAFB]">
            <h2 className="font-medium text-[#111827]">Profile Information</h2>
            <p className="mt-1 text-sm text-[#9CA3AF]">Update your personal details and public profile.</p>
          </div>

          <div className="px-5 py-6 space-y-4">
            <div className="grid sm:grid-cols-[1fr_2fr] gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-[#4B5563]">Display Name</label>
              </div>
              <div>
                <input
                  type="text"
                  defaultValue="Nikhil Tiwari"
                  className="w-full rounded-md bg-[#F9FAFB] border border-[#E8EAF0] px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                  disabled
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-[1fr_2fr] gap-4 items-center">
              <div>
                <label className="block text-sm font-medium text-[#4B5563]">Contact Email</label>
              </div>
              <div>
                <input
                  type="email"
                  defaultValue="developernikhil14@gmail.com"
                  className="w-full rounded-md bg-[#F9FAFB] border border-[#E8EAF0] px-3 py-2 text-sm text-[#111827] focus:outline-none focus:border-[#0F766E] focus:ring-2 focus:ring-[#0F766E]/20"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[#E8EAF0] bg-white overflow-hidden opacity-75 shadow-sm">
          <div className="border-b border-[#E8EAF0] px-5 py-4 bg-[#F9FAFB]">
            <h2 className="font-medium text-[#111827]">Theme Preferences</h2>
            <p className="mt-1 text-sm text-[#9CA3AF]">Set your default viewing experience.</p>
          </div>
          <div className="px-5 py-6">
            <p className="text-sm text-[#9CA3AF] italic">Coming soon: Theme switcher functionality</p>
          </div>
        </div>
      </div>
    </div>
  );
}
