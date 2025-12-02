//import Link from "next/link";
import { configMetadata } from "@/config/app/metadata.config";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";

export const metadata = configMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body>
        {/*<header>
          Encabezado Global
            <Link href={"/"}> Inicio </Link>
            <Link href={"/module/costumer"}> clientes </Link>
            <Link href={"/module/users"}> usuario </Link>
        </header>*/}
        {children}
        {/*<footer>Pideo de pagina global</footer>*/}
      </body>
    </html>
  );
};