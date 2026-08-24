import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function SettingsModal({ open, onClose, name }) {
  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-blue-900">Settings</DialogTitle>
          <DialogDescription>Manage your profile and preferences.</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div className="space-y-2"><Label>Full Name</Label><Input defaultValue={name} /></div>
          <div className="space-y-2"><Label>Email</Label><Input defaultValue="account@netbank.sg" /></div>
          <div className="space-y-2"><Label>Phone</Label><Input defaultValue="+65 9000 0000" /></div>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
            <div>
              <div className="text-sm font-medium">Transaction notifications</div>
              <div className="text-xs text-slate-500">Get alerted on activity</div>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between rounded-lg border border-slate-200 p-3">
            <div>
              <div className="text-sm font-medium">Two-factor authentication</div>
              <div className="text-xs text-slate-500">Extra security at login</div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
