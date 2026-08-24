import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setRegistration } from "@/lib/bankSession";
import CapitalLogo from "@/components/bank/CapitalLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const COUNTRIES = ["Singapore", "Malaysia", "Indonesia", "Thailand", "Vietnam", "Philippines", "Japan", "South Korea", "China", "India", "United Kingdom", "United States", "Australia", "Germany", "France", "Switzerland", "United Arab Emirates", "Saudi Arabia", "Brazil", "Canada", "Mexico", "South Africa", "Nigeria", "Egypt", "Other"];

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: "", email: "", country: "", phone: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const update = (k, v) => setForm({ ...form, [k]: v });
  const submit = (e) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.country || !form.password) { setError("Please fill in all required fields."); return; }
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    setRegistration(form);
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col">
      <header className="px-6 py-6"><CapitalLogo size="md" /></header>
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <h1 className="text-2xl font-bold text-blue-900">Open an International Account</h1>
          <p className="text-slate-500 mt-1 text-sm">Register your NetBank international profile to get started.</p>
          <form onSubmit={submit} className="mt-7 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" required value={form.fullName} onChange={(e) => update("fullName", e.target.value)} placeholder="As per ID / passport" className="h-11" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+65 9000 0000" className="h-11" />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Country of Residence</Label>
              <Select value={form.country} onValueChange={(v) => update("country", v)}>
                <SelectTrigger className="h-11"><SelectValue placeholder="Select country" /></SelectTrigger>
                <SelectContent>
                  {COUNTRIES.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="pwd">Password</Label>
                <Input id="pwd" type="password" required value={form.password} onChange={(e) => update("password", e.target.value)} placeholder="Create password" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cpwd">Confirm Password</Label>
                <Input id="cpwd" type="password" required value={form.confirm} onChange={(e) => update("confirm", e.target.value)} placeholder="Re-enter password" className="h-11" />
              </div>
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-12 text-base">Create Account</Button>
          </form>
          <p className="text-center text-sm text-slate-500 mt-6">Already registered? <Link to="/login" className="text-blue-700 font-medium">Log in</Link></p>
        </div>
      </main>
    </div>
  );
}
