import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import localFont from "next/font/local";

export const metadata = {
  title: "juzz! Beverages",
  description: "Fresh and Wellness First",
};

const omnes = localFont({
  src: [
    {
      path: "./fonts/omnes-black.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/omnes-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/omnes-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/omnes-regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html className={omnes.className} lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
