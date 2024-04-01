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
import { MagnifyingGlass, Trash } from "@phosphor-icons/react";
import Head from "next/head";
import { useState } from "react";

// components
import PopupCreateCategory from "@/components/popup/popupCreateCategory";
import Container from "@/components/wrapper/container";
import Layout from "@/components/wrapper/layout";

// utils
import { CategoryType } from "@/types/category.type";
import { convertTime } from "@/utils/convert";
import { fetcher } from "@/utils/fetcher";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getServerSession } from "next-auth";
import useSWR from "swr";
import { authOptions } from "../api/auth/[...nextauth]";

const columns = [
  { name: "ID", uid: "id", sortable: false },
  { name: "Nama Kategori", uid: "name", sortable: false },
  { name: "Dibuat Pada", uid: "created_at", sortable: true },
  { name: "Aksi", uid: "action", sortable: false },
];

export default function CategoryPage({
  token,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data, isLoading, mutate } = useSWR(
    {
      url: "/categories",
      method: "GET",
      token,
    },
    fetcher,
    {
      revalidateOnFocus: false,
    },
  );

  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "created_at",
    direction: "descending",
  });

  if (isLoading) {
    return;
  }

  const categories: CategoryType[] = data.data;

  const sortedItems = categories.sort((a: CategoryType, b: CategoryType) => {
    const first = a[sortDescriptor.column as keyof CategoryType];
    const second = b[sortDescriptor.column as keyof CategoryType];
    const cmp = first < second ? -1 : first > second ? 1 : 0;

    return sortDescriptor.direction === "descending" ? -cmp : cmp;
  });

  const renderCell = (category: CategoryType, columnKey: React.Key) => {
    const cellValue = category[columnKey as keyof CategoryType];

    switch (columnKey) {
      case "id":
        return (
          <div className="text-sm font-medium text-gray-600">{category.id}</div>
        );
      case "name":
        return (
          <div className="text-sm font-medium text-gray-600">
            {category.name}
          </div>
        );
      case "created_at":
        return (
          <div className="text-sm font-medium text-gray-600">
            {convertTime(category.created_at)}
          </div>
        );
      case "action":
        return (
          <Button
            isIconOnly
            variant="light"
            color="danger"
            size="sm"
            onClick={() => deleteCategory(category.id)}
          >
            <Trash weight="bold" size={20} />
          </Button>
        );

      default:
        return cellValue;
    }
  };

  async function deleteCategory(id: string) {
    if (!confirm("Apakah anda yakin?")) return;

    try {
      await fetcher({
        url: "/categories/" + id,
        method: "DELETE",
        token,
      });

      mutate();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Head>
        <title>Kategori | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <div className="flex items-end justify-between border-b border-dashed border-gray-200 pb-8">
            <div className="grid gap-1">
              <h2 className="text-[22px] font-bold text-default-900">
                Daftar Kategori 📋
              </h2>
              <p className="font-medium text-default-600">
                Atur daftar kategori di sini.
              </p>
            </div>

            <PopupCreateCategory mutate={mutate} />
          </div>

          <div className="grid gap-4">
            <div className="flex items-end justify-between">
              <Input
                variant="flat"
                color="default"
                labelPlacement="outside"
                placeholder="Cari kategori..."
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
                  {categories.length}
                </span>{" "}
                kategori
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
                {(category) => (
                  <TableRow key={category.id}>
                    {(columnKey) => (
                      <TableCell>{renderCell(category, columnKey)}</TableCell>
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

export const getServerSideProps = (async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions);

  return {
    props: {
      token: session?.user.access_token,
    },
  };
}) satisfies GetServerSideProps<{ token: string | undefined }>;
