import React from "react";

export default function CapitalLogo({ size = "md" }) {
  const box = { sm: "w-8 h-8 text-sm", md: "w-11 h-11 text-lg", lg: "w-14 h-14 text-2xl" }[size];
  const word = { sm: "text-sm", md: "text-base", lg: "text-xl" }[size];
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div className={`${box} rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 text-white font-extrabold grid place-items-center shadow-lg shadow-blue-700/30 tracking-tight`}>
        NB
      </div>
      <div className="leading-none">
        <div className={`${word} font-bold tracking-tight text-blue-900`}>
          capital <span className="text-blue-500">nb</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 mt-0.5">NetBank International</div>
      </div>
    </div>
  );
}
