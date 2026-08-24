import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

export default function AddContactsModal({ open, onClose }) {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", bank: "", account: "" });

  const submit = (e) => { e.preventDefault(); setDone(true); };
  const close = () => { setDone(false); setForm({ name: "", bank: "", account: "" }); onClose(); };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && close()}>
      <DialogContent className="sm:max-w-md">
        {done ? (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-green-100 grid place-items-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <DialogTitle className="text-lg font-bold text-blue-900">Contact Added</DialogTitle>
            <DialogDescription className="mt-1 text-sm">{form.name} has been saved to your contacts.</DialogDescription>
            <Button className="mt-5 bg-blue-700 hover:bg-blue-800" onClick={close}>Done</Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-blue-900">Add Contact</DialogTitle>
              <DialogDescription>Save a recipient for faster future transfers.</DialogDescription>
            </DialogHeader>
            <form onSubmit={submit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="cname">Contact Name</Label>
                <Input id="cname" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cbank">Bank Name</Label>
                <Input id="cbank" required value={form.bank} onChange={(e) => setForm({ ...form, bank: e.target.value })} placeholder="Bank" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cacc">Account Number</Label>
                <Input id="cacc" required value={form.account} onChange={(e) => setForm({ ...form, account: e.target.value })} placeholder="Account number" />
              </div>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 h-11">Add Contact</Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
