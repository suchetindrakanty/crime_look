import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import Header from './Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crime Look',
  description: 'Generated by create next app',
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
      <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}