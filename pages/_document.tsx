import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="fr">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Laravel PHP & MERN fullstack developer "/>
          <meta name="keywords" content="Developer fullstack PHP /Node js React"/>
        </Head>
        <body className="bg-fixed bg-gradient-to-r from-cyan-900 to-lime-700 dark:from-dark-500 dark:to-dark-700 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html> 
    );
  }
}

export default MyDocument;