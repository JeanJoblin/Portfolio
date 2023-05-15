import './globals.css'
import { Inter } from 'next/font/google'
import Header from './header'
import Navbar from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nicholas Parish',
  description: 'My portfolio page',
}

export default function Layout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
