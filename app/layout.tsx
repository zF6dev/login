import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import "./layout.css";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { LogoutButton } from "@/components/logout-button";

export const metadata = {
  title: '',
  description: '',
  openGraph: {
    title: '',
    description: '',
    images: [],
  },
  twitter: {
    card: 'summary',
    images: [],
  },
  robots: {
    index: false,
    follow: false,
  },
}


const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/*
          <header className="border-b border-slate-200">
            <div className="mx-auto max-w-5xl h-14 px-6 flex items-center justify-between">
              <Link href="/">Home</Link>
              <div className="ml-auto flex items-center gap-4">
                <ThemeSwitcher />
                <Link
                  href="https://github.com/zF6dev/login"
                  target="_blank"
                  className="absolute right-10 text-slate-1000 hover:underline underline-offset-4"
                >
                  GitHub →
                </Link>
              </div>
            </div>
          </header>
          */}
          <header className="layout-header">
            <div className="header-left">
              <Link href="/">Home</Link>
            </div>
            <div className="header-right">
              <div className="header-themeswitcher">
                <ThemeSwitcher />
              </div>
              <div className="header-github">
                <Link href="https://github.com/zF6dev/login" target="_blank">GitHub →</Link>
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
