import { Noto_Serif } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";
import BackgroundAudio from "./utils/backgroundAudio";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio | Full-Stack, Mobile & Backend Developer",
  description:
    "Ahmet Başboğaoğlu'nun yazılım portfolyo sitesi. React, React Native, Next.js, Node.js ve Express.js teknolojileriyle geliştirilen modern web ve mobil projeleri keşfedin.",
  keywords: [
    "Ahmet Başboğaoğlu",
    "Full-Stack Developer",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Express.js",
    "Frontend",
    "Backend",
    "Mobile Developer",
    "Web Developer",
    "Yazılım Geliştirici",
    "Portfolio",
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${notoSerif.variable} antialiased`}>
        <div
          className="bg-gray-200
 overflow-y-hidden flex text-white min-h-screen"
        >
          <BackgroundAudio />
          <Sidebar />
          <main className="px-10 py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
