import React, { useRef } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { menuItems } from "../../data/MenuItem";
import { MenuCard } from "../../components/MenuCard";
import { Link } from "react-router-dom";

function ScrollRow({ title, items }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="mb-12 relative">
      <div className="flex items-center justify-between mb-4 px-1 sm:px-0">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <Link to={"/menu"}>
          <button className="flex items-center gap-1 text-orange-600 font-semibold text-sm sm:text-base hover:text-orange-700 active:scale-95 transition-all">
            View All
            <FiChevronRight size={18} />
          </button>
        </Link>
      </div>

      {/* desktop nav arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all"
        style={{ marginTop: 14 }}
        aria-label="scroll left"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-9 h-9 rounded-full bg-white shadow-md border border-gray-100 hover:bg-gray-50 active:scale-95 transition-all"
        style={{ marginTop: 14 }}
        aria-label="scroll right"
      >
        <FiChevronRight size={20} />
      </button>

      {/* scroll row */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
      >
        {items.map((item, i) => (
          <div
            key={`${item.id}-${item.name}`}
            className="dh-card flex-none snap-start w-[68%] xs:w-[55%] sm:w-65 md:w-62.5 lg:w-60"
            style={{
              animationDelay: `${i * 80}ms`,
              transition: "transform .25s, box-shadow .25s",
            }}
          >
            <MenuCard item={item} delay={i * 80} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ScrollCards() {
  const byCategory = (cat) =>
    menuItems.filter((i) => i.category.toLowerCase() === cat.toLowerCase());

  const soyaItems = byCategory("soya");
  const paneerItems = byCategory("paneer");
  const mixItems = byCategory("mix");
  const healthyBitesItems = byCategory("Healthy Bites Special");
  const rotiItems = byCategory("roti");

  return (
    <>
      <ScrollRow title="Soya Chaap" items={soyaItems} />
      <ScrollRow title="Paneer Chaap" items={paneerItems} />
      <ScrollRow title="Mix Chaap (Soya + Paneer)" items={mixItems} />
      <ScrollRow title="Healthy Bites Special" items={healthyBitesItems} />
      <ScrollRow title="Rumali Roti & More" items={rotiItems} />
    </>
  );
}

export default ScrollCards;
