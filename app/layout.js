import './globals.css'
import { Inter } from 'next/font/google'
import localFont from "next/font/local";
import Header from './layout/header';
import Footer from './layout/footer';
const inter = Inter({ subsets: ['latin'] })
const myFont = localFont({ src: "../pages/planyourwedding/BonVivant-Regular.otf" });

export const metadata = {
  title: "A F R A H",
  description: 'Best Place for Event Planning',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Header /> */}
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}