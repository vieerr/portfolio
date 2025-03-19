import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import "devicon/devicon.min.css";

export const metadata = {
  title: "Olivier Paspuel",
  description: "Olivier Paspuel's portfolioo?o?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
