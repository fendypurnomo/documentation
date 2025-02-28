import { Metadata } from "next";
import { Head } from "nextra/components";
import { GitHubIcon } from "nextra/icons";
import { getPageMap } from "nextra/page-map";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import "nextra-theme-docs/style.css";

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

const navbar = <Navbar
    logo={<b>Naladipa</b>}
    projectLink="https://github.com/fendypurnomo/documentation"
    projectIcon={<GitHubIcon height="24" />} />;

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
                    sidebar={{autoCollapse: true, defaultMenuCollapseLevel: 1}}
                    pageMap={await getPageMap()}
                    docsRepositoryBase="https://github.com/fendypurnomo/documentation"
                    footer={footer}>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
