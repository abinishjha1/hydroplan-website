import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ChatWidget } from "@/components/chatbot/ChatWidget";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Hydroplan - Hydropower Consultancy",
  description: "UK & International Hydropower Consultancy including Hydropower Due Diligence, Hydro Scheme Operation and Maintenance, Hydro Feasibility and Hydro Engineering.",
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ClientBody>
          <Navbar />
          {children}
          <Footer />
          <ChatWidget />
        </ClientBody>
      </body>
    </html>
  );
}
