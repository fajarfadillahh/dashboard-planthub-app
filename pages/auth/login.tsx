import React from "react";
import Head from "next/head";
import { Button, Input } from "@nextui-org/react";
import { Lock, User } from "@phosphor-icons/react";

export default function Login() {
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      return (window.location.href = "/");
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Login | Planthub 🪴</title>
      </Head>

      <main className="mx-auto flex h-screen max-w-[1200px] items-center justify-center">
        <div className="container grid gap-8">
          <div className="text-center">
            <h1 className="text-[30px] font-bold text-default-900">
              Halo, Admin Planthub 🪴
            </h1>
            <p className="font-medium text-default-500">
              Silakan login dulu, agar bisa mengatur semuanya.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-[450px] gap-4">
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
      </main>
    </>
  );
}
