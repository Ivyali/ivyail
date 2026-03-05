"use client";

import { useState } from "react";

type Product = {
  name: string;
  price: number;
  sizes?: string[];
  colors?: string[];
};

type CartItem = {
  name: string;
  price: number;
  selectedSize?: string;
  selectedColor?: string;
};

const products: Product[] = [
  {
    name: "Ivyail Fuzzy Slides",
    price: 60,
    sizes: ["6", "7", "8", "9", "10", "11"],
  },
  {
    name: "Ivyail Cheetah Slides",
    price: 65,
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Black", "White"],
  },
  {
    name: "Ivyail Breaker Jacket",
    price: 120,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Purple"],
  },
  {
    name: "Ivyail Breaker Pants",
    price: 95,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Purple"],
  },
];

export default function HomePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [email, setEmail] = useState("");

  const addToCart = (item: CartItem) => {
    setCart([...cart, item]);
    setIsCartOpen(true);
  };

  const handleCheckout = async () => {
    if (!email) return alert("Enter email");

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart, email }),
    });

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Checkout failed");
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="text-center py-24">
        <h1 className="text-5xl font-semibold tracking-tight">
          IVYAIL
        </h1>
        <p className="mt-4 text-neutral-500">
          Elevated essentials. Built for movement.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="grid md:grid-cols-2 gap-16 px-8 max-w-6xl mx-auto pb-24">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </section>

      {/* CART DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl p-6 transition-transform duration-300 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="mb-6 text-sm underline"
          onClick={() => setIsCartOpen(false)}
        >
          Close
        </button>

        <h2 className="text-xl font-semibold mb-6">Cart</h2>

        {cart.length === 0 && (
          <p className="text-sm text-neutral-500">
            Your cart is empty
          </p>
        )}

        {cart.map((item, i) => (
          <div key={i} className="mb-4 text-sm">
            <div>{item.name}</div>
            <div className="text-neutral-500">
              {item.selectedColor} {item.selectedSize}
            </div>
            <div>${item.price}</div>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <input
              type="email"
              placeholder="Email for receipt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full px-3 py-2 mb-4"
            />

            <button
              onClick={handleCheckout}
              className="bg-black text-white w-full py-3"
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </main>
  );
}

function ProductCard({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (item: CartItem) => void;
}) {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);

  return (
    <div className="border-b pb-10">
      <h3 className="text-2xl font-medium mb-2">
        {product.name}
      </h3>

      <p className="mb-4 text-neutral-600">${product.price}</p>

      {product.colors && (
        <select
          className="border px-3 py-2 mb-3 w-full"
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {product.colors.map((color) => (
            <option key={color}>{color}</option>
          ))}
        </select>
      )}

      {product.sizes && (
        <select
          className="border px-3 py-2 mb-4 w-full"
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {product.sizes.map((size) => (
            <option key={size}>{size}</option>
          ))}
        </select>
      )}

      <button
        onClick={() =>
          addToCart({
            name: product.name,
            price: product.price,
            selectedSize,
            selectedColor,
          })
        }
        className="bg-black text-white px-6 py-3"
      >
        Add to Cart
      </button>
    </div>
  );
}