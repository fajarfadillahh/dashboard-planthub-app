import React from "react";
import Head from "next/head";
import { Input } from "@nextui-org/react";
import { MagnifyingGlass } from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

export default function CompletedPage() {
  return (
    <>
      <Head>
        <title>Pesanan Selesai | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="grid gap-1 border-b border-dashed border-gray-200 pb-8">
            <h2 className="text-[22px] font-bold text-default-900">
              Pesanan Selesai 🎉
            </h2>
            <p className="font-medium text-default-600">
              Semua pesanan yang selesai akan muncul di sini.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="flex items-end justify-between">
              <Input
                variant="flat"
                color="default"
                labelPlacement="outside"
                placeholder="Cari pesanan..."
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
                pesanan
              </p>
            </div>

            <div>table here</div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
