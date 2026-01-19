import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

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
          <header className="border-b border-slate-200">
            <div className="mx-auto max-w-5xl h-14 px-6 flex items-center justify-between">
              <Link href="/">Home</Link>
              <Link
                href="https://github.com/zF6dev/login"
                target="_blank"
                className="absolute right-10 text-slate-1000 hover:underline underline-offset-4"
              >
                GitHub →
              </Link>
              <div className="ml-auto flex items-center gap-4">
                <ThemeSwitcher />
              </div>
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
