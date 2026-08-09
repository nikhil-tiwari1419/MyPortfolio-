import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PROFILE } from "@/lib/data";

export const metadata = {
  title: `${PROFILE.name} — Portfolio`,
  description: PROFILE.bio,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0F1116] text-[#E6E8EB] antialiased">
        <Header />
        <main className="pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
