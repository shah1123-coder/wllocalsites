"use client";

import Link from "next/link";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--wood-dark)] text-[var(--cream)]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3
              className="text-2xl font-bold text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Lily&apos;s Diner
            </h3>
            <p className="text-[var(--cream)] opacity-80 text-sm mb-4">
              Comfort Food, Warm Smiles
              <br />
              Lafayette, IN
            </p>
            <p className="text-[var(--cream)] opacity-70 text-sm">
              Family-run since 1987. Serving homestyle cooking and creating memories for over 35 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-[var(--cream)] opacity-80 hover:opacity-100 hover:text-[var(--burnt-orange)] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-[var(--cream)] opacity-80 hover:opacity-100 hover:text-[var(--burnt-orange)] transition-colors text-sm"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[var(--cream)] opacity-80 hover:opacity-100 hover:text-[var(--burnt-orange)] transition-colors text-sm"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[var(--cream)] opacity-80 hover:opacity-100 hover:text-[var(--burnt-orange)] transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--burnt-orange)]" />
                <span className="text-[var(--cream)] opacity-80">
                  3401 Fairfield Ct
                  <br />
                  Lafayette, IN 47909
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0 text-[var(--burnt-orange)]" />
                <a
                  href="tel:+17654742345"
                  className="text-[var(--cream)] opacity-80 hover:opacity-100 hover:text-[var(--burnt-orange)] transition-colors"
                >
                  (765) 474-2345
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[var(--burnt-orange)]" />
              Hours
            </h4>
            <ul className="space-y-1 text-sm text-[var(--cream)] opacity-80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>6am - 9pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>7am - 10pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>7am - 8pm</span>
              </li>
            </ul>
            {/* Social Media */}
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[var(--burgundy)] flex items-center justify-center hover:bg-[var(--burnt-orange)] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[var(--burgundy)] flex items-center justify-center hover:bg-[var(--burnt-orange)] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-[var(--cream)] opacity-60">
            <p>&copy; {new Date().getFullYear()} Lily&apos;s Diner. All rights reserved.</p>
            <p>Your neighborhood diner in Lafayette, IN</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
