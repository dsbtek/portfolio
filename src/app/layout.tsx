import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers } from './providers';

config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Muhammad Salihu - Tech Portfolio',
    description: 'Data Engineering, Software Engineering, and AI/ML Solutions',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} theme-transition`}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
