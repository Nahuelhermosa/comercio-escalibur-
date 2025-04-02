import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./componentes/Nav";
import Footer from "./componentes/Footer";
import { ProductsProvider } from "./context/ProductsContext"; // <-- IMPORTAR EL CONTEXTO

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escalibur",
  description: "trabajo final",
  icons: "icono-estrella.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ProductsProvider> {/* <-- ENVOLVER LA APP CON EL CONTEXTO */}
          <Nav />
          <div className="contenedor">{children}</div>
          <Footer />
        </ProductsProvider>
      </body>
    </html>
  );
}
