import Color from "color";
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
          width: 0.25rem;
        }
        ::-webkit-scrollbar-track {
          background: ${colorMap["1000"]};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${Color(colorMap["600"]).desaturate(0.7).hex()};
          border-radius: 1rem;
        }
        `}</style>
      <Layout>
        <Component {...pageProps} />
        {/* <ColorMap /> */}
      </Layout>
    </div>
  );
}

export default MyApp;
