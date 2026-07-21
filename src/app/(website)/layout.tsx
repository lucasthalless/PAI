import { Footer } from "@src/components/Footer/Footer";
import Header from "@src/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)  {
  return (
    <main>
      <Header />
        {children}
      <Footer />
    </main>
  );
};
