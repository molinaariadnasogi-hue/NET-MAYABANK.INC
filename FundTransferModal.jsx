import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export default function FundTransferModal({ open, onClose }) {
  const [step, setStep] = useState("form");
  const [form, setForm] = useState({ recipient: "", bank: "", account: "", amount: "" });

  const reset = () => {
    setStep("form");
    setForm({ recipient: "", bank: "", account: "", amount: "" });
  };
  const handleClose = () => { reset(); onClose(); };
  const submit = (e) => { e.preventDefault(); setStep("failed"); };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && handleClose()}>
      <DialogContent className="sm:max-w-md">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-blue-900">Fund Transfer</DialogTitle>
              <DialogDescription>Send money to another bank account.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="rname">Recipient Name</Label>
                <Input id="rname" required value={form.recipient} onChange={(e) => setForm({ ...form, recipient: e.target.value })} placeholder="e.g. John Tan" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="rbank">Bank Name</Label>
                <Input id="rbank" required value={form.bank} onChange={(e) => setForm({ ...form, bank: e.target.value })} placeholder="Recipient bank" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="racc">Account Number</Label>
                <Input id="racc" required value={form.account} onChange={(e) => setForm({ ...form, account: e.target.value })} placeholder="Account number" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ramt">Amount (SGD)</Label>
                <Input id="ramt" required type="number" min="1" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder="0.00" />
              </div>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-11">Continue Transfer</Button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-red-100 grid place-items-center mb-4">
              <ShieldAlert className="w-8 h-8 text-red-600" />
            </div>
            <DialogTitle className="text-xl font-bold text-red-700">Transfer Failed</DialogTitle>
            <DialogDescription className="mt-2 text-sm text-slate-600 leading-relaxed">
              A <span className="font-semibold text-slate-800">verification deposit</span> is required to complete this transfer. As part of NetBank's standard security procedure, you must make a verification deposit so we can confirm that the account owner and the sender share the same details. Please follow the verification instructions sent to your registered email to proceed.
            </DialogDescription>
            <div className="mt-5 flex gap-3">
              <Button variant="outline" className="flex-1" onClick={handleClose}>Close</Button>
              <Button className="flex-1 bg-blue-700 hover:bg-blue-800" onClick={reset}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Try Again
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
