import { Html, Head, Main, NextScript } from "next/document";
import styled from "styled-components";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="128x128" href="/apple-touch-icon.png" />
        <meta name="description" content="Aerospace Engineer, Software and Web Developer" />
        <meta property="og:title" content="Web Developer" />
        <meta name="keywords" content="Aerospace, Engineering, Web Development, Software, Programming, Reactjs, Nextjs, Redux, Nodejs, JavaScript, Moradli, mojtabamoradli" />
        <meta name="author" content="Mojtaba Moradli" />
        <link href="https://mojtabamoradli.ir/" rel="canonical" />
        <meta name="theme-color" content="#D2D2D2" />
        <link href="https://fonts.cdnfonts.com/css/domaine-display-narrow" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body lang="en" dir="ltr">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
