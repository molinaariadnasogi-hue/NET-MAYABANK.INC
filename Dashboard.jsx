import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getSession, clearSession } from "@/lib/bankSession";
import CapitalLogo from "@/components/bank/CapitalLogo";
import FundTransferModal from "@/components/bank/FundTransferModal";
import AddContactsModal from "@/components/bank/AddContactsModal";
import PayBillsModal from "@/components/bank/PayBillsModal";
import FindBranchModal from "@/components/bank/FindBranchModal";
import SettingsModal from "@/components/bank/SettingsModal";
import { Home as HomeIcon, ArrowLeftRight, UserPlus, Receipt, MapPin, Settings as SettingsIcon, LogOut, Bell, ShieldCheck } from "lucide-react";

const BALANCE = 173270.22;
const ACCOUNT = "7042 8819 5503";

const TRANSACTIONS = [
  { desc: "Salary — Acme Pte Ltd", date: "22 Aug 2026", amount: 8200.0, type: "in" },
  { desc: "Groceries — FairPrice", date: "20 Aug 2026", amount: -142.35, type: "out" },
  { desc: "Transfer — John Tan", date: "18 Aug 2026", amount: -500.0, type: "out" },
  { desc: "Interest Credit", date: "15 Aug 2026", amount: 38.74, type: "in" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const session = getSession();
  const [active, setActive] = useState(null);
  if (!session) return <Navigate to="/login" replace />;

  const name = session.name || "TAN KANG LIN";

  const actions = [
    { key: "home", label: "Home", icon: HomeIcon, onClick: () => setActive(null) },
    { key: "transfer", label: "Fund Transfer", icon: ArrowLeftRight, onClick: () => setActive("transfer") },
    { key: "contacts", label: "Add Contacts", icon: UserPlus, onClick: () => setActive("contacts") },
    { key: "bills", label: "Pay Bills", icon: Receipt, onClick: () => setActive("bills") },
    { key: "branch", label: "Find Branch", icon: MapPin, onClick: () => setActive("branch") },
    { key: "settings", label: "Settings", icon: SettingsIcon, onClick: () => setActive("settings") },
  ];

  const logout = () => { clearSession(); navigate("/login"); };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <CapitalLogo size="md" />
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="w-10 h-10 rounded-full hover:bg-slate-100 grid place-items-center text-slate-600"><Bell className="w-5 h-5" /></button>
            <div className="hidden sm:flex items-center gap-2 pr-2">
              <div className="w-9 h-9 rounded-full bg-blue-700 text-white grid place-items-center font-semibold text-sm">{name.charAt(0)}</div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-800">{name}</div>
                <div className="text-xs text-slate-400">Account holder</div>
              </div>
            </div>
            <button onClick={logout} className="w-10 h-10 rounded-full hover:bg-slate-100 grid place-items-center text-slate-600"><LogOut className="w-5 h-5" /></button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl bg-gradient-to-br from-blue-800 to-blue-950 text-white p-7 shadow-xl shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-blue-500/20 blur-2xl" />
            <div className="flex items-center justify-between relative">
              <div>
                <div className="text-blue-200 text-sm">Available Balance</div>
                <div className="text-4xl font-bold mt-1 tracking-tight">
                  {BALANCE.toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  <span className="text-lg font-medium text-blue-200 ml-1">SGD</span>
                </div>
              </div>
              <ShieldCheck className="w-8 h-8 text-blue-300" />
            </div>
            <div className="mt-6 flex items-end justify-between relative">
              <div>
                <div className="text-xs text-blue-200 uppercase tracking-wider">Account Holder</div>
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-sm text-blue-200 mt-1 font-mono">{ACCOUNT}</div>
              </div>
              <div className="text-xs text-blue-200">NetBank International</div>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-slate-200 p-6">
            <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-3 mt-4">
              {actions.map((a) => (
                <button key={a.key} onClick={a.onClick} className="flex flex-col items-center gap-2 rounded-2xl p-3 hover:bg-blue-50 transition group">
                  <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-700 grid place-items-center group-hover:bg-blue-700 group-hover:text-white transition">
                    <a.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-600 text-center leading-tight">{a.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-800">Recent Transactions</h2>
            <span className="text-xs text-slate-400">Last 30 days</span>
          </div>
          <div className="divide-y divide-slate-100">
            {TRANSACTIONS.map((t, i) => (
              <div key={i} className="flex items-center justify-between py-3">
                <div>
                  <div className="text-sm font-medium text-slate-800">{t.desc}</div>
                  <div className="text-xs text-slate-400">{t.date}</div>
                </div>
                <div className={`text-sm font-semibold ${t.type === "in" ? "text-green-600" : "text-slate-800"}`}>
                  {t.type === "in" ? "+" : "-"}{Math.abs(t.amount).toLocaleString("en-SG", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} SGD
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <FundTransferModal open={active === "transfer"} onClose={() => setActive(null)} />
      <AddContactsModal open={active === "contacts"} onClose={() => setActive(null)} />
      <PayBillsModal open={active === "bills"} onClose={() => setActive(null)} />
      <FindBranchModal open={active === "branch"} onClose={() => setActive(null)} />
      <SettingsModal open={active === "settings"} onClose={() => setActive(null)} name={name} />
    </div>
  );
}
