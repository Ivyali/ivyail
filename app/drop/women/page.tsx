"use client";

import { useState } from "react";

export default function WomenPage() {
  const [selectedItem, setSelectedItem] = useState("bra");
  const [size, setSize] = useState("");

  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">WOMENS COLLECTION</h1>

      {/* ITEM SELECTOR */}
      <div className="flex gap-6 mb-8">
        <button
          onClick={() => setSelectedItem("bra")}
          className={`px-6 py-3 border ${
            selectedItem === "bra"
              ? "bg-purple-600 border-purple-600"
              : "border-purple-500"
          }`}
        >
          BRA
        </button>

        <button
          onClick={() => setSelectedItem("leggings")}
          className={`px-6 py-3 border ${
            selectedItem === "leggings"
              ? "bg-purple-600 border-purple-600"
              : "border-purple-500"
          }`}
        >
          LEGGINGS
        </button>
      </div>

      {/* SIZE SELECTOR */}
      <div className="mb-8">
        <p className="mb-4">Select Size:</p>
        <div className="flex gap-4">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-2 border ${
                size === s
                  ? "bg-purple-600 border-purple-600"
                  : "border-gray-500"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <button
        disabled={!size}
        className="px-8 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-700"
      >
        ADD TO CART
      </button>
    </main>
  );
}