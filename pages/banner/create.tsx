import Head from "next/head";
import { Button, Input } from "@nextui-org/react";
import { Image, PlusCircle } from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";
import ButtonBack from "@/components/button/buttonBack";

export default function CreatePage() {
  return (
    <>
      <Head>
        <title>Tambah Banner | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <ButtonBack path="/banner" />

          <div className="grid max-w-[700px] gap-8">
            <div className="grid gap-4">
              <h3 className="text-[20px] font-semibold text-default-900">
                Tentang Banner 🖼️
              </h3>

              <Input
                type="text"
                variant="flat"
                color="default"
                labelPlacement="outside"
                label="Judul banner"
                placeholder="Contoh: Promo Tahun Baru 50%"
              />

              <div className="grid gap-1.5">
                <label className="text-sm font-medium text-default-600">
                  Import banner
                </label>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-100 transition-all hover:bg-gray-200">
                  <div className="flex flex-col items-center gap-2">
                    <Image weight="bold" size={42} className="text-gray-400" />
                    <p className="text-sm font-medium italic text-gray-400">
                      Ketuk atau tarik untuk menambahkan banner.
                    </p>
                    <span className="text-[12px] font-medium italic text-gray-400">
                      *Catatan: Ukuran banner harus 16:9
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <Button
              endContent={<PlusCircle weight="bold" size={18} />}
              className="w-max justify-self-end bg-green-600 font-semibold text-white"
            >
              Tambah banner
            </Button>
          </div>
        </Container>
      </Layout>
    </>
  );
}
