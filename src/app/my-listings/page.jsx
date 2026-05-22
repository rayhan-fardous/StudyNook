import Link from "next/link";
import RoomsCard from "@/components/home/RoomsCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";

import { HiPlus } from "react-icons/hi";

import {
  IoAddCircleOutline,
  IoLibraryOutline,
} from "react-icons/io5";

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${userId}`,
    {
      cache: "no-store",
    }
  );

  const myRooms = await res.json();

  return (
    <section className="relative overflow-hidden min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-48 w-48 sm:h-64 sm:w-64 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-64 sm:w-64 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              My{" "}
              <span className="text-cyan-500">
                Listings
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Manage and monitor your{" "}
              <span className="font-semibold text-cyan-500">
                {myRooms.length}
              </span>{" "}
              active study spaces on StudyNook.
            </p>
          </div>

          <Link href="/add-room">
            <div className="relative group inline-block">
              
              <div className="absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <Button
                color="primary"
                radius="full"
                className="relative h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 group-hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <HiPlus className="text-lg group-hover:rotate-90 transition-transform duration-300" />
                  Add Room
                </span>
              </Button>
            </div>
          </Link>
        </div>

        {myRooms.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {myRooms.map((room) => (
              <RoomsCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className="relative overflow-hidden rounded-3xl border border-dashed border-cyan-500/30 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl p-10 sm:p-14 text-center">
            
            <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 flex flex-col items-center">
              
              <div className="flex items-center justify-center h-24 w-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-lg">
                <IoLibraryOutline className="text-5xl text-cyan-500 animate-pulse" />
              </div>

              <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                No Active Listings Found
              </h2>

              <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                You haven&apos;t listed any study rooms on StudyNook yet.
                Share your quiet and productive space with students and
                learners around the world.
              </p>

              <Link href="/add-room" className="mt-8">
                <div className="relative group inline-block">
                  
                  <div className="absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

                  <Button
                    color="primary"
                    radius="full"
                    className="relative h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 group-hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Create Your First Listing
                      <IoAddCircleOutline className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </Link>

              <div className="mt-8 h-1 w-24 rounded-full bg-cyan-500/70" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyListingsPage;