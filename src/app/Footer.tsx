import React from "react";

export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer className="${className} p-10 text-center">
      <p>©2024 Lucas Nethercott</p>
    </footer>
  );
}
