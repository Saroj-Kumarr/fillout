"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Filter,
  UserPlus,
  Grid3X3,
  List,
  ChevronDown,
  MoreHorizontal,
  Star,
  FileText,
  Edit3,
  Copy,
  FolderOpen,
  Download,
  Lock,
  Trash2,
} from "lucide-react";

export default function Dashboard() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("Created date");

  const quickStartItems = [
    {
      title: "App",
      subtitle: "Websites, Portals",
      icon: "Z",
      bgColor: "bg-gray-800",
      textColor: "text-white",
    },
    {
      title: "Form",
      subtitle: "Forms, Scheduling",
      icon: "📋",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  const recentlyViewed = [
    {
      id: 1,
      title: "Sign Up Sheet Template",
      responses: "No responses",
      icon: "📋",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      id: 2,
      title: "My form",
      responses: "No responses",
      icon: "📋",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  const workspaceItems = [
    {
      id: 3,
      title: "Sign Up Sheet Template",
      responses: "No responses",
      icon: "📋",
      bgColor: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ];

  const FormContextMenu = ({ children }: { children: React.ReactNode }) => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem>
          <Star className="w-4 h-4 mr-2" />
          Star
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="w-4 h-4 mr-2" />
          Add internal note
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Edit3 className="w-4 h-4 mr-2" />
          Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Copy className="w-4 h-4 mr-2" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FolderOpen className="w-4 h-4 mr-2" />
          Move to
          <ChevronDown className="w-4 h-4 ml-auto" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="w-4 h-4 mr-2" />
          Export form
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Lock className="w-4 h-4 mr-2" />
          Close form
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <Trash2 className="w-4 h-4 mr-2" />
          Move to trash
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const FormCard = ({
    item,
    showMenu = true,
  }: {
    item: {
      id: number;
      title: string;
      responses: string;
      icon: string;
      bgColor: string;
      textColor: string;
    };
    showMenu?: boolean;
  }) => (
    <div className="border hover:shadow-sm rounded-md p-2 px-5 w-72">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
            <svg
              width="60"
              height="60"
              className="w-4 h-4"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M27.2399 6.12842C24.1141 6.12842 21.5801 8.6624 21.5801 11.7882L21.5801 48.2117C21.5801 51.3375 24.1141 53.8715 27.2399 53.8715H50.0244C53.1502 53.8715 55.6842 51.3375 55.6842 48.2117V16.7444C55.6842 15.2849 55.1205 13.8819 54.1106 12.8282L49.3608 7.87207C48.2933 6.75822 46.8173 6.12842 45.2746 6.12842L27.2399 6.12842ZM49.1035 31.409C49.1035 29.5433 47.5911 28.0309 45.7254 28.0309H32.2121C30.3464 28.0309 28.834 29.5433 28.834 31.409C28.834 33.2746 30.3464 34.787 32.2121 34.787L45.7254 34.787C47.5911 34.787 49.1035 33.2746 49.1035 31.409ZM45.7254 18.1934C47.5911 18.1934 49.1035 19.7058 49.1035 21.5714C49.1035 23.4371 47.5911 24.9495 45.7254 24.9495L32.2121 24.9495C30.3464 24.9495 28.834 23.4371 28.834 21.5714C28.834 19.7058 30.3464 18.1934 32.2121 18.1934L45.7254 18.1934ZM37.058 41.7269C37.058 39.5987 35.3326 37.8735 33.2045 37.8735C31.0763 37.8735 29.3509 39.5987 29.3509 41.7269C29.3509 43.855 31.0763 45.5802 33.2045 45.5802C35.3326 45.5802 37.058 43.855 37.058 41.7269Z"
                fill="#2F72E2"
              ></path>
              <path
                d="M4.31445 39.8274C4.31445 40.7613 4.31445 41.2283 4.38742 41.6855C4.41864 41.8811 4.45979 42.075 4.51072 42.2665C4.62975 42.714 4.81941 43.1407 5.19873 43.9941V43.9941C6.51409 46.9535 7.17176 48.4331 8.1749 48.722C8.57992 48.8386 9.00963 48.8386 9.41466 48.722C10.4178 48.4331 11.0755 46.9535 12.3908 43.9941V43.9941C12.7701 43.1407 12.9598 42.714 13.0788 42.2665C13.1298 42.075 13.1709 41.8811 13.2021 41.6855C13.2751 41.2283 13.2751 40.7613 13.2751 39.8274L13.2751 12.8844C13.2751 10.41 11.2692 8.40409 8.79478 8.40409V8.40409C6.32036 8.40409 4.31445 10.41 4.31445 12.8844L4.31445 39.8274Z"
                fill="#2F72E2"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="font-medium text-sm text-gray-800">{item.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{item.responses}</p>
          </div>
        </div>
        {showMenu && (
          <FormContextMenu>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </FormContextMenu>
        )}
      </div>
    </div>
  );

  return (
    <main className="p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome, Saroj</h1>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="text-black border">
                <Filter className="w-4 h-4" />
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="px-3 cursor-pointer hover:bg-gray-50 rounded-md flex items-center gap-2">
                <Filter className="w-4 h-4 text-slate-700" />
                <span className="text-sm text-gray-700">Show all</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 rounded-md">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                  <svg
                    width="60"
                    height="60"
                    className="w-4 h-4"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M27.2399 6.12842C24.1141 6.12842 21.5801 8.6624 21.5801 11.7882L21.5801 48.2117C21.5801 51.3375 24.1141 53.8715 27.2399 53.8715H50.0244C53.1502 53.8715 55.6842 51.3375 55.6842 48.2117V16.7444C55.6842 15.2849 55.1205 13.8819 54.1106 12.8282L49.3608 7.87207C48.2933 6.75822 46.8173 6.12842 45.2746 6.12842L27.2399 6.12842ZM49.1035 31.409C49.1035 29.5433 47.5911 28.0309 45.7254 28.0309H32.2121C30.3464 28.0309 28.834 29.5433 28.834 31.409C28.834 33.2746 30.3464 34.787 32.2121 34.787L45.7254 34.787C47.5911 34.787 49.1035 33.2746 49.1035 31.409ZM45.7254 18.1934C47.5911 18.1934 49.1035 19.7058 49.1035 21.5714C49.1035 23.4371 47.5911 24.9495 45.7254 24.9495L32.2121 24.9495C30.3464 24.9495 28.834 23.4371 28.834 21.5714C28.834 19.7058 30.3464 18.1934 32.2121 18.1934L45.7254 18.1934ZM37.058 41.7269C37.058 39.5987 35.3326 37.8735 33.2045 37.8735C31.0763 37.8735 29.3509 39.5987 29.3509 41.7269C29.3509 43.855 31.0763 45.5802 33.2045 45.5802C35.3326 45.5802 37.058 43.855 37.058 41.7269Z"
                      fill="#2F72E2"
                    ></path>
                    <path
                      d="M4.31445 39.8274C4.31445 40.7613 4.31445 41.2283 4.38742 41.6855C4.41864 41.8811 4.45979 42.075 4.51072 42.2665C4.62975 42.714 4.81941 43.1407 5.19873 43.9941V43.9941C6.51409 46.9535 7.17176 48.4331 8.1749 48.722C8.57992 48.8386 9.00963 48.8386 9.41466 48.722C10.4178 48.4331 11.0755 46.9535 12.3908 43.9941V43.9941C12.7701 43.1407 12.9598 42.714 13.0788 42.2665C13.1298 42.075 13.1709 41.8811 13.2021 41.6855C13.2751 41.2283 13.2751 40.7613 13.2751 39.8274L13.2751 12.8844C13.2751 10.41 11.2692 8.40409 8.79478 8.40409V8.40409C6.32036 8.40409 4.31445 10.41 4.31445 12.8844L4.31445 39.8274Z"
                      fill="#2F72E2"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Form</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 rounded-md">
                <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    className="w-4 h-4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M46.7609 9.55932C46.7609 10.8825 47.8012 11.9464 49.1105 12.1373C51.1127 12.4293 52.5338 12.9953 53.6311 14.0926C54.7878 15.2493 55.3542 16.7659 55.6315 18.9436C55.6596 19.1647 55.465 19.3479 55.2421 19.3479V19.3479L10.0772 19.3479C7.57686 19.3479 6.32671 19.3479 5.50289 18.0584C5.3772 17.8616 5.17921 17.3836 5.12896 17.1556C4.79965 15.6613 5.32254 15.1384 6.36831 14.0926V14.0926C7.57523 12.8857 9.17388 12.3215 11.5066 12.0578C12.8013 11.9114 13.8331 10.8623 13.8331 9.55932V9.55932C13.8331 7.53882 15.4711 5.90088 17.4916 5.90088C19.5121 5.90088 21.15 7.53882 21.15 9.55932V9.55932C21.15 10.8113 22.165 11.8263 23.417 11.8263L37.1771 11.8263C38.4291 11.8263 39.444 10.8113 39.444 9.55932V9.55932C39.444 7.53882 41.082 5.90088 43.1025 5.90088C45.123 5.90088 46.7609 7.53882 46.7609 9.55932V9.55932ZM4.10492 25.0391C4.1054 24.9247 4.203 24.8354 4.31742 24.8354V24.8354L55.2421 24.8354V24.8354C55.5775 24.8354 55.8949 25.0795 55.8958 25.4149C55.8975 26.0153 55.8975 26.6437 55.8975 27.3018L55.8975 38.6235C55.8975 45.9187 55.8975 49.5663 53.6311 51.8326C51.3648 54.099 47.7172 54.099 40.4219 54.099L19.5775 54.099C12.2823 54.099 8.63465 54.099 6.36831 51.8326C4.10198 49.5663 4.10198 45.9187 4.10198 38.6235L4.10197 27.3018C4.10197 26.505 4.10197 25.7518 4.10492 25.0391ZM18.6036 30.2818C20.3131 30.2818 21.699 31.6676 21.699 33.3772C21.699 35.0868 20.3131 36.4726 18.6036 36.4726L15.3547 36.4726C13.6452 36.4726 12.2593 35.0868 12.2593 33.3772C12.2593 31.6676 13.6452 30.2818 15.3547 30.2818L18.6036 30.2818ZM34.5017 33.3772C34.5017 31.6676 33.1159 30.2818 31.4063 30.2818H28.1575C26.4479 30.2818 25.062 31.6676 25.062 33.3772C25.062 35.0868 26.4479 36.4726 28.1575 36.4726H31.4063C33.1159 36.4726 34.5017 35.0868 34.5017 33.3772ZM44.2019 30.2818C45.9115 30.2818 47.2973 31.6676 47.2973 33.3772C47.2973 35.0868 45.9115 36.4726 44.2019 36.4726H40.953C39.2435 36.4726 37.8576 35.0868 37.8576 33.3772C37.8576 31.6676 39.2435 30.2818 40.953 30.2818L44.2019 30.2818ZM21.699 43.6866C21.699 41.977 20.3131 40.5912 18.6036 40.5912H15.3547C13.6452 40.5912 12.2593 41.977 12.2593 43.6866C12.2593 45.3962 13.6452 46.782 15.3547 46.782H18.6036C20.3131 46.782 21.699 45.3962 21.699 43.6866ZM31.4063 40.5912C33.1159 40.5912 34.5017 41.977 34.5017 43.6866C34.5017 45.3962 33.1159 46.782 31.4063 46.782L28.1575 46.782C26.4479 46.782 25.062 45.3962 25.062 43.6866C25.062 41.977 26.4479 40.5912 28.1575 40.5912L31.4063 40.5912ZM47.2973 43.6865C47.2973 41.9769 45.9115 40.591 44.2019 40.591H40.953C39.2435 40.591 37.8576 41.9769 37.8576 43.6865C37.8576 45.396 39.2435 46.7819 40.953 46.7819H44.2019C45.9115 46.7819 47.2973 45.396 47.2973 43.6865Z"
                      fill="#F7502B"
                    ></path>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Scheduling
                </span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-gray-50 rounded-md">
                <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                  <svg
                    width="501"
                    height="501"
                    viewBox="0 0 501 501"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="500"
                      height="500"
                      rx="65.5308"
                      fill="#211C20"
                    ></rect>
                    <g clip-path="url(#clip0_15_2)">
                      <path
                        d="M124.331 107.402C132.594 99.9972 143.299 95.9021 154.394 95.9021H310.936L243.368 163.85C229.268 178.028 210.098 186.001 190.102 186.001H154.394C113.062 186.001 93.5506 134.988 124.331 107.402Z"
                        fill="#FFC738"
                      ></path>
                      <path
                        d="M377.819 394.079C369.559 401.484 358.851 405.578 347.758 405.578H191.215L258.783 337.632C272.883 323.452 292.053 315.48 312.048 315.48H347.758C389.088 315.48 408.599 366.493 377.819 394.079Z"
                        fill="#FFC738"
                      ></path>
                      <path
                        d="M338.418 105.966L105.566 338.833C89.915 354.485 89.915 379.863 105.566 395.515C121.218 411.167 146.594 411.167 162.245 395.515L395.097 162.648C410.749 146.996 410.749 121.619 395.097 105.966C379.446 90.3138 354.07 90.3138 338.418 105.966Z"
                        fill="#FFC738"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_15_2">
                        <rect
                          width="316.514"
                          height="318.48"
                          fill="white"
                          transform="translate(92.2432 91.5879)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-sm font-medium text-gray-900">Zite</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="sm">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite members
          </Button>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-600 mb-4">Quick start</h2>
        <div className="flex items-center gap-4">
          {quickStartItems.map((item) => (
            <div
              key={item.title}
              className="border hover:shadow-sm rounded-md p-2 px-5 w-72"
            >
              <div className="flex items-center gap-3">
                {item.title === "App" && (
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                    <svg
                      width="501"
                      height="501"
                      viewBox="0 0 501 501"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="500"
                        height="500"
                        rx="65.5308"
                        fill="#211C20"
                      ></rect>
                      <g clip-path="url(#clip0_15_2)">
                        <path
                          d="M124.331 107.402C132.594 99.9972 143.299 95.9021 154.394 95.9021H310.936L243.368 163.85C229.268 178.028 210.098 186.001 190.102 186.001H154.394C113.062 186.001 93.5506 134.988 124.331 107.402Z"
                          fill="#FFC738"
                        ></path>
                        <path
                          d="M377.819 394.079C369.559 401.484 358.851 405.578 347.758 405.578H191.215L258.783 337.632C272.883 323.452 292.053 315.48 312.048 315.48H347.758C389.088 315.48 408.599 366.493 377.819 394.079Z"
                          fill="#FFC738"
                        ></path>
                        <path
                          d="M338.418 105.966L105.566 338.833C89.915 354.485 89.915 379.863 105.566 395.515C121.218 411.167 146.594 411.167 162.245 395.515L395.097 162.648C410.749 146.996 410.749 121.619 395.097 105.966C379.446 90.3138 354.07 90.3138 338.418 105.966Z"
                          fill="#FFC738"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_15_2">
                          <rect
                            width="316.514"
                            height="318.48"
                            fill="white"
                            transform="translate(92.2432 91.5879)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                )}
                {item.title === "Form" && (
                  <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                    <svg
                      width="60"
                      height="60"
                      className="w-4 h-4"
                      viewBox="0 0 60 60"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.2399 6.12842C24.1141 6.12842 21.5801 8.6624 21.5801 11.7882L21.5801 48.2117C21.5801 51.3375 24.1141 53.8715 27.2399 53.8715H50.0244C53.1502 53.8715 55.6842 51.3375 55.6842 48.2117V16.7444C55.6842 15.2849 55.1205 13.8819 54.1106 12.8282L49.3608 7.87207C48.2933 6.75822 46.8173 6.12842 45.2746 6.12842L27.2399 6.12842ZM49.1035 31.409C49.1035 29.5433 47.5911 28.0309 45.7254 28.0309H32.2121C30.3464 28.0309 28.834 29.5433 28.834 31.409C28.834 33.2746 30.3464 34.787 32.2121 34.787L45.7254 34.787C47.5911 34.787 49.1035 33.2746 49.1035 31.409ZM45.7254 18.1934C47.5911 18.1934 49.1035 19.7058 49.1035 21.5714C49.1035 23.4371 47.5911 24.9495 45.7254 24.9495L32.2121 24.9495C30.3464 24.9495 28.834 23.4371 28.834 21.5714C28.834 19.7058 30.3464 18.1934 32.2121 18.1934L45.7254 18.1934ZM37.058 41.7269C37.058 39.5987 35.3326 37.8735 33.2045 37.8735C31.0763 37.8735 29.3509 39.5987 29.3509 41.7269C29.3509 43.855 31.0763 45.5802 33.2045 45.5802C35.3326 45.5802 37.058 43.855 37.058 41.7269Z"
                        fill="#2F72E2"
                      ></path>
                      <path
                        d="M4.31445 39.8274C4.31445 40.7613 4.31445 41.2283 4.38742 41.6855C4.41864 41.8811 4.45979 42.075 4.51072 42.2665C4.62975 42.714 4.81941 43.1407 5.19873 43.9941V43.9941C6.51409 46.9535 7.17176 48.4331 8.1749 48.722C8.57992 48.8386 9.00963 48.8386 9.41466 48.722C10.4178 48.4331 11.0755 46.9535 12.3908 43.9941V43.9941C12.7701 43.1407 12.9598 42.714 13.0788 42.2665C13.1298 42.075 13.1709 41.8811 13.2021 41.6855C13.2751 41.2283 13.2751 40.7613 13.2751 39.8274L13.2751 12.8844C13.2751 10.41 11.2692 8.40409 8.79478 8.40409V8.40409C6.32036 8.40409 4.31445 10.41 4.31445 12.8844L4.31445 39.8274Z"
                        fill="#2F72E2"
                      ></path>
                    </svg>
                  </div>
                )}
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-sm font-medium text-gray-600 mb-4">
          Recently viewed
        </h2>
        <div className="flex items-center gap-4">
          {recentlyViewed.map((item) => (
            <FormCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-medium text-gray-600 mb-4">
            My Workspace
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 px-2"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 px-2"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  {sortBy}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setSortBy("Created date")}>
                  Created date
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("Modified date")}>
                  Modified date
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("Name")}>
                  Name
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {workspaceItems.map((item) => (
            <FormCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </main>
  );
}
