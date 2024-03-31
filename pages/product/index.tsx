import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  Button,
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  SortDescriptor,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import {
  CheckCircle,
  DotsThreeVertical,
  MagnifyingGlass,
  NotePencil,
  PlusCircle,
  Trash,
  XCircle,
} from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

// utils
import { formatRupiah } from "@/utils/formatRupiah";

// dummy data
import { products } from "@/_dummy/products";

type ProductType = (typeof products)[0];

const columns = [
  { name: "Nama Produk", uid: "name", sortable: true },
  { name: "Kategori", uid: "category", sortable: false },
  { name: "Stok", uid: "stock", sortable: true },
  { name: "Harga", uid: "price", sortable: true },
  { name: "Diperbarui Pada", uid: "updated_at", sortable: true },
  { name: "Status", uid: "status", sortable: true },
  { name: "Aksi", uid: "action", sortable: false },
];

export default function ProductPage() {
  const router = useRouter();
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "updated_at",
    direction: "descending",
  });

  const sortedItems = [...products].sort((a: ProductType, b: ProductType) => {
    const first = a[sortDescriptor.column as keyof ProductType] as number;
    const second = b[sortDescriptor.column as keyof ProductType] as number;
    const cmp = first < second ? -1 : first > second ? 1 : 0;

    return sortDescriptor.direction === "descending" ? -cmp : cmp;
  });

  const renderCell = (product: ProductType, columnKey: React.Key) => {
    const cellValue = product[columnKey as keyof ProductType];

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
      case "stock":
        return (
          <div className="text-sm font-medium text-gray-600">
            {product.stock}
          </div>
        );
      case "price":
        return (
          <>
            {!product.price_discount ? (
              <p className="text-sm font-medium text-gray-600">
                {formatRupiah(product.price)}
              </p>
            ) : (
              <div className="grid">
                <p className="text-sm font-medium text-gray-600">
                  {formatRupiah(product.price_discount)}
                </p>
                <p className="text-[12px] font-medium text-red-500 line-through">
                  {formatRupiah(product.price)}
                </p>
              </div>
            )}
          </>
        );
      case "updated_at":
        return (
          <div className="text-sm font-medium text-gray-600">
            {product.updated_at}
          </div>
        );
      case "status":
        return (
          <Chip
            variant="flat"
            size="sm"
            color={
              product.status === "dijual"
                ? "success"
                : product.status === "tidak dijual"
                  ? "default"
                  : "danger"
            }
            classNames={{
              content: "capitalize font-semibold",
            }}
          >
            {product.status}
          </Chip>
        );
      case "action":
        return (
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant="light" size="sm">
                <DotsThreeVertical weight="bold" size={20} />
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Static Actions">
              <DropdownItem
                key="edit"
                startContent={<NotePencil weight="bold" size={18} />}
                className="text-sm font-medium text-gray-600"
                onClick={() => router.push(`/product/edit/${product.id}`)}
              >
                Edit produk
              </DropdownItem>
              <DropdownItem
                key="not-sale"
                startContent={
                  product.status === "tidak dijual" ? (
                    <CheckCircle weight="bold" size={18} />
                  ) : (
                    <XCircle weight="bold" size={18} />
                  )
                }
                className="text-sm font-medium text-gray-600"
              >
                {product.status === "tidak dijual"
                  ? "Produk dijual"
                  : "Produk tidak dijual"}
              </DropdownItem>
              <DropdownItem
                key="delete"
                color="danger"
                startContent={<Trash weight="bold" size={18} />}
                className="text-sm font-medium text-danger-500"
                onClick={() => confirm("apakah anda yakin?")}
              >
                Hapus produk
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        );

      default:
        return cellValue;
    }
  };

  return (
    <>
      <Head>
        <title>Produk | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="flex items-end justify-between border-b border-dashed border-gray-200 pb-8">
            <div className="grid gap-1">
              <h2 className="text-[22px] font-bold text-default-900">
                Daftar Produk 📦
              </h2>
              <p className="font-medium text-default-600">
                Atur semua produkmu di sini.
              </p>
            </div>

            <Button
              endContent={<PlusCircle weight="bold" size={18} />}
              onClick={() => router.push("/product/create")}
              className="bg-green-600 font-medium text-white"
            >
              Tambah produk
            </Button>
          </div>

          <div className="grid gap-4">
            <div className="flex items-end justify-between">
              <Input
                variant="flat"
                color="default"
                labelPlacement="outside"
                placeholder="Cari nama barang..."
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
                  {products.length}
                </span>{" "}
                produk
              </p>
            </div>

            <Table
              isHeaderSticky
              removeWrapper
              aria-label="table product"
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
                {(product) => (
                  <TableRow key={product.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(product, columnKey)}</TableCell>
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
