import type {Metadata} from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
import './globals.css'
import '../public/css/all.min.css'
import '../public/css/styles.scss'
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'MB Logistics',
    description: 'MB Logistics expert in transportation',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={roboto}>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>

        </body>
        </html>
    )
}
