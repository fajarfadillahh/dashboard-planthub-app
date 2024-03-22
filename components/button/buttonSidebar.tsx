import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarButtonProps {
  label: string;
  path: string;
  icon: React.ReactNode;
  amountData?: number;
}

export default function ButtonSidebar({
  label,
  path,
  icon,
  amountData,
}: SidebarButtonProps) {
  const router = useRouter();

  return (
    <Link
      href={path}
      className={`flex h-10 items-center justify-between rounded-xl px-3 py-2 ${
        router.pathname.includes(path)
          ? "bg-green-600 text-white hover:bg-green-600/90"
          : "bg-transparent text-gray-600 hover:bg-gray-200"
      }`}
    >
      <div className="flex flex-1 items-center gap-2">
        <div>{icon}</div>
        <div className="text-sm font-semibold">{label}</div>
      </div>

      {amountData === 0 ? null : (
        <div className="flex aspect-square h-4 w-auto items-center justify-center rounded-full bg-danger p-2.5 text-[12px] font-medium text-white">
          {amountData}
        </div>
      )}
    </Link>
  );
}
