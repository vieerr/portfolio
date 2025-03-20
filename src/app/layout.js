import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import "devicon/devicon.min.css";

export const metadata = {
  title: "Olivier Paspuel",
  description: "Olivier Paspuel's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/vier.svg" sizes="" />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
