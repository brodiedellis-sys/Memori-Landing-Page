import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});

export const metadata: Metadata = {
  title: "Memori",
  description: "Capture who you are, shape who you'll become",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Force scroll to top on page load
              window.addEventListener('load', function() {
                window.scrollTo(0, 0);
                document.documentElement.scrollTop = 0;
                document.body.scrollTop = 0;
              });
              
              // Also do it immediately
              window.scrollTo(0, 0);
              document.documentElement.scrollTop = 0;
              document.body.scrollTop = 0;
            `,
          }}
        />
      </head>
      <body
        className={`${vt323.variable} font-mono antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
