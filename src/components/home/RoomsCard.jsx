import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaLayerGroup,
  FaCalendarCheck,
  FaArrowRight,
} from "react-icons/fa";

const RoomsCard = ({ room }) => {
  const {
    _id,
    image,
    name,
    description,
    pricePerHour,
    floor,
    capacity,
    bookings,
    amenities,
  } = room;

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 transition duration-300" />

      <div className="relative h-56 sm:h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute top-4 right-4">
          <span className="rounded-full bg-cyan-500/90 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-1.5 shadow-lg">
            ${pricePerHour}/hr
          </span>
        </div>
      </div>

      <div className="relative p-5 sm:p-6 flex flex-col">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white line-clamp-1">
          {name}
        </h3>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed line-clamp-2 min-h-12">
          {description}
        </p>

        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
            <FaLayerGroup className="mx-auto text-cyan-500 text-sm sm:text-base" />
            <p className="mt-1 text-[11px] sm:text-xs text-slate-500 dark:text-gray-400">
              Floor
            </p>
            <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
              {floor}
            </h4>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
            <FaUsers className="mx-auto text-cyan-500 text-sm sm:text-base" />
            <p className="mt-1 text-[11px] sm:text-xs text-slate-500 dark:text-gray-400">
              Capacity
            </p>
            <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
              {capacity}
            </h4>
          </div>

          <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 p-3">
            <FaCalendarCheck className="mx-auto text-cyan-500 text-sm sm:text-base" />
            <p className="mt-1 text-[11px] sm:text-xs text-slate-500 dark:text-gray-400">
              Bookings
            </p>
            <h4 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
              {bookings}
            </h4>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {amenities?.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-[11px] sm:text-xs font-medium text-cyan-600 dark:text-cyan-400"
            >
              {amenity}
            </span>
          ))}

          {amenities?.length > 3 && (
            <span className="rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/10 px-3 py-1 text-[11px] sm:text-xs font-medium text-slate-600 dark:text-gray-300">
              +{amenities.length - 3} more
            </span>
          )}
        </div>

        <Link href={`/${_id}`} className="mt-6">
          <div className="relative group/button">
            <div className="absolute -inset-1 rounded-full bg-cyan-500/30 blur-lg opacity-0 group-hover/button:opacity-100 transition duration-300"></div>

            <Button
              color="primary"
              radius="full"
              className="relative w-full py-6 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 group-hover/button:scale-[1.02]"
            >
              <span className="flex items-center gap-2">
                View Details
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover/button:translate-x-1" />
              </span>
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RoomsCard;
