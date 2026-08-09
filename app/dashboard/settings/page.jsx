"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/data";

export default function Settings() {
  const [name, setName] = useState(PROFILE.name);
  const [email, setEmail] = useState(PROFILE.email);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire this up to your own storage/API when ready.
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="font-[Space_Grotesk,ui-sans-serif] text-2xl font-medium tracking-tight">
        Settings
      </h1>
      <p className="mt-1 text-sm text-[#9BA3AF]">
        Profile details shown across your public pages.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 max-w-md rounded-lg border border-[#23262E] bg-[#14161C] p-5 sm:p-6 space-y-5"
      >
        <div>
          <label className="block font-mono text-xs text-[#7A8290] mb-1.5">
            display name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md bg-[#0F1116] border border-[#23262E] px-3 py-2 text-sm text-[#E6E8EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1C5]"
          />
        </div>
        <div>
          <label className="block font-mono text-xs text-[#7A8290] mb-1.5">
            contact email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md bg-[#0F1116] border border-[#23262E] px-3 py-2 text-sm text-[#E6E8EB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4FD1C5]"
          />
        </div>
        <button
          type="submit"
          className="rounded-md bg-[#F2A65A] text-[#14161C] px-4 py-2 text-sm font-medium hover:bg-[#f5b678] transition-colors"
        >
          Save changes
        </button>
        {saved && (
          <p className="font-mono text-xs text-[#4FD1C5]">Saved.</p>
        )}
      </form>
    </div>
  );
}
