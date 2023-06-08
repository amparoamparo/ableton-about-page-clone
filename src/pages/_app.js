import "@/styles/globals.css";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={jost.className}>
      <Component {...pageProps} />
    </main>
  );
}
