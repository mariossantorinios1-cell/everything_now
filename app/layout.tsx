import "./globals.css";

export const metadata = {
  title: "Everything Now",
  description: "The ultimate social platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  );
}
