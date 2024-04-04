import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { FloppyDisk, Image } from "@phosphor-icons/react";
import Head from "next/head";
import React from "react";

// components
import ButtonBack from "@/components/button/buttonBack";
import Container from "@/components/wrapper/container";
import Layout from "@/components/wrapper/layout";

interface CategoriesProps {
  id: number;
  label: string;
  value: string;
}

interface PlantTypeProps {
  id: number;
  label: string;
  value: string;
}

const categories: CategoriesProps[] = [
  {
    id: 1,
    label: "Tanaman Hias",
    value: "tanaman-hias",
  },
  {
    id: 2,
    label: "Pupuk Tanaman",
    value: "pupuk-tanaman",
  },
  {
    id: 3,
    label: "Perlengkapan Pendukung",
    value: "perlengkapan-pendukung",
  },
];

const plantType: PlantTypeProps[] = [
  {
    id: 1,
    label: "Dalam Ruangan",
    value: "indoor",
  },
  {
    id: 2,
    label: "Luar Ruangan",
    value: "outdoor",
  },
  {
    id: 3,
    label: "Dalam & Luar Ruangan",
    value: "indoor_outdoor",
  },
];

export default function EditPage() {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <>
      <Head>
        <title>Edit Produk | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <ButtonBack path="/product" />

          <div className="grid max-w-[700px] gap-8">
            <div className="grid gap-4">
              <h3 className="text-[20px] font-semibold text-default-900">
                Tentang Produk 📦
              </h3>

              <Input
                type="text"
                variant="flat"
                color="default"
                labelPlacement="outside"
                label="Nama produk"
                placeholder="Contoh: Bunga Melati"
              />

              <Checkbox
                color="success"
                size="sm"
                isSelected={isSelected}
                onValueChange={setIsSelected}
              >
                Data tanaman (Tipe & Spesies Tanaman)
              </Checkbox>

              {isSelected ? (
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    items={plantType}
                    variant="flat"
                    color="default"
                    labelPlacement="outside"
                    label="Tipe tanaman"
                    placeholder="Contoh: Dalam Ruangan"
                  >
                    {(item) => (
                      <SelectItem key={item.value}>{item.label}</SelectItem>
                    )}
                  </Select>

                  <Input
                    type="text"
                    variant="flat"
                    color="default"
                    labelPlacement="outside"
                    label="Spesies tanaman"
                    placeholder="Contoh: Rosa Multiflora L"
                  />
                </div>
              ) : null}

              <Select
                items={categories}
                variant="flat"
                color="default"
                labelPlacement="outside"
                label="Kategori produk"
                placeholder="Contoh: Tanaman Hias"
              >
                {(category) => (
                  <SelectItem key={category.value}>{category.label}</SelectItem>
                )}
              </Select>

              <Textarea
                variant="flat"
                color="default"
                labelPlacement="outside"
                label="Deskripsi produk"
                placeholder="Tuliskan deskripsi produk"
              />
            </div>

            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-[20px] font-semibold text-default-900">
                  Foto Produk 📸
                </h3>
                <p className="max-w-[400px] text-sm font-medium text-gray-600">
                  Upload minimal 3 foto untuk memenuhi rasa penasaran pembeli
                  akan tampilan barang.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-6">
                <div className="flex flex-col justify-start gap-2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 transition-all hover:bg-gray-200">
                    <Image
                      alt="test alt"
                      weight="bold"
                      size={42}
                      className="text-gray-400"
                    />
                  </div>
                  <p className="text-center text-[12px] font-medium text-gray-600">
                    Foto utama
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 transition-all hover:bg-gray-200">
                    <Image
                      alt="test alt"
                      weight="bold"
                      size={42}
                      className="text-gray-400"
                    />
                  </div>
                  <p className="text-center text-[12px] font-medium text-gray-600">
                    Foto tampak samping
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 transition-all hover:bg-gray-200">
                    <Image
                      alt="test alt"
                      weight="bold"
                      size={42}
                      className="text-gray-400"
                    />
                  </div>
                  <p className="text-center text-[12px] font-medium text-gray-600">
                    Foto tampak depan & belakang
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 transition-all hover:bg-gray-200">
                    <Image
                      alt="test alt"
                      weight="bold"
                      size={42}
                      className="text-gray-400"
                    />
                  </div>
                  <p className="text-center text-[12px] font-medium text-gray-600">
                    Foto tampak atas & bawah
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 transition-all hover:bg-gray-200">
                    <Image
                      alt="test alt"
                      weight="bold"
                      size={42}
                      className="text-gray-400"
                    />
                  </div>
                  <p className="text-center text-[12px] font-medium text-gray-600">
                    Foto lainnya
                  </p>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <div className="flex aspect-square items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-gray-100 transition-all hover:bg-gray-200">
                    <Image
                      alt="test alt"
                      weight="bold"
                      size={42}
                      className="text-gray-400"
                    />
                  </div>
                  <p className="text-center text-[12px] font-medium text-gray-600">
                    Foto lainnya 2
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <h3 className="text-[20px] font-semibold text-default-900">
                Informasi Produk 🌟
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  variant="flat"
                  color="default"
                  labelPlacement="outside"
                  label="Harga"
                  placeholder="0"
                  startContent={
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">Rp</span>
                    </div>
                  }
                />

                <Input
                  type="number"
                  variant="flat"
                  color="default"
                  labelPlacement="outside"
                  label="Harga diskon"
                  placeholder="0"
                  startContent={
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">Rp</span>
                    </div>
                  }
                />
              </div>

              <Input
                type="number"
                variant="flat"
                color="default"
                labelPlacement="outside"
                label="Jumlah stok"
                placeholder="0"
              />

              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="number"
                  variant="flat"
                  color="default"
                  labelPlacement="outside"
                  label="Lebar produk"
                  placeholder="0"
                  startContent={
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">cm</span>
                    </div>
                  }
                />

                <Input
                  type="number"
                  variant="flat"
                  color="default"
                  labelPlacement="outside"
                  label="Tinggi produk"
                  placeholder="0"
                  startContent={
                    <div className="flex items-center justify-center">
                      <span className="text-sm text-gray-600">cm</span>
                    </div>
                  }
                />
              </div>

              <Input
                type="number"
                variant="flat"
                color="default"
                labelPlacement="outside"
                label="Berat produk"
                placeholder="0"
                startContent={
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-gray-600">gram</span>
                  </div>
                }
              />
            </div>

            <Button
              endContent={<FloppyDisk weight="bold" size={18} />}
              className="w-max justify-self-end bg-green-600 font-semibold text-white"
            >
              Simpan produk
            </Button>
          </div>
        </Container>
      </Layout>
    </>
  );
}
