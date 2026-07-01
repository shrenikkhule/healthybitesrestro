import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiX, FiChevronDown } from "react-icons/fi";
import { GiChiliPepper, GiHotMeal } from "react-icons/gi";
import { MenuCard } from "../components/MenuCard";
import { menuItems } from "../data/MenuItem";

/* ── design tokens ──────────────────────────────────────────────────────────
   paper   #FBF7EE   warm ivory page base (NOT white, NOT dark)
   orange  #FF5A1F   tandoor-fire primary
   ember   #C2410C   deep orange, headlines / gradients
   leaf    #6FBE44   fresh-veg green
   basil   #2F6B31   deep green, text accents
   char    #2B211A   warm charcoal ink (body text)
   masala  #FFB100   turmeric yellow, stamps / highlights
──────────────────────────────────────────────────────────────────────────── */

const PAGE_BG = "#FBF7EE";

const CATEGORY_META = {
  soya: { label: "Soya Chaap", emoji: "🍢" },
  paneer: { label: "Paneer Tikka", emoji: "🧀" },
  mix: { label: "Mix Chaap", emoji: "🍱" },
  "healthy bites special": { label: "Healthy Bites Special", emoji: "🫕" },
  roti: { label: "Roti & Add-Ons", emoji: "🫓" },
};

// Reads the description/tag and estimates a 1–3 spice rating.
// This is a genuine read of the data, not a decorative random number.
function getSpiceLevel(item) {
  const d = item.desc.toLowerCase();
  if (d.includes("non spicy") || d.includes("less spicy")) return 1;
  if (d.includes("medium spicy & spicy")) return 3;
  if (d.includes("medium spicy")) return 2;
  if (d.includes("spicy")) return 2;
  return 1;
}
const SPICE_LABEL = { 1: "Mild", 2: "Medium", 3: "Hot" };

function VegMark({ size = 14 }) {
  return (
    <span
      className="inline-flex items-center justify-center border-2 border-green-600 shrink-0"
      style={{ width: size, height: size, borderRadius: 3 }}
      title="Pure Vegetarian"
    >
      <span
        className="rounded-full bg-green-600"
        style={{ width: size * 0.45, height: size * 0.45 }}
      />
    </span>
  );
}

function SpiceMeter({ level }) {
  return (
    <span
      className="flex items-center gap-0.5"
      title={`${SPICE_LABEL[level]} spice`}
    >
      {[1, 2, 3].map((n) => (
        <GiChiliPepper
          key={n}
          size={13}
          className={n <= level ? "text-orange-600" : "text-orange-200"}
        />
      ))}
    </span>
  );
}

const SORTS = [
  { id: "recommended", label: "Recommended" },
  { id: "priceLow", label: "Price: Low to High" },
  { id: "priceHigh", label: "Price: High to Low" },
  { id: "rating", label: "Top Rated" },
];
const SPICE_FILTERS = [
  { id: "all", label: "All" },
  { id: 1, label: "Mild" },
  { id: 2, label: "Medium" },
  { id: 3, label: "Hot" },
];

