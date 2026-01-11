import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Starfield from "./components/shared/Starfield"; // Import the new component
// import Footer from "./components/shared/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white relative">
        <Starfield />
        <Navbar />
        <main className="relative z-10">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
