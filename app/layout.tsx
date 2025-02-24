import { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { Head } from "nextra/components";

export const metadata: Metadata = {
    applicationName: 'Naladipa Docs',
    keywords: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript'],
    authors: [
        {
            name: 'Fendy Purnomo',
            url: 'https://fendypurnomo.github.io',
        },
    ],
    creator: 'Fendy Purnomo',
    publisher: 'Fendy Purnomo',
    description: 'Web App Docs',
    title: {
        template: '%s | Naladipa Docs',
        default: 'Naladipa Docs',
    },
}

const navbar = (
    <Navbar logo={<b>Naladipa Docs</b>} />
);
const footer = <Footer>MIT {new Date().getFullYear()} © Fendy Purnomo.</Footer>;

export default async function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html
            lang="id"
            dir="ltr"
            suppressHydrationWarning>
            <Head/>
            <body>
                <Layout
                    navbar={navbar}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/fendypurnomo/documentation/tree/main/docs"
                    footer={footer}>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
