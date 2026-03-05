"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function DropPage() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-black text-white">
{/* LOGO BACK BUTTON */}
<div className="absolute top-6 left-6 z-50">
  <Link href="/">
    <Image
      src="/logo.png"
      alt="IVYAIL Logo"
      width={120}
      height={40}
      className="cursor-pointer hover:opacity-80 hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.8)] transition"
      priority
    />
  </Link>
</div>
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-black to-black" />

        <h1 className="text-7xl md:text-9xl font-extrabold tracking-widest z-10">
          IVYAIL
        </h1>

        <div className="h-[2px] w-40 bg-purple-500 my-6 z-10" />

        <h2 className="text-3xl md:text-4xl text-purple-400 font-semibold z-10">
          DROP 001
        </h2>

        <p className="text-gray-400 mt-2 z-10">
          STREETWEAR MEETS PERFORMANCE
        </p>

        <div className="flex gap-6 mt-8 z-10">
          <button
            onClick={() => setShowInput(true)}
            className="px-8 py-3 bg-purple-600 hover:bg-purple-500 transition shadow-[0_0_25px_rgba(168,85,247,0.6)]"
          >
            NOTIFY ME
          </button>

          <a
            href="#collections"
            className="px-8 py-3 border border-purple-500 hover:bg-purple-500/10 transition"
          >
            EXPLORE
          </a>
        </div>

        {/* EMAIL FORM */}
        {showInput && !submitted && (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-4 z-10"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 bg-black border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-500 transition"
            >
              JOIN
            </button>
          </form>
        )}

        {submitted && (
          <p className="mt-6 text-purple-400 z-10">
            You're on the list.
          </p>
        )}
      </section>

      {/* DROP COLLECTION SECTION */}
      <section
        id="collections"
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* WOMENS */}
          <Link
            href="/drop/women"
            className="group block text-center"
          >
            <h2 className="text-3xl font-semibold text-purple-400 mb-8">
              WOMENS COLLECTION
            </h2>

            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/womens-set.png"
                alt="IVYAIL Womens Set"
                width={1000}
                height={1000}
                className="rounded-xl transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(168,85,247,0.4)]"
              />
            </div>
          </Link>

          {/* MENS */}
          <Link
            href="/drop/men"
            className="group block text-center"
          >
            <h2 className="text-3xl font-semibold text-purple-400 mb-8">
              MENS COLLECTION
            </h2>

            <div className="overflow-hidden rounded-xl">
              <Image
                src="/images/mens-set.png"
                alt="IVYAIL Mens Set"
                width={1000}
                height={1000}
                className="rounded-xl transition duration-500 group-hover:scale-105 group-hover:shadow-[0_0_80px_rgba(168,85,247,0.4)]"
              />
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}