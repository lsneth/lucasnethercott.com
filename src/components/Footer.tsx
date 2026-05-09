import React from "react";

export default function Footer({ className = "" }: { className?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${className} p-10 text-center`}>
      <p>©{currentYear} Lucas Nethercott</p>
    </footer>
  );
}
