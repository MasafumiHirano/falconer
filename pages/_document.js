import Document, { Html, Head, Main, NextScript } from 'next/document';
import { existsGaId, GA_ID } from '../lib/gtag'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          {/* Google Font */}
          <link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500&display=swap" rel="stylesheet"/>
          {/* Google Analytics */}
          {existsGaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
          {/* Clarity */}
          <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(c, l, a, r, i, t, y) {
                  c[a] = c[a] || function() {
                      (c[a].q = c[a].q || []).push(arguments)
                  };
                  t = l.createElement(r);
                  t.async = 1;
                  t.src = "https://www.clarity.ms/tag/" + i;
                  y = l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t, y);
              })(window, document, "clarity", "script", "fuepgdo8u5");`,
              }}
          />
          <meta name="facebook-domain-verification" content="tlibijea3cvjmadvreulk7rwlab42d" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default MyDocument