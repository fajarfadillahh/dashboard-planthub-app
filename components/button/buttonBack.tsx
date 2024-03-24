import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

interface ButtonBackProps {
  path: string;
}

export default function ButtonBack({ path }: ButtonBackProps) {
  return (
    <Link
      href={path}
      className="inline-flex items-center gap-2 font-medium text-gray-600"
    >
      <ArrowLeft weight="bold" size={18} />
      Kembali
    </Link>
  );
}
