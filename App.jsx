import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4" style={{ fontFamily: 'sans-serif' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
        
        {/* LOGO AT BRAND NAME */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src="https://ibb.co" 
            alt="NET&MAYABANK.INC Logo" 
            className="w-20 h-20 object-contain rounded-lg mb-4 shadow-sm"
          />
          <h1 className="text-2xl font-black text-blue-900 tracking-tight text-center">
            NET&MAYABANK.INC
          </h1>
          <p className="text-sm text-slate-500 mt-1">Secure Online Banking Portal</p>
        </div>

        {/* LOGIN FORM */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Username o Email
            </label>
            <input 
              type="text" 
              placeholder="Ipasok ang iyong username" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all text-sm"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">
              Nakalimutan ang Password?
            </a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-blue-100 hover:shadow-none text-sm"
          >
            Mag-login Ligtas
          </button>
        </form>

        {/* FOOTER */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-400">
            © 2026 NET&MAYABANK.INC. All rights reserved.
          </p>
        </div>

      </div>
    </div>
  );
}
