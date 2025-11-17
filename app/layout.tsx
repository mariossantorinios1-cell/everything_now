export const metadata = {
  title: "Everything Now",
  description: "The ultimate social platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
