"use client";

import { useCart } from "@/context/cart";

export default function CartDrawer() {
  const { cart, removeFromCart, open, setOpen } = useCart();

  const total = cart.reduce((sum: number, item: any) => sum + item.price, 0);

  async function checkout() {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        priceId: cart[0]?.priceId,
      }),
    });

    const data = await res.json();
    window.location.href = data.url;
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-96 bg-black border-l border-purple-500 transform ${
        open ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 z-50`}
    >
      <div className="p-6">

        <h2 className="text-2xl font-bold mb-6">CART</h2>

        {cart.length === 0 && (
          <p className="text-gray-400">Your cart is empty</p>
        )}

        {cart.map((item: any, index: number) => (
          <div key={index} className="flex justify-between mb-4">

            <div>
              <p>{item.name}</p>
              <p className="text-sm text-gray-400">{item.size}</p>
            </div>

            <button
              onClick={() => removeFromCart(index)}
              className="text-red-400"
            >
              remove
            </button>

          </div>
        ))}

        <div className="mt-8 border-t border-gray-800 pt-4">

          <p className="mb-4">Total: ${total}</p>

          <button
            onClick={checkout}
            className="w-full py-3 bg-purple-600 hover:bg-purple-500"
          >
            CHECKOUT
          </button>

        </div>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        >
          ✕
        </button>

      </div>
    </div>
  );
}