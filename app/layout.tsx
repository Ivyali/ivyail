import "./globals.css";

export const metadata = {
  title: "IVYAIL",
  description: "Streetwear meets performance",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}