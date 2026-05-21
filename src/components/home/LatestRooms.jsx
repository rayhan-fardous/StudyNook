import Link from "next/link";
import { Button } from "@heroui/react";
import RoomsCard from "./RoomsCard";

const LatestRooms = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/available-study-rooms`,
    {
      cache: "no-store",
    },
  );

  const rooms = await res.json();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-48 w-48 sm:h-64 sm:w-64 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-64 sm:w-64 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-slate-900 dark:text-white">
              Available <span className="text-cyan-500">Study Rooms</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Explore recently added quiet and productive study spaces curated
              for focused learners.
            </p>
          </div>

          <Link href="/rooms">
            <div className="relative group inline-block">
              <div className="absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <Button
                color="primary"
                radius="full"
                className="relative font-semibold px-6 sm:px-8 py-5 text-sm sm:text-base shadow-lg transition-all duration-300 group-hover:scale-105"
              >
                View All Rooms
              </Button>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {rooms.map((room) => (
            <RoomsCard key={room._id} room={room} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestRooms;
