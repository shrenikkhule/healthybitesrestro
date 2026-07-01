import React from "react";
import { restaurantInfo } from "../data/MenuItem";
import { FiMapPin, FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { GiChiliPepper, GiFire } from "react-icons/gi";

const quickLinks = ["Home", "Menu", "About Us", "Contact"];

const socials = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white/75 overflow-hidden">
      {/* flame gradient top border */}
      <div className="h-1 w-full bg-linear-to-r from-orange-500 via-red-600 to-orange-500" />

      {/* subtle glow accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-orange-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-red-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-6">
        {/* newsletter / CTA strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 mb-12">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <GiFire className="text-orange-500 shrink-0" size={26} />
            <p className="text-sm sm:text-base font-semibold text-white">
              Craving something spicy? Order hot &amp; fresh from Dhanvi's now.
            </p>
          </div>
          <a
            href="#menu"
            className="group flex items-center gap-2 bg-linear-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-orange-600/20 transition-all active:scale-95 whitespace-nowrap"
          >
            Order Now
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/healthy.png"
                alt="Dhanvi's logo"
                className="w-22 h-11 object-cover"
              />
              <div>
                <p className="dh-playfair font-extrabold text-lg text-white leading-tight">
                  Dhanvi's
                </p>
                <p className="text-[10px] font-bold tracking-widest text-orange-500">
                  EAT HEALTHY BITES
                </p>
              </div>
            </div>
            <p className="text-sm text-white/45 leading-relaxed max-w-sm mb-5">
              {restaurantInfo.tagline}. Fresh, healthy, and pure vegetarian food
              made with love and fire.
            </p>

            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-linear-to-br hover:from-orange-500 hover:to-red-600 hover:border-transparent transition-all active:scale-90"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <p className="flex items-center gap-2 font-bold text-sm text-white mb-4">
              <GiChiliPepper className="text-orange-500" />
              Quick Links
            </p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-white/45 hover:text-orange-400 hover:pl-1 transition-all inline-block"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="flex items-center gap-2 font-bold text-sm text-white mb-4">
              <GiChiliPepper className="text-orange-500" />
              Contact
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/45">
                <FiMapPin
                  className="mt-0.5 text-orange-500 shrink-0"
                  size={15}
                />
                <span>{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/45">
                <FiPhone className="text-orange-500 shrink-0" size={15} />
                <span>{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/45">
                <FiMail className="text-orange-500 shrink-0" size={15} />
                <span>{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30 text-center sm:text-left">
            © 2024 Dhanvi's Eat Healthy Bites. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Made with <span className="text-orange-500">🔥</span> by Shrenik
          </p>
        </div>
      </div>
    </footer>
  );
}
