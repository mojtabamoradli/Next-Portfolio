import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mojtaba Moradli</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
