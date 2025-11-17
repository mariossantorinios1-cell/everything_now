import "./globals.css";
import Header from "@/components/header";


export const metadata = {
  title: "Everything Now",
  description: "The best platform ever"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
