import "./globals.css";

export const metadata = {
  title: "C - Tube",
  description: "An Advanced YouTube which offers vast variety of features.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
