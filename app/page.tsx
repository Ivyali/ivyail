"use client";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(0);
  const [email, setEmail] = useState("");
  const launchDate = new Date("2026-03-11T09:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      setTimeLeft(launchDate - now);
    }, 1000);
    return () => clearInterval(timer);
  }, [launchDate]);

  const formatTime = () => {
    if (timeLeft <= 0) return "LIVE";
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setEmail("");
      alert("You're on the list.");
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f8f6] text-black font-sans">
      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="text-sm tracking-widest">ivyail.club</div>
        <div className="text-sm tracking-widest">@ivyail.club</div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-5xl md:text-7xl tracking-[0.4em] font-light">
          IVYAIL
        </h1>

        <p className="mt-6 text-lg max-w-xl">
          Rooted in Movement.
        </p>

        <div className="mt-8 text-sm tracking-widest">
          DROP 01 — {formatTime()}
        </div>

        <a
          href="#shop"
          className="mt-10 border border-black px-8 py-3 text-xs tracking-widest hover:bg-black hover:text-white transition"
        >
          SHOP DROP 01
        </a>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-2xl tracking-widest mb-6">JOIN THE DROP</h2>
        <form
          onSubmit={handleNotify}
          className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="border border-black px-4 py-2 w-full"
          />
          <button
            type="submit"
            className="border border-black px-6 py-2 tracking-widest hover:bg-black hover:text-white transition"
          >
            NOTIFY ME
          </button>
        </form>
      </section>

      {/* PRODUCT GRID */}
      <section id="shop" className="px-8 py-20">
        <h2 className="text-center text-2xl tracking-widest mb-12">DROP 01</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Contour Legging", "Sculpt Bra", "Ivy Jacket"].map((product) => (
            <div key={product} className="text-center">
              <div className="bg-gray-200 h-80 w-full mb-4" />
              <h3 className="tracking-widest text-sm">{product}</h3>
              <p className="mt-2 text-sm">$98</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-xs tracking-widest">
        © 2026 IVYAIL — All Rights Reserved
      </footer>
    </main>
  );
}