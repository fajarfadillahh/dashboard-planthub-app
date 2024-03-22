import Head from "next/head";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Eye,
} from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="grid gap-1">
            <h2 className="text-[22px] font-bold text-default-900">
              Selamat Datang 👋, Admin
            </h2>
            <p className="font-medium text-default-600">
              Berikut rangkuman tokomu hari ini.
            </p>
          </div>

          {/* --- order summary --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h5 className="font-semibold text-default-900">
              Ringkasan Pesanan
            </h5>

            <div className="flex items-center justify-between">
              <div className="grid w-[400px] gap-4">
                <div className="grid gap-1">
                  <p className="font-medium text-default-600">Pesanan Baru</p>
                  <h3 className="text-[32px] font-bold text-default-900">
                    280
                  </h3>
                  <p className="text-sm font-medium text-default-600">
                    Potensi Pendapatan{" "}
                    <span className="font-semibold text-green-600">
                      +Rp3.121.000
                    </span>
                  </p>
                </div>

                <Button
                  variant="bordered"
                  color="default"
                  startContent={<Eye weight="bold" size={18} />}
                  className="w-max border font-medium"
                >
                  Lihat Detail
                </Button>
              </div>

              {/* --- devide --- */}
              <div className="h-full w-[1px] bg-gray-200" />

              <div className="grid w-[400px] gap-4">
                <div className="grid gap-1">
                  <p className="font-medium text-default-600">
                    Pesanan Siap Dikirim
                  </p>
                  <h3 className="text-[32px] font-bold text-default-900">
                    190
                  </h3>
                  <p className="text-sm font-medium text-default-600">
                    Potensi Pendapatan{" "}
                    <span className="font-semibold text-green-600">
                      +Rp1.826.000
                    </span>
                  </p>
                </div>

                <Button
                  variant="bordered"
                  color="default"
                  startContent={<Eye weight="bold" size={18} />}
                  className="w-max border font-medium"
                >
                  Lihat Detail
                </Button>
              </div>
            </div>
          </div>

          {/* --- product sales statistics --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="flex items-end justify-between">
              <div className="grid gap-1">
                <h5 className="font-semibold text-default-900">
                  Statistik Penjualan Produk
                </h5>
                <p className="text-sm font-medium text-gray-600">
                  9 Maret - 15 Maret 2024
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-green-600"
              >
                Lihat Semua
                <ArrowRight weight="bold" size={14} />
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-200 p-6">
              <div className="grid w-[400px] gap-1">
                <p className="font-medium text-default-600">Pendapatan</p>
                <h3 className="text-[32px] font-bold text-default-900">
                  Rp4.120.550
                </h3>
                <div className="inline-flex items-center gap-0.5">
                  <ArrowUpRight
                    weight="bold"
                    size={16}
                    className="text-green-600"
                  />
                  <p className="text-sm font-medium text-default-600">
                    <span className="text-green-600">+4%</span> dari minggu lalu
                  </p>
                </div>
              </div>

              {/* --- devide --- */}
              <div className="h-full w-[1px] bg-gray-200" />

              <div className="grid w-[400px] gap-1">
                <p className="font-medium text-default-600">Produk Terjual</p>
                <h3 className="text-[32px] font-bold text-default-900">280</h3>
                <div className="inline-flex items-center gap-0.5">
                  <ArrowDownRight
                    weight="bold"
                    size={16}
                    className="text-red-600"
                  />
                  <p className="text-sm font-medium text-default-600">
                    <span className="text-red-600">-1%</span> dari minggu lalu
                  </p>
                </div>
              </div>
            </div>

            <div>chart here</div>
          </div>

          {/* --- store traffic this week --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="flex items-end justify-between">
              <div className="grid gap-1">
                <h5 className="font-semibold text-default-900">
                  Trafik Toko Minggu Ini
                </h5>
                <p className="text-sm font-medium text-gray-600">
                  9 Maret - 15 Maret 2024
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-green-600"
              >
                Lihat Semua
                <ArrowRight weight="bold" size={14} />
              </Link>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-gray-200 p-6">
              <div className="grid w-[400px] gap-1">
                <p className="font-medium text-default-600">Toko Dikunjungi</p>
                <h3 className="text-[32px] font-bold text-default-900">1297</h3>
                <div className="inline-flex items-center gap-0.5">
                  <ArrowUpRight
                    weight="bold"
                    size={16}
                    className="text-green-600"
                  />
                  <p className="text-sm font-medium text-default-600">
                    <span className="text-green-600">+2%</span> dari minggu lalu
                  </p>
                </div>
              </div>

              {/* --- devide --- */}
              <div className="h-full w-[1px] bg-gray-200" />

              <div className="grid w-[400px] gap-1">
                <p className="font-medium text-default-600">Produk Dilihat</p>
                <h3 className="text-[32px] font-bold text-default-900">983</h3>
                <div className="inline-flex items-center gap-0.5">
                  <ArrowDownRight
                    weight="bold"
                    size={16}
                    className="text-red-600"
                  />
                  <p className="text-sm font-medium text-default-600">
                    <span className="text-red-600">-1%</span> dari minggu lalu
                  </p>
                </div>
              </div>
            </div>

            <div>chart here</div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
