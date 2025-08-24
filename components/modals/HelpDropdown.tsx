"use client";

import type React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileText, Edit3, Headphones, Sparkles } from "lucide-react";

interface HelpDropdownProps {
  children: React.ReactNode;
}

export function HelpDropdown({ children }: HelpDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 p-1" align="start" sideOffset={8}>
        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer">
          <FileText className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">Help center</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer">
          <Edit3 className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">Submit feedback</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer">
          <Headphones className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">Contact support</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer">
          <Sparkles className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">What&apos;s new</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
