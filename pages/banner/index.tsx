import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Button,
  Input,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { MagnifyingGlass, PlusCircle, Trash } from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

// dummy data
import { banners } from "@/_dummy/banners";

type BannerType = (typeof banners)[0];

const columns = [
  { name: "ID", uid: "id", sortable: false },
  { name: "Banner", uid: "banner", sortable: false },
  { name: "Dibuat Pada", uid: "created_at", sortable: true },
  { name: "Aksi", uid: "action", sortable: false },
];

export default function BannerPage() {
  const router = useRouter();
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "created_at",
    direction: "descending",
  });

  const sortedItems = React.useMemo(() => {
    return [...banners].sort((a: BannerType, b: BannerType) => {
      const first = a[sortDescriptor.column as keyof BannerType] as number;
      const second = b[sortDescriptor.column as keyof BannerType] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, banners]);

  const renderCell = React.useCallback(
    (banner: BannerType, columnKey: React.Key) => {
      const cellValue = banner[columnKey as keyof BannerType];

      switch (columnKey) {
        case "id":
          return (
            <div className="text-sm font-medium text-gray-600">{banner.id}</div>
          );
        case "banner":
          return (
            <div className="flex items-center gap-4">
              <Image
                src={banner.image}
                alt={banner.alt}
                width={1280}
                height={720}
                priority
                className="aspect-video h-[45px] w-[80px]"
              />
              <p className="text-sm font-medium text-gray-600">{banner.alt}</p>
            </div>
          );
        case "created_at":
          return (
            <div className="text-sm font-medium text-gray-600">
              {banner.created_at}
            </div>
          );
        case "action":
          return (
            <Button
              isIconOnly
              variant="light"
              color="danger"
              size="sm"
              onClick={() => confirm("apakah anda yakin?")}
            >
              <Trash weight="bold" size={20} />
            </Button>
          );

        default:
          return cellValue;
      }
    },
    [],
  );

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
                Total:{" "}
                <span className="font-semibold text-green-600">
                  {banners.length}
                </span>{" "}
                banner
              </p>
            </div>

            <Table
              isHeaderSticky
              removeWrapper
              aria-label="table banner"
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
                {(banner) => (
                  <TableRow key={banner.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(banner, columnKey)}</TableCell>
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
