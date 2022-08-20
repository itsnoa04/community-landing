import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  return (
    <div
      style={{
        width: "calc(100vw - 5px)",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Head>
        <title>Next JS Starter Template</title>
      </Head>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
