"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Users, Clock, Award } from "lucide-react";

export default function AboutPage() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop",
      alt: "Cozy diner interior with warm lighting and vintage booths",
      caption: "Our cozy dining room",
    },
    {
      src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&h=400&fit=crop",
      alt: "Classic diner counter with red stools",
      caption: "The famous counter seats",
    },
    {
      src: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop",
      alt: "Hearty breakfast plate with eggs, bacon, and hash browns",
      caption: "Our Country Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
      alt: "Classic juicy burger with all the fixings",
      caption: "The Classic Lily Burger",
    },
    {
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop",
      alt: "Fresh coffee being poured into a mug",
      caption: "Bottomless coffee refills",
    },
    {
      src: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=600&h=400&fit=crop",
      alt: "Slice of homemade apple pie with ice cream",
      caption: "Homemade pies daily",
    },
  ];

  const milestones = [
    { icon: Clock, value: "1987", label: "Year Established" },
    { icon: Users, value: "500K+", label: "Happy Customers" },
    { icon: Heart, value: "3", label: "Generations of Family" },
    { icon: Award, value: "35+", label: "Years of Service" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&h=600&fit=crop"
            alt="Vintage diner atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-4xl md:text-5xl font-bold text-white mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Story
          </h1>
          <p className="text-lg text-white/90">
            A Lafayette tradition since 1987
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--burgundy)] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Welcome to the Family
              </h2>
              <div className="space-y-4 text-[var(--foreground)]">
                <p>
                  Lily&apos;s Diner began in 1987 when Lily and Harold Thompson opened the doors to their dream — a neighborhood spot where everyone feels like family. What started as a small 12-seat counter has grown into Lafayette&apos;s most beloved comfort-food destination.
                </p>
                <p>
                  Today, three generations of Thompsons continue Lily&apos;s legacy of home-cooked meals and warm hospitality. Every recipe on our menu has been passed down through the family, from Grandma Lily&apos;s famous apple pie to Harold&apos;s secret burger seasoning.
                </p>
                <p>
                  We believe in simple things: quality ingredients, generous portions, and treating every guest like they belong. That&apos;s why so many of our customers have become regulars — and so many regulars have become friends.
                </p>
                <p className="font-medium text-[var(--burgundy)]">
                  At Lily&apos;s, you&apos;re not just a customer. You&apos;re part of our extended family.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-80 md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
                  alt="Warm diner interior showing friendly atmosphere"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[var(--burgundy)] text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-lg">Family-owned</p>
                <p className="text-sm opacity-90">Since 1987</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--burgundy)] flex items-center justify-center">
                  <milestone.icon className="w-6 h-6 text-white" />
                </div>
                <div
                  className="text-3xl md:text-4xl font-bold text-[var(--burgundy)]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {milestone.value}
                </div>
                <div className="text-sm text-[var(--muted-foreground)]">{milestone.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-[var(--burgundy)] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--burnt-orange)]/10 flex items-center justify-center">
                <Heart className="w-8 h-8 text-[var(--burnt-orange)]" />
              </div>
              <h3
                className="text-xl font-semibold text-[var(--foreground)] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Made with Love
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Every dish is prepared with the same care and attention Grandma Lily put into her cooking. No shortcuts, no compromises.
              </p>
            </div>
            <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--burnt-orange)]/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-[var(--burnt-orange)]" />
              </div>
              <h3
                className="text-xl font-semibold text-[var(--foreground)] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Community First
              </h3>
              <p className="text-[var(--muted-foreground)]">
                We&apos;re proud to be part of Lafayette&apos;s fabric. From sponsoring Little League teams to hosting charity breakfasts, we give back.
              </p>
            </div>
            <div className="bg-[var(--card)] p-6 rounded-lg shadow-sm border border-[var(--border)] text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--burnt-orange)]/10 flex items-center justify-center">
                <Award className="w-8 h-8 text-[var(--burnt-orange)]" />
              </div>
              <h3
                className="text-xl font-semibold text-[var(--foreground)] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Quality Always
              </h3>
              <p className="text-[var(--muted-foreground)]">
                We source fresh, local ingredients whenever possible. From our eggs to our produce, quality comes first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 md:py-16 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-[var(--burgundy)] mb-8 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Life at Lily&apos;s
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-md"
              >
                <div className="relative h-48 md:h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-[var(--burgundy)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Be Part of Our Story
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Whether it&apos;s your first visit or your hundredth, there&apos;s always a seat at our table.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[var(--burnt-orange)] hover:bg-white hover:text-[var(--burgundy)] text-white"
            >
              <Link href="/menu">See Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[var(--burgundy)]"
            >
              <Link href="/contact">Visit Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
