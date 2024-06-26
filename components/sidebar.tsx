import {
  ArchiveBox,
  CalendarX,
  ChartBar,
  CheckCircle,
  ClockCountdown,
  House,
  Images,
  ListChecks,
  ListPlus,
  PaperPlaneTilt,
  WarningCircle,
} from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

// components
import ButtonSidebar from "@/components/button/buttonSidebar";
import { StatusType } from "@/types/status.type";
import { fetcher } from "@/utils/fetcher";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Sidebar() {
  const session = useSession();

  const response = useSWR(
    {
      url: "/status",
      method: "GET",
      token: session.data?.user.access_token,
    },
    fetcher,
    {
      refreshInterval: 1000 * 60,
      revalidateOnFocus: false,
    },
  );

  const status: StatusType = response.data ? response.data.data : null;

  return (
    <div className="flex h-full min-w-[250px] flex-col gap-[30px] bg-gray-50 px-[20px] py-[30px]">
      <Link href="/" className="inline-flex items-center justify-center gap-2">
        <Image
          src="/assets/img/logo.svg"
          alt="logo"
          width={500}
          height={500}
          priority
          className="h-8 w-8"
        />

        <div className="font-bold text-default-900">
          Planthub<span className="text-green-600">.</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col overflow-y-scroll">
        <div className="grid gap-[30px]">
          <div className="grid gap-1">
            <ButtonSidebar
              label="Dashboard"
              path="/dashboard"
              icon={<House weight="bold" size={20} />}
              amountData={0}
            />

            <ButtonSidebar
              label="Produk"
              path="/product"
              icon={<ArchiveBox weight="bold" size={20} />}
              amountData={0}
            />

            <ButtonSidebar
              label="Statistik"
              path="/statistic"
              icon={<ChartBar weight="bold" size={20} />}
              amountData={0}
            />

            <ButtonSidebar
              label="Banner"
              path="/banner"
              icon={<Images weight="bold" size={20} />}
              amountData={0}
            />

            <ButtonSidebar
              label="Kategori"
              path="/category"
              icon={<ListPlus weight="bold" size={20} />}
              amountData={0}
            />
          </div>

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-default-600">
              Pesanan
            </span>

            <div className="grid gap-1">
              <ButtonSidebar
                label="Belum Dibayar"
                path="/order/waiting-payment"
                icon={<ClockCountdown weight="bold" size={20} />}
                amountData={status ? status.waiting_payment : 0}
              />

              <ButtonSidebar
                label="Sudah Dibayar"
                path="/order/payment-success"
                icon={<CheckCircle weight="bold" size={20} />}
                amountData={status ? status.success_payment : 0}
              />

              <ButtonSidebar
                label="Gagal Dibayar"
                path="/order/payment-failed"
                icon={<WarningCircle weight="bold" size={20} />}
                amountData={status ? status.failed_payment : 0}
              />

              <ButtonSidebar
                label="Siap Dikirim"
                path="/order/process"
                icon={<ArchiveBox weight="bold" size={20} />}
                amountData={status ? status.order_processing : 0}
              />

              <ButtonSidebar
                label="Dikirim"
                path="/order/delivery"
                icon={<PaperPlaneTilt weight="bold" size={20} />}
                amountData={status ? status.order_delivered : 0}
              />

              <ButtonSidebar
                label="Selesai"
                path="/order/completed"
                icon={<ListChecks weight="bold" size={20} />}
                amountData={status ? status.order_completed : 0}
              />

              <ButtonSidebar
                label="Kadaluarsa"
                path="/order/expired"
                icon={<CalendarX weight="bold" size={20} />}
                amountData={status ? status.order_expired : 0}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
