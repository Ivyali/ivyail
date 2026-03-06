import "./globals.css";
import { CartProvider } from "@/context/cart";
import CartDrawer from "@/components/CartDrawer";

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

        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>

      </body>
    </html>
  );
}