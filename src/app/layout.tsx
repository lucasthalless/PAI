import { Poppins } from '@next/font/google';
import { Footer } from '@src/components/Footer/Footer';
import Header from '@src/components/Header/Header';
import type { Metadata } from "next";
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--poppins',
});

export const metadata: Metadata = {
  title: "PAI ⎯ Porto Artificial Intelligence",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );

}