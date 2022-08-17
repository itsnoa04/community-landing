import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Next JS Starter Template</title>
      </Head>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
