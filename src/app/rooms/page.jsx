export const metadata = {
  title: 'StudyNook - Rooms',
}

import RoomsCard from "@/components/home/RoomsCard";
import RefineSidebar from "@/components/rooms/RefineSidebar";
import { MdOutlineOtherHouses } from "react-icons/md";

const RoomsPage = async ({ searchParams }) => {
  const getSearchParams = await searchParams;

  const searchInput = getSearchParams?.search || "";
  const amenities = getSearchParams?.amenities || "";
  const minPrice = getSearchParams?.minPrice || "";
  const maxPrice = getSearchParams?.maxPrice || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?search=${searchInput}&amenities=${amenities}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    {
      cache: "no-store",
    },
  );

  const rooms = await res.json();

  return (
    <section className="relative overflow-hidden min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-48 w-48 sm:h-64 sm:w-64 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-64 sm:w-64 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="mb-10 sm:mb-14">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
            Explore <span className="text-cyan-500">Study Rooms</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Discover quiet, productive, and fully equipped study spaces tailored
            to your learning needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="w-full lg:w-[30%] xl:w-[25%]">
            <div className="sticky top-24 rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg p-4 sm:p-6">
              <RefineSidebar />
            </div>
          </div>

          <div className="w-full lg:w-[70%] xl:w-[75%]">
            {rooms.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {rooms.map((room) => (
                  <RoomsCard key={room._id} room={room} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center rounded-3xl border border-dashed border-cyan-500/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl py-16 sm:py-20 px-6 shadow-lg">
                <div className="flex items-center justify-center h-24 w-24 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <MdOutlineOtherHouses className="text-5xl text-cyan-500" />
                </div>

                <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                  No Rooms Found
                </h2>

                <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-gray-300 max-w-xl leading-relaxed">
                  We couldn&apos;t find any study rooms matching your selected
                  filters. Try adjusting the amenities or price range to
                  discover more spaces.
                </p>

                <div className="mt-6 h-1 w-20 rounded-full bg-cyan-500/70" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomsPage;
