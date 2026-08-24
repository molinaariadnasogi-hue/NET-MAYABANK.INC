import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";

const BILLERS = ["SP Group (Utilities)", "Singtel (Telecom)", "StarHub (Telecom)", "PUB (Water)", "Town Council (HDB)"];

export default function PayBillsModal({ open, onClose }) {
  const [done, setDone] = useState(false);
  const [biller, setBiller] = useState("");
  const [amount, setAmount] = useState("");

  const submit = (e) => { e.preventDefault(); if (!biller) return; setDone(true); };
  const close = () => { setDone(false); setBiller(""); setAmount(""); onClose(); };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && close()}>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 grid place-items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-lg font-bold text-blue-900">Payment Submitted</DialogTitle>
            <DialogDescription className="mt-1 text-sm">Your payment to {biller} has been queued for processing.</DialogDescription>
            <Button className="mt-5 bg-blue-700 hover:bg-blue-800" onClick={close}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-blue-900">Pay Bills</DialogTitle>
              <DialogDescription>Settle a bill from your account.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label>Biller</Label>
                <Select value={biller} onValueChange={setBiller}>
                  <SelectTrigger><SelectValue placeholder="Select biller" /></SelectTrigger>
                  <SelectContent>
                    {BILLERS.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pamt">Amount (SGD)</Label>
                <Input id="pamt" required type="number" min="1" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="0.00" />
              </div>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-11">Pay Now</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
