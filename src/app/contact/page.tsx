"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("sent");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  const hours = [
    { day: "Monday", time: "6:00 AM - 9:00 PM" },
    { day: "Tuesday", time: "6:00 AM - 9:00 PM" },
    { day: "Wednesday", time: "6:00 AM - 9:00 PM" },
    { day: "Thursday", time: "6:00 AM - 9:00 PM" },
    { day: "Friday", time: "6:00 AM - 9:00 PM" },
    { day: "Saturday", time: "7:00 AM - 10:00 PM" },
    { day: "Sunday", time: "7:00 AM - 8:00 PM" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-48 md:h-64 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1920&h=600&fit=crop"
            alt="Retro diner exterior"
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
            Contact &amp; Location
          </h1>
          <p className="text-lg text-white/90">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Info & Hours */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[var(--burgundy)] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Find Us
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                {/* Address */}
                <div className="flex items-start gap-4 bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[var(--burgundy)] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Address</h3>
                    <p className="text-[var(--muted-foreground)]">
                      3401 Fairfield Ct<br />
                      Lafayette, IN 47909
                    </p>
                    <a
                      href="https://maps.google.com/?q=3401+Fairfield+Ct+Lafayette+IN+47909"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--burnt-orange)] hover:underline text-sm font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[var(--burgundy)] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Phone</h3>
                    <a
                      href="tel:+17654742345"
                      className="text-[var(--burnt-orange)] hover:underline font-medium text-lg"
                    >
                      (765) 474-2345
                    </a>
                    <p className="text-[var(--muted-foreground)] text-sm mt-1">
                      Call for takeout orders or reservations
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 bg-[var(--card)] p-4 rounded-lg border border-[var(--border)] shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-[var(--burgundy)] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Email</h3>
                    <a
                      href="mailto:hello@lilysdiner.com"
                      className="text-[var(--burnt-orange)] hover:underline font-medium"
                    >
                      hello@lilysdiner.com
                    </a>
                    <p className="text-[var(--muted-foreground)] text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[var(--card)] p-6 rounded-lg border border-[var(--border)] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[var(--burgundy)]" />
                  <h3
                    className="text-xl font-semibold text-[var(--foreground)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Hours of Operation
                  </h3>
                </div>
                <ul className="space-y-2">
                  {hours.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-sm border-b border-[var(--border)] pb-2 last:border-0"
                    >
                      <span className="text-[var(--foreground)] font-medium">{item.day}</span>
                      <span className="text-[var(--muted-foreground)]">{item.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[var(--muted-foreground)] italic">
                  * Hours may vary on holidays. Call ahead to confirm.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-bold text-[var(--burgundy)] mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send Us a Message
              </h2>

              {formStatus === "sent" ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 mb-4">
                    Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    variant="outline"
                    className="border-green-500 text-green-700 hover:bg-green-100"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-[var(--foreground)]">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1 bg-[var(--card)] border-[var(--border)]"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-[var(--foreground)]">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="mt-1 bg-[var(--card)] border-[var(--border)]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[var(--foreground)]">
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="mt-1 bg-[var(--card)] border-[var(--border)]"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-[var(--foreground)]">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-1 bg-[var(--card)] border-[var(--border)] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={formStatus === "sending"}
                    className="w-full bg-[var(--burgundy)] hover:bg-[var(--burgundy-dark)] text-white py-6 text-lg"
                  >
                    {formStatus === "sending" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}

              {/* Quick Action Buttons */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--burgundy)] text-[var(--burgundy)] hover:bg-[var(--burgundy)] hover:text-white py-6"
                >
                  <a href="tel:+17654742345">
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Order
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[var(--burnt-orange)] text-[var(--burnt-orange)] hover:bg-[var(--burnt-orange)] hover:text-white py-6"
                >
                  <a
                    href="https://maps.google.com/?q=3401+Fairfield+Ct+Lafayette+IN+47909"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Open in Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h2
            className="text-2xl md:text-3xl font-bold text-[var(--burgundy)] mb-6 text-center"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Location
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg border border-[var(--border)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8!2d-86.88!3d40.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3401+Fairfield+Ct%2C+Lafayette%2C+IN+47909!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lily's Diner Location Map"
              className="w-full"
            />
          </div>
          <p className="text-center mt-4 text-[var(--muted-foreground)]">
            Located in the Fairfield Court shopping area, with plenty of free parking available.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[var(--burgundy)] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready for Some Home Cooking?
          </h2>
          <p className="text-lg text-white/90 mb-6">
            Stop by anytime — breakfast, lunch, or dinner. No reservations needed!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[var(--burnt-orange)] hover:bg-white hover:text-[var(--burgundy)] text-white"
          >
            <Link href="/menu">Browse Our Menu</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