export function MenuPage() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [spice, setSpice] = useState("all");
  const [sort, setSort] = useState("recommended");

  const categories = useMemo(() => {
    const seen = new Map();
    menuItems.forEach((m) => {
      const key = m.category.toLowerCase();
      if (!seen.has(key))
        seen.set(key, CATEGORY_META[key]?.label || m.category);
    });
    return ["All", ...seen.values()];
  }, []);

  const avgRating = useMemo(
    () =>
      (menuItems.reduce((s, m) => s + m.rating, 0) / menuItems.length).toFixed(
        1,
      ),
    [],
  );

  const filtered = useMemo(() => {
    let list = menuItems.filter((m) => {
      const label =
        CATEGORY_META[m.category.toLowerCase()]?.label || m.category;
      const matchCat = cat === "All" || label === cat;
      const matchSpice = spice === "all" || getSpiceLevel(m) === spice;
      const q = search.toLowerCase();
      const matchSearch =
        m.name.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q);
      return matchCat && matchSpice && matchSearch;
    });
    if (sort === "priceLow") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "priceHigh")
      list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "rating") list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [search, cat, spice, sort]);

  const activeFilters = [
    cat !== "All" && { key: "cat", label: cat, clear: () => setCat("All") },
    spice !== "all" && {
      key: "spice",
      label: `${SPICE_LABEL[spice]} spice`,
      clear: () => setSpice("all"),
    },
    search && {
      key: "search",
      label: `"${search}"`,
      clear: () => setSearch(""),
    },
  ].filter(Boolean);

  return (
    <div style={{ background: PAGE_BG }} className="min-h-screen">
      {/* Google fonts: Fredoka (display), Bebas Neue (ticket/stamp caps), Poppins (body) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Bebas+Neue&family=Poppins:wght@400;500;600;700&display=swap');
        .font-display { font-family: 'Fredoka', sans-serif; }
        .font-stamp { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.08em; }
        .font-body { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* ── HERO ── torn-paper tandoor banner ─────────────────────────────── */}
      <div
        className="relative overflow-hidden font-body"
        style={{
          background: "linear-gradient(135deg,#FF5A1F 0%,#C2410C 100%)",
          clipPath:
            "polygon(0 0,100% 0,100% 90%,97% 100%,94% 88%,91% 100%,88% 88%,85% 100%,82% 88%,79% 100%,76% 88%,73% 100%,70% 88%,67% 100%,64% 88%,61% 100%,58% 88%,55% 100%,52% 88%,49% 100%,46% 88%,43% 100%,40% 88%,37% 100%,34% 88%,31% 100%,28% 88%,25% 100%,22% 88%,19% 100%,16% 88%,13% 100%,10% 88%,7% 100%,4% 88%,0% 100%)",
          paddingBottom: "4.5rem",
        }}
      >
        {/* halftone dot texture */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #fff 1.5px, transparent 1.5px)",
            backgroundSize: "16px 16px",
          }}
        />
        {/* floating chili decorations */}
        <GiChiliPepper
          className="absolute text-white/10 pointer-events-none"
          size={110}
          style={{ top: -10, right: 20, transform: "rotate(18deg)" }}
        />
        <GiChiliPepper
          className="absolute text-white/10 pointer-events-none"
          size={60}
          style={{ bottom: 60, left: "8%", transform: "rotate(-25deg)" }}
        />
        <GiHotMeal
          className="absolute text-white/10 pointer-events-none"
          size={70}
          style={{ top: 30, left: "42%", transform: "rotate(-8deg)" }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-3.5 py-1.5 mb-4">
            <VegMark size={13} />
            <span className="font-stamp text-white text-xs">
              100% Pure Veg Kitchen
            </span>
          </div>

          <h1 className="font-display font-bold text-white text-[2.1rem] leading-[1.05] sm:text-5xl md:text-6xl max-w-xl drop-shadow-sm">
            Fresh Off The Tawa
          </h1>
          <p className="text-white/85 text-sm sm:text-base mt-3 max-w-md">
            Smoky chaap, sizzling tikka &amp; fiery mixes — grilled to order,
            every single time.
          </p>

          {/* live stat strip — real numbers from the menu data */}
          <div className="flex gap-6 sm:gap-10 mt-7">
            {[
              [`${menuItems.length}+`, "Dishes"],
              [`★ ${avgRating}`, "Avg Rating"],
              ["Mild → Hot", "Spice Range"],
            ].map(([val, label]) => (
              <div key={label}>
                <p className="font-display font-bold text-white text-xl sm:text-2xl">
                  {val}
                </p>
                <p className="text-white/70 text-[11px] uppercase tracking-wider font-stamp">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── floating search / filter console, overlapping the torn edge ──── */}
      <div className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl shadow-[0_10px_40px_-8px_rgba(194,65,12,0.25)] border border-orange-100 p-4 sm:p-5 font-body">
          {/* search */}
          <div className="relative mb-4">
            <FiSearch
              className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search chaap, tikka, roti..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-2xl border-2 border-green-600/15 bg-[#FBF7EE] text-sm text-[#2B211A] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400/40 focus:border-orange-400 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600 active:scale-90 transition-all"
              >
                <FiX size={16} />
              </button>
            )}
          </div>

          {/* category pills — skewer style */}
          <div className="flex gap-2 overflow-x-auto pb-1 mb-3 -mx-1 px-1 scrollbar-hide">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs sm:text-[13px] font-semibold border-2 transition-all active:scale-95 whitespace-nowrap ${
                  cat === c
                    ? "text-white border-transparent shadow-md"
                    : "bg-white border-orange-100 text-[#2B211A]/70 hover:border-orange-300"
                }`}
                style={
                  cat === c
                    ? { background: "linear-gradient(135deg,#FF5A1F,#C2410C)" }
                    : undefined
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* spice filter + sort */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-3 border-t border-dashed border-orange-200">
            <div className="flex items-center gap-1.5">
              <span className="font-stamp text-[11px] text-green-700 mr-1">
                SPICE
              </span>
              {SPICE_FILTERS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSpice(s.id)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all active:scale-95 ${
                    spice === s.id
                      ? "bg-green-600 text-white"
                      : "bg-green-50 text-green-700 hover:bg-green-100"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="relative sm:ml-auto w-full sm:w-auto">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full sm:w-auto appearance-none pl-3.5 pr-9 py-2 rounded-lg border-2 border-orange-100 bg-white text-xs font-semibold text-[#2B211A] focus:outline-none focus:border-orange-300 cursor-pointer"
              >
                {SORTS.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
              <FiChevronDown
                className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 pointer-events-none"
                size={14}
              />
            </div>
          </div>

          {/* active filter chips */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-dashed border-orange-200">
              {activeFilters.map((f) => (
                <button
                  key={f.key}
                  onClick={f.clear}
                  className="flex items-center gap-1.5 pl-3 pr-2 py-1 rounded-full bg-orange-50 text-orange-700 text-[11px] font-semibold hover:bg-orange-100 transition-all"
                >
                  {f.label}
                  <FiX size={12} />
                </button>
              ))}
              <button
                onClick={() => {
                  setCat("All");
                  setSpice("all");
                  setSearch("");
                }}
                className="text-[11px] font-semibold text-gray-400 hover:text-orange-600 underline underline-offset-2"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── results ─────────────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 font-body">
        <p className="text-xs sm:text-sm text-[#2B211A]/50 mb-5">
          <span className="font-bold text-[#2B211A]">{filtered.length}</span>{" "}
          item
          {filtered.length !== 1 ? "s" : ""} found
        </p>

        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => {
                const level = getSpiceLevel(item);
                const featured = [
                  "Bestseller",
                  "Chef's Pick",
                  "House Special",
                  "Popular",
                ].includes(item.tag);
                return (
                  <motion.div
                    key={`${item.id}-${item.name}`}
                    layout
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    whileHover={{ y: -4 }}
                    transition={{
                      duration: 0.25,
                      delay: Math.min(i * 0.035, 0.35),
                    }}
                    className="relative"
                  >
                    {featured && (
                      <div
                        className="absolute -top-2.5 -right-2.5 z-10 font-stamp text-[10px] text-white px-2.5 py-1 rounded-full shadow-md rotate-6"
                        style={{
                          background: "linear-gradient(135deg,#FFB100,#FF5A1F)",
                        }}
                      >
                        {item.tag}
                      </div>
                    )}

                    <div className="rounded-3xl bg-white border-2 border-orange-50 shadow-[0_4px_20px_-6px_rgba(43,33,26,0.12)] hover:shadow-[0_10px_30px_-6px_rgba(255,90,31,0.28)] hover:border-orange-200 transition-all duration-300">
                      <MenuCard item={item} delay={i * 50} />

                      {/* ── ticket-stub perforation ── the signature element ── */}
                      <div className="relative mx-4">
                        <span
                          className="absolute -left-5.5 -top-2.25 w-4 h-4 rounded-full"
                          style={{ background: PAGE_BG }}
                        />
                        <span
                          className="absolute -right-5.5 -top-2.25 w-4 h-4 rounded-full"
                          style={{ background: PAGE_BG }}
                        />
                        <div className="border-t-2 border-dashed border-orange-200" />
                      </div>

                      <div className="flex items-center justify-between px-4 py-3 rounded-b-3xl bg-linear-to-r from-orange-50/70 to-green-50/70">
                        <div className="flex items-center gap-2">
                          <VegMark />
                          <SpiceMeter level={level} />
                        </div>
                        <span className="font-stamp text-[11px] text-green-700">
                          {SPICE_LABEL[level].toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center text-center py-20 px-5"
          >
            <GiHotMeal className="text-orange-200 mb-3" size={56} />
            <p className="text-[#2B211A] text-[15px] font-bold font-display">
              Tawa's empty here!
            </p>
            <p className="text-[#2B211A]/50 text-[13px] mt-1">
              Try a different search, category or spice level
            </p>
            <button
              onClick={() => {
                setSearch("");
                setCat("All");
                setSpice("all");
              }}
              className="mt-5 px-5 py-2.5 rounded-full text-white text-xs font-bold shadow-md active:scale-95 transition-all"
              style={{ background: "linear-gradient(135deg,#FF5A1F,#C2410C)" }}
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
