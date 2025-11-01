import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
// @ts-ignore: Allow importing global CSS without type declarations
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";
import Footer from "@/components/Home/Footer/Footer";
import NavbarWrapper from "@/components/Home/Navbar/NavbarWrapper";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import ChatBot from "@/components/Helper/ChatBot";
import { ToastContainer } from "react-toastify";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Tripi - A Travel Website | Sakshi Kadam",
  description: "Travel website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased overflow-x-hidden m-0 p-0 overflow-y-auto overflow-hidden`}
      >
        <div className="overflow-hidden">
          <NavbarWrapper />
          {children}
          <Footer />
          <ChatBot />
          <ScrollToTop />
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
            draggable
            // theme="colored"
          />
        </div>
      </body>
    </html>
  );
}
