import "./globals.css";
import SideNav from "./ui/sidenav";
import {inter} from '@/app/ui/fonts'

export const metadata = {
  title: "Priya Dubey | Lead Software Engineer",
  description:
    "Lead Software Engineer specializing in React, Node.js, Next.js, and Cloud Architecture."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}