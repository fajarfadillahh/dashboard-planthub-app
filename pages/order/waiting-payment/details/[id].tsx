import Head from "next/head";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";
import ButtonBack from "@/components/button/buttonBack";
import DetailsOrder from "@/components/detailsOrder";

export default function OrderDetails() {
  return (
    <>
      <Head>
        <title>Detail Pesanan | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container className="gap-8">
          <ButtonBack path="/order/waiting-payment" />

          <div>
            <DetailsOrder />
          </div>
        </Container>
      </Layout>
    </>
  );
}
