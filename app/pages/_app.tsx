import type { AppProps } from "next/app";
import Layout from "../components/global/layouts";
import ColorMap from "../components/utils/colorMap";
import "../styles/globals.css";
import { colorMap } from "../templateConfig";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
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
    </div>
  );
}

export default MyApp;
