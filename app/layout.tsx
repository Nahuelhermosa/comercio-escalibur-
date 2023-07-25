import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
//import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sitio excalibur',
  description: 'trabajo final',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Nav/>
        <div className='contenedor'>
        {children}
        </div>
        <Footer/>
        </body>
    </html>
  )
}
