import { Footer } from "@src/components/Footer/Footer";
import Header from "@src/components/Header/Header";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <main className={`${poppins.className}`}>
      <Header />
        {children}
      <Footer />
    </main>
  );
};
