import '../styles/index.css'
import 'katex/dist/katex.min.css'
import 'prismjs/themes/prism-tomorrow.css'
import Head from "next/head";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* fix huge font awesome icon issue */}
      <Head>
        <style>{dom.css()}</style>
      </Head>
      {/* rest of the app */}
      <Component {...pageProps} />
    </>
  )
}
