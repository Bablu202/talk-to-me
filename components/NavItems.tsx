"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navs = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navs.map(({ label, href }) => (
        <Link
          className={cn(pathname === href && "text-primary font-semibold")}
          href={href}
          key={href}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
