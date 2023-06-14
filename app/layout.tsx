import Sidebar from "@/components/Sidebar";
import "../styles/globals.css";
import "../styles/styles.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Text Generator || Faysal Mridha",
  description: "Created for our team",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head />

      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/* sidebar  */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <Sidebar />
              </div>
              {/* Client Provider - Navigation */}
              <ClientProvider />
              <div className="flex-1 bg-[#343541]"> {children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
