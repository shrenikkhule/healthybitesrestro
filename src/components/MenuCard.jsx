import { useState } from "react";
import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiCheck } from "react-icons/fi";
import { IoLeafOutline } from "react-icons/io5";
import { HiOutlineFire } from "react-icons/hi";
import { RiAwardLine, RiStarSFill } from "react-icons/ri";

export function MenuCard({ item, delay = 0 }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const tagConfig = {
    Bestseller: {
      icon: <HiOutlineFire className="w-3 h-3" />,
      style: "bg-emerald-500 text-white",
    },
    "Chef's Pick": {
      icon: <RiAwardLine className="w-3 h-3" />,
      style: "bg-orange-500 text-white",
    },
    New: {
      icon: null,
      style: "bg-yellow-400 text-yellow-900",
    },
  };

  const tag = item.tag ? tagConfig[item.tag] : null;

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-emerald-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image area */}
      <div className="relative h-44 bg-gradient-to-br from-emerald-50 to-orange-50 overflow-hidden">
        <img
          src=""
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Veg badge */}
        <span className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm text-emerald-600 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm border border-emerald-100">
          <IoLeafOutline className="w-3 h-3" />
          VEG
        </span>

        {/* Tag badge */}
        {tag && (
          <span
            className={`absolute top-3 left-3 flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full shadow-sm ${tag.style}`}
          >
            {tag.icon}
            {item.tag}
          </span>
        )}

        {/* Shimmer overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Name + Price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold text-[15px] text-gray-800 leading-snug flex-1">
            {item.name}
          </h3>
          <span className="font-extrabold text-[16px] text-emerald-500 shrink-0">
            ₹{item.price}
          </span>
        </div>

        {/* Category */}
        <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-400">
          {item.category}
        </p>

        {/* Description */}
        <p className="text-[12px] text-gray-500 leading-relaxed line-clamp-2 flex-1">
          {item.desc}
        </p>

        {/* Rating + CTA */}
        <div className="flex items-center justify-between pt-1 mt-auto">
          <span className="flex items-center gap-1 text-[12px] text-gray-700 font-medium">
            <RiStarSFill className="w-4 h-4 text-yellow-400" />
            {item.rating}
            <span className="text-gray-400 font-normal">({item.reviews})</span>
          </span>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[12px] font-bold transition-all duration-200 shadow-sm active:scale-95
              ${
                added
                  ? "bg-emerald-500 text-white shadow-emerald-200"
                  : "bg-orange-500 hover:bg-orange-600 text-white shadow-orange-200"
              }`}
          >
            {added ? (
              <>
                <FiCheck className="w-3.5 h-3.5" />
                Added!
              </>
            ) : (
              <>
                <FiShoppingCart className="w-3.5 h-3.5" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
