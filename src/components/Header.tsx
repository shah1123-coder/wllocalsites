"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--warm-white)] shadow-md border-b border-[var(--border)]">
      {/* Top bar with quick contact info */}
      <div className="hidden md:block bg-[var(--burgundy)] text-[var(--cream)] py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            3401 Fairfield Ct, Lafayette, IN 47909
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" />
            (765) 474-2345
          </span>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span
              className="text-2xl md:text-3xl font-bold text-[var(--burgundy)]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lily&apos;s Diner
            </span>
            <span className="text-xs text-[var(--muted-foreground)] hidden sm:block">
              Comfort Food &amp; Warm Smiles
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--burgundy)] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[var(--burnt-orange)] hover:bg-[var(--burgundy)] text-white"
            >
              <Link href="/menu">View Menu</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--foreground)]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[var(--border)] pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[var(--foreground)] hover:text-[var(--burgundy)] font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Button
                  asChild
                  className="bg-[var(--burnt-orange)] hover:bg-[var(--burgundy)] text-white w-full"
                >
                  <Link href="/menu">View Menu</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--burgundy)] text-[var(--burgundy)] w-full"
                >
                  <a href="tel:+17654742345">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
              </div>
              <div className="mt-3 pt-3 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
                <p className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  3401 Fairfield Ct, Lafayette, IN
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
