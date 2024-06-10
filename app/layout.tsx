import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/mycomponents/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/mycomponents/theme-provider";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
            variables: {
              colorText: '#fff',
              colorPrimary: '#0E78F9',
              colorBackground:'#1c1f2e',
              colorInputBackground: "#252a41",
              colorInputText:'#fff'
            },
            baseTheme: [dark],
        }}
      >

        <body className='min-h-screen flex flex-col'>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >  
              {/* Toaster */}

              {/* Header */}
              <header className="border-b sticky">
                <Header/>
              </header>
              
              
              <div className=" flex-1 w-full">
                <main>
                  {children}
                </main>
              </div>
            </ThemeProvider>
          </body>
      </ClerkProvider>
    </html>
  );
}
