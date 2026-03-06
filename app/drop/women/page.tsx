"use client";

import { useCart } from "@/context/cart";

export default function WomensPage() {
  const { addToCart, inventory } = useCart();

  return (
    <div className="p-10">

      <h1 className="text-4xl mb-10">Womens Collection</h1>

      {/* BRA PRODUCT */}
      <div className="mb-12">

        <h2 className="text-2xl">IVYAIL Sports Bra</h2>

        {/* INVENTORY DISPLAY */}
        <p className="text-gray-400">
          {inventory.bra} left
        </p>

        <button
          onClick={() =>
            addToCart({
              id: "bra",
              name: "IVYAIL Sports Bra",
              price: 65,
              size: "M",
            })
          }
          className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-500"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}