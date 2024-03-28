import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Button, Input } from "@nextui-org/react";
import { MagnifyingGlass, PlusCircle } from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

export default function BannerPage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Banner | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="flex items-end justify-between border-b border-dashed border-gray-200 pb-8">
            <div className="grid gap-1">
              <h2 className="text-[22px] font-bold text-default-900">
                Daftar Banner 🖼️
              </h2>
              <p className="font-medium text-default-600">
                Atur daftar banner di sini.
              </p>
            </div>

            <Button
              endContent={<PlusCircle weight="bold" size={18} />}
              onClick={() => router.push("/banner/create")}
              className="bg-green-600 font-medium text-white"
            >
              Tambah banner
            </Button>
          </div>

          <div className="grid gap-4">
            <div className="flex items-end justify-between">
              <Input
                variant="flat"
                color="default"
                labelPlacement="outside"
                placeholder="Cari banner..."
                startContent={
                  <MagnifyingGlass
                    weight="bold"
                    size={18}
                    className="text-gray-500"
                  />
                }
                className="max-w-[500px]"
              />

              <p className="text-sm font-medium text-gray-600">
                Total: <span className="font-semibold text-green-600">3</span>{" "}
                banner
              </p>
            </div>

            <div>table here</div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
