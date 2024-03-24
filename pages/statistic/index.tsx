import Head from "next/head";

// components
import Layout from "@/components/wrapper/layout";
import Container from "@/components/wrapper/container";

export default function StatisticPage() {
  return (
    <>
      <Head>
        <title>Statistik | Planthub 🪴</title>
      </Head>

      <Layout>
        <Container>statistic page</Container>
      </Layout>
    </>
  );
}
