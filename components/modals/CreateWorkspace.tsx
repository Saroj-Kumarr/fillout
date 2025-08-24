"use client";

import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface WorkspaceModalProps {
  children: React.ReactNode;
}

export default function CreateWorkspace({ children }: WorkspaceModalProps) {
  const [workspaceName, setWorkspaceName] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateWorkspace = () => {
    console.log("Creating workspace:", workspaceName);
    setOpen(false);
    setWorkspaceName("");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[500px] p-0 gap-0"
      >
        <div className="flex items-center justify-between px-6 py-2 pt-4">
          <DialogHeader className="flex-1">
            <DialogTitle className="text-xl font-semibold text-gray-900">
              New workspace
            </DialogTitle>
          </DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="p-0 border-2 rounded-full bg-white absolute -top-3 -right-2"
            onClick={() => setOpen(false)}
          >
            <X className="h-9 w-9 text-gray-400" />
          </Button>
        </div>

        <div className="px-6 pb-3">
          <p className="text-sm text-gray-500 mb-6">
            Group related forms and share workspaces with your team
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 rounded-sm flex items-center justify-center text-gray-600 font-medium">
                M
              </div>
              <Input
                placeholder="e.g. Marketing..."
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="flex-1 border-gray-300 focus:border-blue-500 rounded-sm h-10"
              />
            </div>

            <div className="flex items-center justify-end pt-4">
              <Button
                className="bg-[#1C4ED8] hover:bg-[#1C4ED8]/80 text-white rounded-sm h-10 px-6 text-sm font-medium"
                onClick={handleCreateWorkspace}
              >
                + Create workspace
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
