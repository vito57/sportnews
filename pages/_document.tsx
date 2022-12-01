import BaseDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends BaseDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansDisplay.0.1.0.css"
          />
          <link
            rel="stylesheet"
            href="https://cdn-app.sberdevices.ru/shared-static/0.0.0/styles/SBSansText.0.1.0.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        {/* <script src="https://unpkg.com/@salutejs/client@stable/umd/assistant.development.min.js"></script> */}
        <script src="https://cdn.jsdelivr.net/npm/spatial-navigation-polyfill@1.3.1/polyfill/spatial-navigation-polyfill.js"></script>
      </Html>
    );
  }
}
