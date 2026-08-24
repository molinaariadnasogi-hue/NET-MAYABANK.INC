import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Phone, Clock } from "lucide-react";

const BRANCHES = [
  { name: "NetBank Marina Bay", address: "8 Marina Boulevard, #01-01, Singapore 018981", phone: "+65 6320 0001", hours: "Mon–Fri, 9:30–17:00" },
  { name: "NetBank Orchard", address: "270 Orchard Road, #02-12, Singapore 238857", phone: "+65 6735 2200", hours: "Mon–Sat, 10:00–19:00" },
  { name: "NetBank Jurong East", address: "2 Jurong East Central 1, #03-04, Singapore 609724", phone: "+65 6685 3344", hours: "Mon–Fri, 9:30–17:00" },
];

export default function FindBranchModal({ open, onClose }) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-blue-900">Find a Branch</DialogTitle>
          <DialogDescription>NetBank branches across Singapore.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 mt-2 max-h-[60vh] overflow-y-auto">
          {BRANCHES.map((b) => (
            <div key={b.name} className="rounded-xl border border-slate-200 p-4">
              <div className="font-semibold text-blue-900">{b.name}</div>
              <div className="mt-2 space-y-1.5 text-sm text-slate-600">
                <div className="flex gap-2"><MapPin className="w-4 h-4 text-blue-600 shrink-0" /> {b.address}</div>
                <div className="flex gap-2"><Phone className="w-4 h-4 text-blue-600 shrink-0" /> {b.phone}</div>
                <div className="flex gap-2"><Clock className="w-4 h-4 text-blue-600 shrink-0" /> {b.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
