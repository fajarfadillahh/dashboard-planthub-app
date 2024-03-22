import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import { Lock, User } from "@phosphor-icons/react";

export default function Home() {
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      return (window.location.href = "/dashboard");
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Selamat datang di Planthub 🪴</title>
      </Head>

      <div className="grid h-screen grid-cols-2">
        <div className="relative h-full overflow-hidden">
          <Image
            src="/assets/img/login-img.png"
            alt="login image"
            width={2000}
            height={3000}
            priority
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute bottom-8 left-8 border-l-4 border-white bg-default-900/40 px-8 py-4 backdrop-blur-sm">
            <h3 className="text-[18px] font-bold text-white">
              “The earth laughs in flowers.”
            </h3>
            <p className="text-[12px] font-medium italic text-gray-300">
              – Ralph Waldo Emerson, “Hamatreya: Earth-Song” (1846)
            </p>
          </div>
        </div>

        <div className="flex h-full flex-col justify-center gap-8 p-8">
          <div className="text-center">
            <h1 className="text-[28px] font-bold text-default-900">
              Halo, Admin Planthub 🪴
            </h1>
            <p className="font-medium text-default-500">
              Silakan login dulu, agar bisa mengatur semuanya.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[400px] gap-4">
            <Input
              isRequired
              type="text"
              variant="flat"
              color="default"
              labelPlacement="outside"
              label="Email"
              placeholder="Masukan email"
              startContent={
                <User weight="bold" size={18} className="text-gray-500" />
              }
            />

            <Input
              isRequired
              type="password"
              variant="flat"
              color="default"
              labelPlacement="outside"
              label="Kata Sandi"
              placeholder="Masukan kata sandi"
              startContent={
                <Lock weight="bold" size={18} className="text-gray-500" />
              }
            />

            <Button
              isLoading={loading}
              onClick={() => handleLogin()}
              className="mt-4 bg-green-600 font-semibold text-white"
            >
              {loading ? "Silakan tunggu..." : "Masuk"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
