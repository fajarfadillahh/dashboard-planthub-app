import React from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Button,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Eye } from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

// dummy data
import { bestSellingProduct } from "@/_dummy/products";

type BestSellingProductType = (typeof bestSellingProduct)[0];

const columns = [
  { name: "Nama Produk", uid: "name", sortable: true },
  { name: "Kategori", uid: "category", sortable: false },
  { name: "Terjual", uid: "sold", sortable: true },
  { name: "Dilihat", uid: "seen", sortable: true },
  { name: "Aksi", uid: "action", sortable: false },
];

export default function StatisticPage() {
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "sold",
    direction: "descending",
  });

  const sortedItems = [...bestSellingProduct].sort(
    (a: BestSellingProductType, b: BestSellingProductType) => {
      const first = a[
        sortDescriptor.column as keyof BestSellingProductType
      ] as number;
      const second = b[
        sortDescriptor.column as keyof BestSellingProductType
      ] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    },
  );

  const renderCell = (
    product: BestSellingProductType,
    columnKey: React.Key,
  ) => {
    const cellValue = product[columnKey as keyof BestSellingProductType];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex items-center gap-2">
            <div className="h-12 w-12 overflow-hidden rounded border border-gray-200">
              <Image
                src={product.image}
                alt="product image"
                width={100}
                height={150}
                priority
                className="object-contain object-center"
              />
            </div>
            <p className="text-sm font-medium text-gray-600">{product.name}</p>
          </div>
        );
      case "category":
        return (
          <div className="text-sm font-medium text-gray-600">
            {product.category}
          </div>
        );
      case "sold":
        return (
          <div className="text-sm font-medium text-gray-600">
            {product.sold}
          </div>
        );
      case "seen":
        return (
          <div className="text-sm font-medium text-gray-600">
            {product.seen}
          </div>
        );
      case "action":
        return (
          <div className="w-max">
            <Button
              variant="light"
              size="sm"
              color="success"
              startContent={<Eye weight="bold" size={18} />}
            >
              Lihat produk
            </Button>
          </div>
        );

      default:
        return cellValue;
    }
  };

  return (
    <>
      <Head>
        <title>Statistik | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="grid gap-1">
            <h2 className="text-[22px] font-bold text-default-900">
              Statistik 30 Hari Terakhir 🚀
            </h2>
            <p className="font-medium text-default-600">
              Data diperbarui pada Jumat, 23 Maret 2024 13:30
            </p>
          </div>

          {/* --- income --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="grid gap-1">
              <h5 className="font-semibold text-default-900">Pendapatan</h5>
              <h1 className="text-[32px] font-semibold text-default-900">
                Rp9.120.222
              </h1>
            </div>

            <div>chart here</div>
          </div>

          {/* --- total products sold --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="grid gap-1">
              <h5 className="font-semibold text-default-900">
                Total Produk Terjual
              </h5>
              <h1 className="text-[32px] font-semibold text-default-900">
                984
              </h1>
            </div>

            <div>chart here</div>
          </div>

          {/* --- shop visited --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="grid gap-1">
              <div>
                <h5 className="font-semibold text-default-900">
                  Total Dikunjungi
                </h5>
                <p className="mt-0.5 text-sm font-medium text-gray-600">
                  Jumlah pengunjung tokomu.
                </p>
              </div>

              <h1 className="text-[32px] font-semibold text-default-900">
                562
              </h1>
            </div>

            <div>chart here</div>
          </div>

          {/* --- product viewed --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="grid gap-1">
              <div>
                <h5 className="font-semibold text-default-900">
                  Produk Dilihat
                </h5>
                <p className="mt-0.5 text-sm font-medium text-gray-600">
                  Banyaknya pengunjung yang melihat produkmu.
                </p>
              </div>

              <h1 className="text-[32px] font-semibold text-default-900">
                2781
              </h1>
            </div>

            <div>chart here</div>
          </div>

          {/* --- best selling product --- */}
          <div className="grid gap-6 rounded-xl bg-white px-12 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <div className="grid gap-0.5">
              <h5 className="font-semibold text-default-900">
                Produk Terlaris
              </h5>
              <p className="mt-0.5 text-sm font-medium text-gray-600">
                Urutan produk terlaris yang banyak dibeli.
              </p>
            </div>

            <Table
              isHeaderSticky
              removeWrapper
              aria-label="table best product selling"
              selectionMode="single"
              sortDescriptor={sortDescriptor}
              onSortChange={setSortDescriptor}
              classNames={{
                base: "max-h-[calc(100vh-100px)] overflow-scroll",
                table: "min-w-[700px]",
              }}
            >
              <TableHeader columns={columns}>
                {(column) => (
                  <TableColumn key={column.uid} allowsSorting={column.sortable}>
                    {column.name}
                  </TableColumn>
                )}
              </TableHeader>

              <TableBody items={sortedItems}>
                {(item) => (
                  <TableRow key={item.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(item, columnKey)}</TableCell>
                    )}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Container>
      </Layout>
    </>
  );
}
