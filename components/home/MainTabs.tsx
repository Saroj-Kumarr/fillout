"use client";

import { useState } from "react";
import Image from "next/image";

type TabColor = "blue" | "green" | "red" | "purple" | "orange" | "teal";

interface TabIconProps {
  color: TabColor;
  children: React.ReactNode;
  className?: string;
}

const TabIcon = ({ color, children, className = "" }: TabIconProps) => {
  const backgroundColors = {
    // This is our source of truth for colors
    blue: "bg-[#2E72E2]", // Forms
    green: "bg-[#E45D3B]", // Scheduling
    red: "bg-[#17CCB6]", // PDF
    purple: "bg-[#5EC269]", // Payments
    orange: "bg-[#8240EA]", // Workflows
    teal: "bg-[#E49356]", // Signatures
  };

  return (
    <div
      className={`${backgroundColors[color]} flex items-center justify-center rounded-lg p-2 ${className}`}
    >
      {children}
    </div>
  );
};

const tabData = [
  {
    id: "forms",
    label: "Forms",
    color: "blue",
    imageUrl:
      "https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FFormsImg.fc1f1649.png&w=3840&q=75",
    title: "Make any form, quiz or survey in minutes",
    features: [
      "Simple yet powerful form builder",
      "Connect to 50+ native integrations",
      "Analyze and collaborate on results with your team",
    ],
    actionText: "Make a form",
    actionIcon: (
      <svg
        width="36"
        height="35"
        viewBox="0 0 36 35"
        fill="none"
        className="h-[16px] w-full  max-w-[16px]  md:h-[24px] md:max-w-[24px] mlg:h-[16px] mlg:max-w-[16px] custom-2:h-[42px]  custom-2:max-w-[42px] xxl:h-[42px] xxl:max-w-[42px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6952 0.770996C13.2617 0.770996 12.0996 1.93306 12.0996 3.36655L12.0996 31.6338C12.0996 33.0672 13.2617 34.2293 14.6952 34.2293H33.4042C34.8377 34.2293 35.9998 33.0672 35.9998 31.6338V7.65981C35.9998 6.99052 35.7412 6.3471 35.2781 5.86389L31.1636 1.57062C30.674 1.05982 29.9972 0.770996 29.2896 0.770996L14.6952 0.770996ZM31.3867 18.4874C31.3867 17.18 30.3268 16.1201 29.0194 16.1201H19.5492C18.2418 16.1201 17.1819 17.18 17.1819 18.4874C17.1819 19.7949 18.2418 20.8548 19.5492 20.8548H29.0194C30.3268 20.8548 31.3867 19.7949 31.3867 18.4874ZM29.0194 9.22586C30.3268 9.22586 31.3867 10.2858 31.3867 11.5932C31.3867 12.9006 30.3268 13.9605 29.0194 13.9605L19.5492 13.9605C18.2418 13.9605 17.1819 12.9006 17.1819 11.5932C17.1819 10.2858 18.2418 9.22586 19.5492 9.22586L29.0194 9.22586ZM22.9448 25.718C22.9448 24.2266 21.7356 23.0176 20.2442 23.0176C18.7528 23.0176 17.5436 24.2266 17.5436 25.718C17.5436 27.2095 18.7528 28.4185 20.2442 28.4185C21.7356 28.4185 22.9448 27.2095 22.9448 25.718Z"
          fill="white"
        />
        <path
          d="M0.000488045 24.7762C0.000488061 25.3424 0.00048807 25.6256 0.058834 25.9005C0.11718 26.1754 0.232177 26.4342 0.46217 26.9516L1.26281 28.7529C2.06941 30.5677 2.4727 31.475 3.1403 31.475C3.80789 31.475 4.21119 30.5677 5.01779 28.7529L5.81843 26.9516C6.04842 26.4342 6.16342 26.1754 6.22176 25.9005C6.28011 25.6256 6.28011 25.3424 6.28011 24.7762L6.28011 5.5055C6.28011 5.07659 6.28011 4.86213 6.25559 4.68219C6.09316 3.49009 5.1557 2.55263 3.9636 2.3902C3.78366 2.36568 3.5692 2.36568 3.1403 2.36568C2.71139 2.36568 2.49694 2.36568 2.317 2.3902C1.1249 2.55263 0.187432 3.49009 0.0250053 4.68219C0.000487472 4.86213 0.000487478 5.07659 0.00048749 5.50549L0.000488045 24.7762Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "scheduling",
    label: "Scheduling",
    color: "green",
    imageUrl:
      "https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSchedulingImg.b93ea41e.png&w=3840&q=75",
    title: "Book meetings on your calendar",
    features: [
      "Sync your calendar and set your availability",
      "Book meetings for your whole team, for free",
      "Reduce no-shows with automated reminders",
    ],
    actionText: "Make a scheduling",
    actionIcon: (
      <svg
        width="38"
        height="36"
        viewBox="0 0 38 36"
        fill="none"
        className="h-[16px] w-full  max-w-[16px]  md:h-[24px] md:max-w-[24px] mlg:h-[16px] mlg:max-w-[16px] custom-2:h-[42px]  custom-2:max-w-[42px] xxl:h-[42px] xxl:max-w-[42px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.2973 3.00387C31.2973 3.25472 31.2973 3.38015 31.3119 3.48081C31.4007 4.09158 31.8447 4.55147 32.452 4.66175C32.5521 4.67993 32.6887 4.68474 32.9621 4.69436C34.886 4.7621 36.0484 4.99648 36.8595 5.8075C37.6793 6.6273 37.9099 7.80621 37.9747 9.76767C37.9826 10.006 37.7587 10.1847 37.5203 10.1847V10.1847L0.159016 10.1847V10.1847C0.0811583 10.1847 0.0154879 10.1221 0.0174189 10.0442C0.070224 7.91577 0.283028 6.66513 1.14066 5.8075C2.01154 4.93662 3.28766 4.73064 5.47666 4.68193C5.73602 4.67615 5.8657 4.67327 5.96488 4.65675C6.57772 4.55467 7.03711 4.08494 7.12552 3.46999C7.13983 3.37046 7.13983 3.24826 7.13983 3.00387V3.00387C7.13983 2.81797 7.13983 2.72503 7.14481 2.64654C7.22392 1.39851 8.21852 0.403908 9.46655 0.324799C9.54504 0.319824 9.63798 0.319824 9.82388 0.319824C10.0098 0.319824 10.1027 0.319824 10.1812 0.324799C11.4292 0.403908 12.4238 1.39851 12.5029 2.64654C12.5079 2.72503 12.5079 2.81797 12.5079 3.00387V3.00387C12.5079 3.24261 12.5079 3.36199 12.5224 3.46205C12.6115 4.07876 13.096 4.56321 13.7127 4.65237C13.8128 4.66683 13.9321 4.66683 14.1709 4.66683L24.2662 4.66683C24.505 4.66683 24.6243 4.66683 24.7244 4.65237C25.3411 4.56321 25.8256 4.07876 25.9147 3.46205C25.9292 3.36199 25.9292 3.24261 25.9292 3.00387V3.00387C25.9292 2.81797 25.9292 2.72503 25.9342 2.64654C26.0133 1.39851 27.0079 0.403908 28.2559 0.324799C28.3344 0.319824 28.4273 0.319824 28.6132 0.319824C28.7991 0.319824 28.8921 0.319824 28.9705 0.324799C30.2186 0.403908 31.2132 1.39851 31.2923 2.64654C31.2973 2.72503 31.2973 2.81797 31.2973 3.00387V3.00387ZM-7.62939e-06 14.3636C-7.62939e-06 14.2778 0.0731822 14.2106 0.159016 14.2106V14.2106L37.5203 14.2106V14.2106C37.7669 14.2106 38.0001 14.3909 38.0001 14.6375V27.8916C38.0001 31.5633 38.0001 33.3992 36.8595 34.5399C35.7188 35.6805 33.8829 35.6805 30.2112 35.6805H7.78896C4.11721 35.6805 2.28133 35.6805 1.14066 34.5399C-7.62939e-06 33.3992 -7.62939e-06 31.5633 -7.62939e-06 27.8916V14.3636ZM10.6393 18.2068C11.8935 18.2068 12.9103 19.2236 12.9103 20.4778C12.9103 21.732 11.8935 22.7488 10.6393 22.7488H8.25573C7.00149 22.7488 5.98473 21.732 5.98473 20.4778C5.98473 19.2236 7.00149 18.2068 8.25572 18.2068H10.6393ZM22.3038 20.4778C22.3038 19.2236 21.2871 18.2068 20.0328 18.2068H17.6493C16.3951 18.2068 15.3783 19.2236 15.3783 20.4778C15.3783 21.732 16.3951 22.7488 17.6493 22.7488H20.0328C21.2871 22.7488 22.3038 21.732 22.3038 20.4778ZM29.4199 18.2068C30.6742 18.2068 31.6909 19.2236 31.6909 20.4778C31.6909 21.732 30.6742 22.7488 29.4199 22.7488H27.0364C25.7822 22.7488 24.7654 21.732 24.7654 20.4778C24.7654 19.2236 25.7822 18.2068 27.0364 18.2068H29.4199ZM12.9103 28.0409C12.9103 26.7866 11.8935 25.7699 10.6393 25.7699L8.25572 25.7699C7.00149 25.7699 5.98473 26.7866 5.98473 28.0409C5.98473 29.2951 7.00149 30.3119 8.25573 30.3119H10.6393C11.8935 30.3119 12.9103 29.2951 12.9103 28.0409ZM20.0328 25.7699C21.2871 25.7699 22.3038 26.7866 22.3038 28.0409C22.3038 29.2951 21.2871 30.3119 20.0328 30.3119H17.6493C16.3951 30.3119 15.3783 29.2951 15.3783 28.0409C15.3783 26.7866 16.3951 25.7699 17.6493 25.7699L20.0328 25.7699ZM31.6909 28.0409C31.6909 26.7866 30.6742 25.7699 29.4199 25.7699L27.0364 25.7699C25.7822 25.7699 24.7654 26.7866 24.7654 28.0409C24.7654 29.2951 25.7822 30.3119 27.0364 30.3119H29.4199C30.6742 30.3119 31.6909 29.2951 31.6909 28.0409Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "pdf",
    label: "PDF",
    color: "red",
    imageUrl:
      "https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPDFImg.d45d4364.png&w=3840&q=75",
    title: "Create fillable PDF forms",
    features: [
      "Generate documents from Fillout form responses",
      "Email or upload completed PDFs to your systems",
      "Create agreements, consent forms and applications",
    ],
    actionText: "Make a PDF",
    actionIcon: (
      <svg
        width="30"
        height="36"
        viewBox="0 0 30 36"
        fill="none"
        className="h-[16px] w-full  max-w-[16px]  md:h-[24px] md:max-w-[24px] mlg:h-[16px] mlg:max-w-[16px] custom-2:h-[42px]  custom-2:max-w-[42px] xxl:h-[42px] xxl:max-w-[42px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.36389 2.55141C9.36389 1.15687 10.4944 0.0263672 11.8889 0.0263672L23.5345 0.0263672C24.2216 0.0263672 24.8791 0.306414 25.3552 0.801894L28.5458 4.12236C28.9977 4.59268 29.2501 5.21963 29.2501 5.87188L29.2501 24.5436C29.2501 25.9382 28.1196 27.0687 26.7251 27.0687L11.8889 27.0687C10.4944 27.0687 9.36389 25.9382 9.36389 24.5436L9.36389 2.55141ZM21.8918 8.79621C23.2753 8.79621 24.3969 9.91778 24.3969 11.3013C24.3969 12.6848 23.2753 13.8064 21.8918 13.8064L16.8813 13.8064C15.4978 13.8064 14.3762 12.6848 14.3762 11.3013C14.3762 9.91778 15.4978 8.79621 16.8813 8.79621L21.8918 8.79621ZM24.3969 20.0684C24.3969 18.6848 23.2753 17.5633 21.8918 17.5633L16.8813 17.5633C15.4978 17.5633 14.3762 18.6848 14.3762 20.0684C14.3762 21.4519 15.4978 22.5735 16.8813 22.5735L21.8918 22.5735C23.2753 22.5735 24.3969 21.4519 24.3969 20.0684Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.066 30.2963V33.4484C20.066 34.8429 18.9355 35.9734 17.541 35.9734H3.27466C1.88012 35.9734 0.749622 34.8429 0.749622 33.4484L0.749622 11.4562C0.749622 10.0617 1.88012 8.93115 3.27466 8.93115H6.34389L6.34389 26.3372C6.34389 28.5237 8.11643 30.2963 10.303 30.2963L20.066 30.2963Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "payments",
    label: "Payments",
    color: "purple",
    imageUrl:
      "https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPaymentsImg.7963f6a4.png&w=3840&q=75",
    title: "Accept payments from a custom form",
    features: [
      "Process orders, registrations and memberships",
      "Collect one-time or subscription payments",
      "Offer discounts, free trials, pay by ACH & more",
    ],
    actionText: "Make a payment",
    actionIcon: (
      <svg
        width="48"
        height="44"
        viewBox="0 0 48 44"
        fill="none"
        className="h-[16px] w-full  max-w-[16px]  md:h-[24px] md:max-w-[24px] mlg:h-[16px] mlg:max-w-[16px] custom-2:h-[42px]  custom-2:max-w-[42px] xxl:h-[42px] xxl:max-w-[42px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.8787 8.60281C10.6812 9.19162 9.37711 11.4504 9.96592 13.6478L13.5211 26.916C14.1099 29.1135 16.3687 30.4176 18.5662 29.8288L43.1549 23.2403C45.3524 22.6514 46.6565 20.3927 46.0676 18.1952L42.5124 4.92702C41.9236 2.72954 39.6649 1.42546 37.4674 2.01427L12.8787 8.60281ZM40.0439 12.6974C39.7298 11.5252 38.5248 10.8295 37.3526 11.1436L34.5224 11.9019C33.3501 12.216 32.6545 13.421 32.9686 14.5933C33.2827 15.7655 34.4876 16.4612 35.6599 16.1471L38.4901 15.3888C39.6623 15.0747 40.358 13.8697 40.0439 12.6974Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.62544 21.0767H4.98558C2.71058 21.0767 0.866333 22.9209 0.866333 25.1959V25.4725H9.80489C9.64696 24.894 9.48236 24.2797 9.30762 23.6276L9.01044 22.5185C8.87579 22.016 8.74716 21.5359 8.62544 21.0767ZM11.1253 29.7308H0.866333L0.866333 38.9322C0.866333 41.2072 2.71058 43.0514 4.98558 43.0514H30.4417C32.7167 43.0514 34.561 41.2072 34.561 38.9322V29.7308H34.2734C33.8634 29.8416 33.4364 29.956 32.9919 30.0751L24.4427 32.3658C18.8157 33.8736 16.0022 34.6274 13.7857 33.3478C12.5887 32.6566 11.8182 31.5182 11.1253 29.7308ZM8.99819 35.7263C10.1741 35.7263 11.1273 36.6795 11.1273 37.8554C11.1273 39.0313 10.1741 39.9845 8.99819 39.9845H5.93152C4.75563 39.9845 3.80239 39.0313 3.80239 37.8554C3.80239 36.6795 4.75564 35.7263 5.93152 35.7263H8.99819Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "workflows",
    label: "Workflows",
    color: "orange",
    imageUrl:
      "https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWorkflowsImg.7d21d1d3.png&w=3840&q=75",
    title: "Turn forms into powerful automations",
    features: [
      "Never miss a follow-up with custom emails workflows",
      "Use AI to summarize, classify or extract insights",
      "Recover lost leads with automated reminders",
    ],
    actionText: "Make a workflow",
    actionIcon: (
      <svg
        width="36"
        height="30"
        viewBox="0 0 36 30"
        fill="none"
        className="h-[16px] w-full  max-w-[16px]  md:h-[24px] md:max-w-[24px] mlg:h-[16px] mlg:max-w-[16px] custom-2:h-[42px]  custom-2:max-w-[42px] xxl:h-[42px] xxl:max-w-[42px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.5255 5.35714C28.5255 5.78338 28.7006 6.19215 29.0123 6.49355C29.324 6.79495 29.7467 6.96429 30.1875 6.96429C30.6282 6.96429 31.051 6.79495 31.3626 6.49355C31.6743 6.19215 31.8494 5.78338 31.8494 5.35714C31.8494 4.9309 31.6743 4.52211 31.3626 4.22071C31.051 3.91931 30.6282 3.75 30.1875 3.75C29.7467 3.75 29.324 3.91931 29.0123 4.22071C28.7006 4.52211 28.5255 4.9309 28.5255 5.35714ZM30.1875 10.7143C28.2526 10.7143 26.5489 9.75694 25.5601 8.30178C25.2455 7.83886 24.7539 7.5 24.197 7.5H21.545C20.4408 7.5 19.7257 8.7506 19.9854 9.83165C20.1363 10.4596 20.2159 11.114 20.2159 11.7857V18.2143C20.2159 20.5781 22.2033 22.5 24.6477 22.5C24.9302 22.5 25.1827 22.3311 25.3217 22.0834C26.2583 20.4143 28.0866 19.2857 30.1875 19.2857C33.2482 19.2857 35.7272 21.683 35.7272 24.6429C35.7272 27.6027 33.2482 30 30.1875 30C28.0866 30 26.2583 28.8714 25.3217 27.2023C25.1827 26.9546 24.9302 26.7857 24.6477 26.7857C19.7519 26.7857 15.7841 22.9487 15.7841 18.2143V11.7857C15.7841 9.42187 13.7967 7.5 11.3522 7.5C11.0698 7.5 10.8173 7.6689 10.6783 7.91661C9.74167 9.58566 7.91333 10.7143 5.81248 10.7143C2.75175 10.7143 0.272705 8.31696 0.272705 5.35714C0.272705 2.39732 2.75175 -1.34769e-07 5.81248 0C7.91333 9.25041e-08 9.74167 1.12863 10.6783 2.79768C10.8173 3.04539 11.0698 3.21429 11.3522 3.21429H24.197C24.7539 3.21429 25.2455 2.8754 25.5601 2.41248C26.5489 0.957321 28.2526 -8.51958e-08 30.1875 0C33.2482 1.34769e-07 35.7272 2.39732 35.7272 5.35714C35.7272 8.31696 33.2482 10.7143 30.1875 10.7143ZM30.1875 26.25C30.6282 26.25 31.051 26.0807 31.3626 25.7793C31.6743 25.4779 31.8494 25.0691 31.8494 24.6429C31.8494 24.2166 31.6743 23.8078 31.3626 23.5064C31.051 23.205 30.6282 23.0357 30.1875 23.0357C29.7467 23.0357 29.324 23.205 29.0123 23.5064C28.7006 23.8078 28.5255 24.2166 28.5255 24.6429C28.5255 25.0691 28.7006 25.4779 29.0123 25.7793C29.324 26.0807 29.7467 26.25 30.1875 26.25ZM4.15055 5.35714C4.15055 5.78338 4.32564 6.19215 4.63731 6.49355C4.94899 6.79495 5.37171 6.96429 5.81248 6.96429C6.25325 6.96429 6.67597 6.79495 6.98764 6.49355C7.29931 6.19215 7.47441 5.78338 7.47441 5.35714C7.47441 4.9309 7.29931 4.52211 6.98764 4.22071C6.67597 3.91931 6.25325 3.75 5.81248 3.75C5.37171 3.75 4.94899 3.91931 4.63731 4.22071C4.32564 4.52211 4.15055 4.9309 4.15055 5.35714Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    id: "signatures",
    label: "Signatures",
    color: "teal",
    imageUrl:
      "https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSignaturesImg.bf488d74.png&w=3840&q=75",
    title: "Create, track, and e-sign documents",
    features: [
      "Collect electronic signatures",
      "Securely sign documents and generate PDFs",
      "Automate agreement workflows",
    ],
    actionText: "Make a signature",
    actionIcon: (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        className="h-[16px] w-full  max-w-[16px]  md:h-[24px] md:max-w-[24px] mlg:h-[16px] mlg:max-w-[16px] custom-2:h-[42px]  custom-2:max-w-[42px] xxl:h-[42px] xxl:max-w-[42px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.9214 30.8247C41.8085 30.4347 42.2335 29.3453 41.8708 28.3914L41.3706 27.0758C41.0079 26.122 39.9948 25.6649 39.1077 26.0549L38.496 26.3239C34.5237 28.0705 32.8311 27.9424 32.2841 27.715L32.2746 27.7111C32.1456 27.6584 31.8336 27.5309 31.7912 26.2216C31.7525 25.0297 31.9815 23.6703 32.2225 22.2395L32.2229 22.2373C32.2569 22.0351 32.2912 21.8316 32.325 21.6269C32.4404 20.9281 32.5839 20.0228 32.5662 19.261C32.5579 18.9071 32.5148 18.2085 32.1553 17.5244C31.9532 17.1399 31.6354 16.7312 31.1625 16.4311C30.6876 16.1296 30.1926 16.0243 29.7617 16.0243C28.7696 16.0243 27.9926 16.4806 27.4706 16.9015C26.958 17.3148 26.5196 17.833 26.1631 18.2913C25.8294 18.7204 25.4791 19.2148 25.1393 19.6945L25.0459 19.8262C24.6636 20.3654 24.2672 20.9208 23.8254 21.4936C22.0881 23.746 19.6824 26.2242 15.7005 27.6107C15.077 27.8278 14.7 27.7463 14.4297 27.6096C13.7788 27.2804 13.9441 26.3058 14.5061 25.8229C20.8569 20.3652 24.314 15.1067 25.4424 10.6946C26.2776 7.42935 25.905 4.17761 23.8107 2.04041C21.7428 -0.0699025 18.7178 -0.349313 15.7701 0.571468C12.3368 1.64394 10.1059 4.70611 8.7828 7.99449C7.44504 11.3194 6.85731 15.2729 6.90838 18.9438C6.93021 20.5126 7.06983 22.0941 7.34278 23.6006C7.483 24.3746 7.20875 25.1803 6.59547 25.6125C5.03826 26.71 3.33153 27.8244 1.46437 28.9483L0.887703 29.2954C0.0514767 29.7988 -0.246949 30.9358 0.221151 31.835L0.866759 33.0752C1.33486 33.9744 2.39222 34.2953 3.22845 33.7919L3.80512 33.4448C5.35231 32.5135 6.80917 31.5793 8.17843 30.6454C8.96675 30.1078 9.99673 30.3354 10.6807 31.0187C11.1801 31.5176 11.7477 31.9478 12.3903 32.2727C13.8713 33.0217 15.5163 33.0914 17.1768 32.5132C21.4795 31.0149 24.3602 28.501 26.3983 26.1505C26.6042 25.9131 26.9914 26.0769 27.0019 26.4013C27.0691 28.4711 27.717 31.3412 30.5561 32.5214C32.9705 33.5251 36.2257 32.8893 40.3097 31.0937L40.9214 30.8247ZM13.7336 19.7783C12.9391 20.5471 11.716 20.0159 11.7 18.8667C11.6569 15.772 12.1641 12.5679 13.181 10.0407C14.2125 7.47682 15.5958 5.99203 17.107 5.51998C19.1038 4.89624 20.1213 5.3796 20.5119 5.77821C20.8761 6.14992 21.3781 7.15324 20.8219 9.32806C20.1504 11.9534 18.0435 15.608 13.7336 19.7783ZM4.80926 37.9823C3.81419 37.9823 3.00752 38.789 3.00752 39.784V40.125C3.00752 41.1201 3.81419 41.9268 4.80926 41.9268L36.6648 41.9268C37.6599 41.9268 38.4665 41.1201 38.4665 40.125V39.784C38.4665 38.789 37.6599 37.9823 36.6648 37.9823L4.80926 37.9823Z"
          fill="white"
        />
      </svg>
    ),
  },
];

// CORRECTED: The hex codes here now match the ones in TabIcon
const colorVariants = {
  blue: {
    // Forms
    border: "border-[#2E72E2]",
    text: "text-[#2E72E2]",
    bg: "bg-blue-50",
  },
  green: {
    // Scheduling
    border: "border-[#E45D3B]",
    text: "text-[#E45D3B]",
    bg: "bg-orange-50",
  },
  red: {
    // PDF
    border: "border-[#17CCB6]",
    text: "text-[#17CCB6]",
    bg: "bg-teal-50",
  },
  purple: {
    // Payments
    border: "border-[#5EC269]",
    text: "text-[#5EC269]",
    bg: "bg-green-50",
  },
  orange: {
    // Workflows
    border: "border-[#8240EA]",
    text: "text-[#8240EA]",
    bg: "bg-purple-50",
  },
  teal: {
    // Signatures
    border: "border-[#E49356]",
    text: "text-[#E49356]",
    bg: "bg-orange-50",
  },
};

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState("forms");

  const activeTabData = tabData.find((tab) => tab.id === activeTab);
  const activeColors =
    colorVariants[activeTabData?.color as keyof typeof colorVariants];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="relative -top-40">
        {/* Tab Navigation */}
        <div className="flex w-4xl mx-auto flex-wrap justify-between gap-8 border-gray-200">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;
            const colors =
              colorVariants[tab.color as keyof typeof colorVariants];

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 text-xl font-bold transition-all duration-200 border-b-8 ${
                  isActive
                    ? `${colors.border} text-black`
                    : "border-transparent text-[#6B6644] hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {activeTabData && (
          <div
            className={`rounded-2xl p-4 glass-2 transition-all duration-300`}
          >
            <div className="mb-6">
              <h1
                className={`text-lg uppercase font-semibold ${activeColors.text}`}
              >
                {activeTabData.label}
              </h1>
            </div>

            <div className="flex gap-12 ">
              {/* Left Content */}
              <div className="space-y-6 max-w-60">
                <div className="space-y-4">
                  <h2 className="text-[20px] font-medium">
                    {activeTabData.title}
                  </h2>

                  <div className="space-y-4">
                    {activeTabData.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        {/* CLEANUP: Removed the unnecessary .replace() call here */}
                        <div
                          className={`w-4 h-4 mt-[7px] rounded-full ${activeColors.bg} border-2 ${activeColors.border} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <div
                            className={`w-2 h-2 rounded-full ${activeColors.text.replace(
                              "text-",
                              "bg-"
                            )}`}
                          />
                        </div>
                        <p className="font-medium leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button className="flex items-center gap-3 text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors group">
                    <TabIcon
                      color={activeTabData.color as TabColor}
                      className="w-14 h-14"
                    >
                      {activeTabData.actionIcon}
                    </TabIcon>
                    {activeTabData.actionText} →
                  </button>
                </div>
              </div>

              {/* Right Content - Image */}
              <div className="relative h-[450px] flex-1">
                <Image
                  src={activeTabData.imageUrl || "/placeholder.svg"}
                  alt={`${activeTabData.label} interface`}
                  fill
                  className="object-cover shadow-md rounded-md border"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainTabs;
