import CancelBtn from "@/components/my-bookings/CancelBtn";
import { auth } from "@/lib/auth";

import { Chip, Table } from "@heroui/react";

import { headers } from "next/headers";
import Image from "next/image";

import { BsPatchCheck } from "react-icons/bs";

import {
  IoCalendarOutline,
  IoCloseCircleOutline,
  IoTimeOutline,
} from "react-icons/io5";

const MyBookingsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
    cache: "no-store",
  });

  const bookings = await res.json();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

  const myBookings = bookings.filter((booking) => booking.userId === userId);

  return (
    <div className="max-w-7xl mx-auto px-3 py-10 sm:py-16">
      {/* Header */}
      <div className="mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          My Bookings
        </h1>

        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Manage your upcoming and past room reservations.
        </p>
      </div>

      {/* Empty State */}
      {myBookings.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl py-16 px-6 bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl shadow-lg">
          <div className="p-5 rounded-full bg-indigo-100 dark:bg-indigo-500/10 mb-5">
            <IoCalendarOutline className="size-12 text-indigo-600 dark:text-indigo-400" />
          </div>

          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            No Bookings Yet
          </h2>

          <p className="mt-2 max-w-md text-sm sm:text-base text-gray-500 dark:text-gray-400">
            You haven&apos;t booked any study room yet. Explore available rooms
            and reserve your perfect study space.
          </p>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
            <Table>
              <Table.ScrollContainer>
                <Table.Content
                  aria-label="Bookings Table"
                  className="min-w-full"
                >
                  <Table.Header>
                    <Table.Column className="uppercase text-xs">
                      Room
                    </Table.Column>

                    <Table.Column className="uppercase text-xs">
                      Date
                    </Table.Column>

                    <Table.Column className="uppercase text-xs">
                      Time
                    </Table.Column>

                    <Table.Column className="uppercase text-xs">
                      Cost
                    </Table.Column>

                    <Table.Column className="uppercase text-xs">
                      Status
                    </Table.Column>

                    <Table.Column className="uppercase text-xs">
                      Action
                    </Table.Column>
                  </Table.Header>

                  <Table.Body>
                    {myBookings.map((booking) => (
                      <Table.Row key={booking._id}>
                        {/* Room */}
                        <Table.Cell>
                          <div className="flex items-center gap-4">
                            {/* Image */}
                            <div className="relative w-24 h-16 rounded-2xl overflow-hidden bg-linear-to-br from-indigo-500/20 to-violet-500/20 p-0.5 shadow-lg">
                              <Image
                                src={
                                  booking.image?.trim()
                                    ? booking.image
                                    : "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
                                }
                                alt={booking.roomName}
                                width={96}
                                height={64}
                                unoptimized
                                className="w-full h-full rounded-2xl object-cover"
                              />
                            </div>

                            {/* Room Name */}
                            <div>
                              <h2 className="font-semibold text-gray-900 dark:text-white">
                                {booking.roomName}
                              </h2>
                            </div>
                          </div>
                        </Table.Cell>

                        {/* Date */}
                        <Table.Cell className="text-sm text-gray-600 dark:text-gray-300">
                          {booking.date}
                        </Table.Cell>

                        {/* Time */}
                        <Table.Cell className="text-sm text-gray-600 dark:text-gray-300">
                          {booking.startTime} - {booking.endTime}
                        </Table.Cell>

                        {/* Cost */}
                        <Table.Cell className="font-semibold text-indigo-600 dark:text-indigo-400">
                          ${Number(booking.totalCost ?? 0).toFixed(2)}
                        </Table.Cell>

                        {/* Status */}
                        <Table.Cell>
                          {booking.status === "Confirmed" ? (
                            <Chip
                              color="success"
                              className="text-sm font-medium"
                            >
                              <BsPatchCheck />
                              {booking.status}
                            </Chip>
                          ) : (
                            <Chip
                              color="danger"
                              className="text-sm font-medium"
                            >
                              <IoCloseCircleOutline />
                              {booking.status}
                            </Chip>
                          )}
                        </Table.Cell>

                        {/* Action */}
                        <Table.Cell>
                          <CancelBtn booking={booking} />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>

          {/* Mobile + Tablet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
            {myBookings.map((booking) => (
              <div
                key={booking._id}
                className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/30 to-violet-500/20 blur-2xl scale-110" />

                  {/* Image */}
                  <Image
                    src={
                      booking.image ||
                      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                    }
                    alt={booking.roomName}
                    width={500}
                    height={300}
                    className="relative w-full h-52 object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/10" />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {booking.status === "Confirmed" ? (
                      <Chip color="success">
                        <BsPatchCheck />
                        {booking.status}
                      </Chip>
                    ) : (
                      <Chip color="danger">
                        <IoCloseCircleOutline />
                        {booking.status}
                      </Chip>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Title */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      {booking.roomName}
                    </h2>
                  </div>

                  {/* Info */}
                  <div className="space-y-3 text-sm">
                    {/* Date */}
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <IoCalendarOutline className="text-lg text-indigo-600 dark:text-indigo-400" />

                      <span>{booking.date}</span>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <IoTimeOutline className="text-lg text-indigo-600 dark:text-indigo-400" />

                      <span>
                        {booking.startTime} - {booking.endTime}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Total Cost
                      </p>

                      <h3 className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                        ${Number(booking.totalCost ?? 0).toFixed(2)}
                      </h3>
                    </div>

                    <CancelBtn booking={booking} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyBookingsPage;
