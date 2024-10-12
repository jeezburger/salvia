import localFont from "next/font/local";
import "./globals.css";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";


export const metadata = {
  title: "Salvia",
  description: "Wearable Expressions"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

      </body>
    </html>
  );
}
