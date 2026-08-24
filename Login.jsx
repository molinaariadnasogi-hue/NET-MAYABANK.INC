import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { setSession, getRegistration } from "@/lib/bankSession";
import CapitalLogo from "@/components/bank/CapitalLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  const navigate = useNavigate();
  const reg = getRegistration();
  const [name, setName] = useState(reg?.fullName || "TAN KANG LIN");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSession({ name: (name || "TAN KANG LIN").trim().toUpperCase(), loginAt: Date.now() });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 flex flex-col">
      <header className="px-6 py-6"><CapitalLogo size="md" /></header>
      <main className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <h1 className="text-2xl font-bold text-blue-900">Welcome back</h1>
          <p className="text-slate-500 mt-1 text-sm">Log in to your NetBank account.</p>
          <form onSubmit={submit} className="mt-7 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name" className="h-11" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pwd">Password</Label>
              <Input id="pwd" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter any password" className="h-11" />
            </div>
            <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-12 text-base">Log In</Button>
          </form>
          <p className="text-center text-sm text-slate-500 mt-6">New to NetBank? <Link to="/register" className="text-blue-700 font-medium">Register</Link></p>
        </div>
      </main>
    </div>
  );
