import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Everything Now",
  description: "The ultimate social platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <Header />
        <div className="pt-24 px-6">{children}</div>
      </body>
    </html>
  );
}
