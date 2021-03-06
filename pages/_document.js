import Document, { Html, Head, Main, NextScript } from 'next/document';
import {useRouter} from "next/router";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="zxx">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com/css?display=swap" as="font" crossOrigin/>
                    <link rel="preconnect" href="https://fonts.gstatic.com/css?display=swap" as="font" crossOrigin />
                    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/images/favicon/site.webmanifest"/>
                    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    {/*preload large image on the initial loads*/}
                    <link rel="preload" as="image" href="../images/siere-pos/woman_working.webp" />
                    <meta name="msapplication-TileColor" content="#da532c"/>
                    <meta name="theme-color" content="#ffffff"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
