// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-8">
      <div className="container mx-auto px-4 py-6 text-center">
        © {new Date().getFullYear()} HomeHero. All rights reserved.
      </div>
    </footer>
  );
}
