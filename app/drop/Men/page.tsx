"use client";

import { useState } from "react";

export default function MenPage() {
  const [selectedItem, setSelectedItem] = useState("jacket");
  const [size, setSize] = useState("");

  const clothingSizes = ["S", "M", "L", "XL", "XXL"];
  const slideSizes = ["6", "7", "8", "9", "10", "11", "12"];

  const sizes =
    selectedItem === "slides" ? slideSizes : clothingSizes;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">MENS COLLECTION</h1>

      {/* ITEM SELECTOR */}
      <div className="flex gap-6 mb-8 flex-wrap">
        {["jacket", "pants", "slides"].map((item) => (
          <button
            key={item}
            onClick={() => {
              setSelectedItem(item);
              setSize("");
            }}
            className={`px-6 py-3 border capitalize ${
              selectedItem === item
                ? "bg-purple-600 border-purple-600"
                : "border-purple-500"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* SIZE SELECTOR */}
      <div className="mb-8">
        <p className="mb-4">Select Size:</p>
        <div className="flex gap-4 flex-wrap">
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