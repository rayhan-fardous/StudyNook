import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  IoArrowBack,
  IoLayersOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import EditForm from "./EditForm";
import DeleteBtn from "./DeleteBtn";
import BookNowBtn from "./BookNowBtn";

const RoomDetails = async ({ room }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const {
    _id,
    image,
    name,
    description,
    pricePerHour,
    floor,
    capacity,
    amenities,
    listedDate,
    ownerName,
    ownerImage,
    ownerEmail,
    ownerId,
  } = room;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`);
  const totalBookingsData = await res.json();
  const totalBookings = totalBookingsData.filter(
    (booking) => booking.roomId === _id,
  ).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-14">
      <Link href="/rooms">
        <Button
          variant="ghost"
          className="mb-6 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <IoArrowBack className="text-lg" />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
            <Image
              src={image}
              alt={name}
              width={1000}
              height={700}
              className="w-full h-65 sm:h-105 lg:h-130 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h1>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Listed on {listedDate}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 rounded-full px-4 py-2 bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 text-sm font-semibold whitespace-nowrap">
                <IoCheckmarkCircle />
                {totalBookings} bookings
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
              Description
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 sm:p-6 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-5">
              Amenities
            </h2>

            <div className="flex flex-wrap gap-3">
              {amenities?.map((amenity, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full text-sm font-medium border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-8 space-y-6">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-end justify-between border-b border-gray-200 dark:border-gray-700 pb-5">
              <h2 className="text-4xl sm:text-5xl font-black text-indigo-600 dark:text-indigo-400">
                ${pricePerHour}
              </h2>

              <p className="text-gray-500 dark:text-gray-400 font-medium">
                / hour
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <IoLayersOutline className="text-xl text-indigo-500" />
                <span>{floor} Floor</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <IoPeopleOutline className="text-xl text-indigo-500" />
                <span>Up to {capacity} people</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <IoCalendarOutline className="text-xl text-indigo-500" />
                <span>{totalBookings} total bookings</span>
              </div>
            </div>

            <BookNowBtn room={room} />

            {userId === ownerId && (
              <div className="grid grid-cols-2 gap-4">
                <EditForm room={room} />

                <DeleteBtn room={room} />
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-5 sm:p-6 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5">
              Listed By
            </p>

            <div className="flex items-center gap-4">
              <Image
                src={ownerImage || "https://i.ibb.co/4pDNDk1/avatar.png"}
                alt={ownerName || "User"}
                width={60}
                height={60}
                className="w-14 h-14 rounded-full object-cover border border-gray-200 dark:border-gray-700"
              />

              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-gray-900 dark:text-white truncate">
                  {ownerName || "Anonymous User"}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {ownerEmail || "No email available"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
