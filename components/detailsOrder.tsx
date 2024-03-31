import Image from "next/image";
import { Chip } from "@nextui-org/react";
import { WarningCircle } from "@phosphor-icons/react";

export default function DetailsOrder() {
  return (
    <div className="grid gap-8">
      <div className="flex items-start gap-8 border-b border-dashed border-gray-200 pb-8">
        <div className="grid gap-1">
          <p className="text-[12px] font-medium text-gray-600">ID Pesanan</p>
          <h3 className="text-[20px] font-semibold text-default-900">
            8aiB-2o6A-9jk4
          </h3>
        </div>

        <div className="grid gap-1">
          <p className="text-[12px] font-medium text-gray-600">Pesanan Dari</p>
          <h3 className="text-[20px] font-semibold text-default-900">
            Ahmad Megantara
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-[auto_380px] items-start gap-6">
        <div className="relative grid gap-8">
          {/* --- product order list --- */}
          <div className="grid gap-6 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h3 className="font-semibold text-default-900">Daftar Produk</h3>

            <div className="grid gap-3">
              <div className="grid grid-cols-[350px_100px_1fr] items-center gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/img/product-img-order.png"
                    alt="product img"
                    width={100}
                    height={100}
                    priority
                    className="aspect-square h-[64px] w-[64px] rounded object-cover object-center"
                  />

                  <h3 className="line-clamp-1 flex-1 font-medium text-default-600">
                    Lavender
                  </h3>
                </div>

                <div className="text-center font-medium text-gray-600">
                  1 item
                </div>

                <div className="text-right font-semibold text-default-900">
                  Rp130.000
                </div>
              </div>

              <div className="grid grid-cols-[350px_100px_1fr] items-center gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/img/product-img-order.png"
                    alt="product img"
                    width={100}
                    height={100}
                    priority
                    className="aspect-square h-[64px] w-[64px] rounded object-cover object-center"
                  />

                  <h3 className="line-clamp-1 flex-1 font-medium text-default-600">
                    Lavender
                  </h3>
                </div>

                <div className="text-center font-medium text-gray-600">
                  1 item
                </div>

                <div className="text-right font-semibold text-default-900">
                  Rp130.000
                </div>
              </div>

              <div className="grid grid-cols-[350px_100px_1fr] items-center gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/img/product-img-order.png"
                    alt="product img"
                    width={100}
                    height={100}
                    priority
                    className="aspect-square h-[64px] w-[64px] rounded object-cover object-center"
                  />

                  <h3 className="line-clamp-1 flex-1 font-medium text-default-600">
                    Lavender
                  </h3>
                </div>

                <div className="text-center font-medium text-gray-600">
                  1 item
                </div>

                <div className="text-right font-semibold text-default-900">
                  Rp130.000
                </div>
              </div>
            </div>
          </div>

          {/* --- shipping information --- */}
          <div className="grid gap-6 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h3 className="font-semibold text-default-900">
              Informasi Pengiriman
            </h3>

            <div className="grid gap-1.5 border-b border-dashed border-gray-200 pb-6">
              <span className="text-sm font-medium text-gray-600">Alamat</span>

              <div className="grid gap-[2px]">
                <h3 className="font-medium text-gray-900">Ahmad Megantara</h3>
                <h3 className="font-medium text-gray-900">+6289123456789</h3>
                <h3 className="font-medium leading-[160%] text-gray-900">
                  Jl. Bukit Raya Persari, Blok. 12B, No.144C RT. 05/RW. 09, Kel.
                  Limo Kec. Limo, Kota Depok, Jawa Barat
                </h3>
              </div>
            </div>

            <div className="grid gap-3">
              <span className="text-sm font-medium text-gray-600">Kurir</span>

              <div className="grid grid-cols-3 items-center gap-2">
                <Image
                  src="/assets/img/jne-logo.png"
                  alt="courier logo"
                  width={160}
                  height={64}
                  priority
                  className="h-[32px] w-auto"
                />

                <div className="text-center font-medium text-gray-600">
                  1-3 Hari Pengiriman
                </div>

                <div className="text-right font-semibold text-default-900">
                  Rp8.000
                </div>
              </div>
            </div>
          </div>

          {/* --- another information */}
          <div className="grid gap-6 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <h3 className="font-semibold text-default-900">Informasi Lainya</h3>

            <div className="grid gap-[10px]">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">Jumlah Barang</span>
                <span className="font-semibold text-gray-900">2 (950gr)</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">Total Harga</span>
                <span className="font-semibold text-gray-900">Rp220.000</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-600">Ongkos Kirim</span>
                <span className="font-semibold text-gray-900">Rp8.000</span>
              </div>
            </div>
          </div>

          {/* --- total payment sticky --- */}
          <div className="sticky bottom-0 left-0 flex h-auto w-full items-center justify-between gap-2 rounded-xl bg-green-600 p-6 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
            <span className="font-semibold text-gray-100">
              Total Pembayaran
            </span>
            <h1 className="text-[24px] font-bold text-white">Rp228.000</h1>
          </div>
        </div>

        <div className="right-0 top-0 grid gap-6 rounded-xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
          <div className="grid gap-2 border-b border-dashed border-gray-200 pb-6">
            <h3 className="font-semibold text-default-900">Status Pesanan</h3>
            <Chip
              variant="flat"
              color="warning"
              startContent={<WarningCircle weight="fill" size={20} />}
              className="font-medium"
            >
              Menunggu Pembayaran
            </Chip>
          </div>

          <p className="text-sm font-medium italic leading-[160%] text-gray-600">
            <strong className="text-default-900">Catatan:</strong> Pastikan
            pembeli sudah melakukan pembayaran melalui Virtual Akun bank yang
            dipilih.
          </p>
        </div>
      </div>
    </div>
  );
}
