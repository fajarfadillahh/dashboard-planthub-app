import React from "react";
import Head from "next/head";
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
import { Eye, MagnifyingGlass } from "@phosphor-icons/react";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

// utils
import { formatRupiah } from "@/utils/formatRupiah";

// dummy data
import { orders } from "@/_dummy/orders";

type OrderTableType = (typeof orders)[0];

const columns = [
  { name: "ID Pemesanan", uid: "id", sortable: false },
  { name: "Pesanan Dari", uid: "order_from", sortable: true },
  { name: "Waktu Pemesanan", uid: "order_time", sortable: true },
  { name: "Total Bayar", uid: "total_payment", sortable: true },
  { name: "Aksi", uid: "action", sortable: false },
];

export default function PaymentFailedPage() {
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "order_time",
    direction: "descending",
  });

  const sortedItems = [...orders].sort(
    (a: OrderTableType, b: OrderTableType) => {
      const first = a[sortDescriptor.column as keyof OrderTableType] as number;
      const second = b[sortDescriptor.column as keyof OrderTableType] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    },
  );

  const renderCell = (order: OrderTableType, columnKey: React.Key) => {
    const cellValue = order[columnKey as keyof OrderTableType];

    switch (columnKey) {
      case "id":
        return (
          <div className="text-sm font-medium text-gray-600">{order.id}</div>
        );
      case "order_from":
        return (
          <div className="text-sm font-medium text-gray-600">
            {order.order_from}
          </div>
        );
      case "order_time":
        return (
          <div className="text-sm font-medium text-gray-600">
            {order.order_time}
          </div>
        );
      case "total_payment":
        return (
          <div className="text-sm font-medium text-gray-600">
            Rp{formatRupiah(order.total_payment)}
          </div>
        );
      case "action":
        return (
          <Button
            variant="light"
            color="success"
            startContent={<Eye weight="bold" size={16} />}
            className="font-medium"
          >
            Detail
          </Button>
        );

      default:
        return cellValue;
    }
  };

  return (
    <>
      <Head>
        <title>Pesanan Gagal Dibayar | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="grid gap-1 border-b border-dashed border-gray-200 pb-8">
            <h2 className="text-[22px] font-bold text-default-900">
              Pesanan Gagal Dibayar ❌
            </h2>
            <p className="font-medium text-default-600">
              Semua pesanan yang gagal dibayar akan muncul di sini.
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
                Total:{" "}
                <span className="font-semibold text-green-600">
                  {orders.length}
                </span>{" "}
                pesanan
              </p>
            </div>

            <Table
              isHeaderSticky
              removeWrapper
              aria-label="table category"
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
                {(order) => (
                  <TableRow key={order.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(order, columnKey)}</TableCell>
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
