import type { AppProps } from "next/app";
import ColorMap from "../components/colorMap";
import Layout from "../components/layouts";
import "../styles/globals.css";
import { colorMap } from "../templateConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style>{`
        ::-webkit-scrollbar {
          width: 0.5rem;
        }
        ::-webkit-scrollbar-track {
          background: ${colorMap["1000"]};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colorMap["50"]};
          border-radius: 1rem;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
        <ColorMap />
      </Layout>
    </>
  );
}

export default MyApp;
