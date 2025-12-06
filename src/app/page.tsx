"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Utensils, Heart, Users, DollarSign, Coffee } from "lucide-react";

export default function Home() {
  const valueProps = [
    {
      icon: Utensils,
      title: "Comfort Food",
      description: "Homestyle cooking just like grandma used to make",
    },
    {
      icon: Heart,
      title: "Friendly Staff",
      description: "Warm smiles and genuine hospitality every visit",
    },
    {
      icon: Users,
      title: "Family-Friendly",
      description: "A welcoming space for all ages to enjoy",
    },
    {
      icon: Coffee,
      title: "Cozy Ambiance",
      description: "Relax in our warm, vintage diner atmosphere",
    },
    {
      icon: DollarSign,
      title: "Affordable Prices",
      description: "Quality meals that won't break the bank",
    },
  ];

  const featuredDishes = [
    {
      name: "Country Breakfast",
      description: "Two eggs, bacon, hash browns & toast",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
    },
    {
      name: "Classic Burger",
      description: "Half-pound patty with all the fixings",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    },
    {
      name: "Homemade Pie",
      description: "Fresh-baked daily, just like mom's",
      image: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1080&fit=crop"
            alt="Cozy diner interior with warm lighting and vintage decor"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome to Lily&apos;s Diner
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cream)] mb-2 font-medium">
              Your Neighborhood Comfort-Food Spot in Lafayette
            </p>
            <p className="text-lg text-white/80 mb-8">
              Breakfast, lunch &amp; dinner served daily. Home-cooked meals, warm smiles, and a cozy atmosphere since 1987.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-[var(--burnt-orange)] hover:bg-[var(--burgundy)] text-white text-lg px-8 py-6"
              >
                <Link href="/menu">
                  <Utensils className="w-5 h-5 mr-2" />
                  View Menu
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--burgundy)] text-lg px-8 py-6"
              >
                <a href="tel:+17654742345">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[var(--burgundy)] text-lg px-8 py-6"
              >
                <a
                  href="https://www.google.com/maps/place/Lilys+Diner+Inc/@40.367874,-86.8591611,17z/data=!3m1!4b1!4m6!3m5!1s0x88131d7a6299ad97:0x31d12e5c174820e1!8m2!3d40.367874!4d-86.8565862!16s%2Fg%2F11lts3nr__?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="py-16 md:py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--burgundy)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Folks Love Lily&apos;s
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
              For over 35 years, we&apos;ve been serving up more than just great food — we serve memories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="bg-[var(--card)] rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-[var(--border)]"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[var(--burgundy)]/10 flex items-center justify-center">
                  <prop.icon className="w-6 h-6 text-[var(--burgundy)]" />
                </div>
                <h3 className="font-semibold text-[var(--foreground)] mb-2">{prop.title}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[var(--burgundy)] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Fan Favorites
            </h2>
            <p className="text-[var(--muted-foreground)] text-lg">
              A taste of what keeps our regulars coming back
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {featuredDishes.map((dish, index) => (
              <div
                key={index}
                className="bg-[var(--card)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-[var(--border)]"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3
                    className="text-xl font-semibold text-[var(--foreground)] mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {dish.name}
                  </h3>
                  <p className="text-[var(--muted-foreground)]">{dish.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-[var(--burgundy)] hover:bg-[var(--burgundy-dark)] text-white"
            >
              <Link href="/menu">See Full Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action / Visit Us Section */}
      <section className="py-16 md:py-20 bg-[var(--burgundy)] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Visit Us Today!
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re craving a hearty breakfast, a quick lunch, or a cozy dinner with the family, Lily&apos;s Diner is your home away from home.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-[var(--burnt-orange)] hover:bg-white hover:text-[var(--burgundy)] text-white text-lg px-8"
            >
              <Link href="/contact">
                <MapPin className="w-5 h-5 mr-2" />
                Find Us
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-[var(--burnt-orange)] hover:bg-white hover:text-[var(--burgundy)] text-white text-lg px-8"
            >
              <a href="tel:+17654742345">
                <Phone className="w-5 h-5 mr-2" />
                (765) 474-2345
              </a>
            </Button>
          </div>

          <div className="text-white/80">
            <p className="font-medium">Open Daily</p>
            <p>Mon-Fri: 6am-9pm • Sat: 7am-10pm • Sun: 7am-8pm</p>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-16 md:py-20 bg-[var(--muted)]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote>
            <p
              className="text-2xl md:text-3xl text-[var(--foreground)] italic mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              &quot;At Lily&apos;s Diner, we don&apos;t just serve food — we serve a feeling. The feeling of coming home.&quot;
            </p>
            <footer className="text-[var(--muted-foreground)]">
              — Lily Thompson, Founder
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}