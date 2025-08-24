"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

interface CreateOrganizationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateOrganizationModal = ({
  open,
  onOpenChange,
}: CreateOrganizationModalProps) => {
  const [orgName, setOrgName] = useState("");

  const handleCreateOrganization = () => {
    // Handle organization creation
    console.log("Creating organization:", orgName);
    onOpenChange(false);
    setOrgName("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-[500px] p-0 gap-0"
      >
        <div className="flex items-center justify-between p-6 pb-4">
          <DialogHeader className="flex-1">
            <DialogTitle className="text-xl font-semibold text-gray-900">
              Create new organization
            </DialogTitle>
          </DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="p-0 border-2 rounded-full bg-white absolute -top-3 -right-2"
            onClick={() => onOpenChange(false)}
          >
            {/* 2. Use the arrow icon and increase its size */}
            <X className="h-9 w-9 text-gray-400" />
          </Button>
        </div>
        <div className="px-6 pb-6">
          <p className="text-sm text-gray-500 mb-6">
            Use separate organizations to manage multiple clients or companies.
            To join an existing organization, ask to be invited as a team
            member.
          </p>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="org-name"
                className="text-sm font-medium text-gray-900"
              >
                Organization name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="org-name"
                placeholder="e.g. My company"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="w-full border-2 border-[#3662E3] focus:border-blue-500 rounded-sm h-10 px-4"
              />
            </div>
            <div className="flex items-center justify-end">
              <Button
                className="w-40 bg-[#3662E3] hover:bg-[#3662E3]/80 text-white rounded-lg h-10 text-sm font-medium"
                onClick={handleCreateOrganization}
              >
                Create organization
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrganizationModal;
