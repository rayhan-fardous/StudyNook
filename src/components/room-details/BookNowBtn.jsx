"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";

import {
  Button,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  IoCalendarOutline,
  IoTimeOutline,
  IoCashOutline,
} from "react-icons/io5";

import { toast } from "react-toastify";

const BookNowBtn = ({ room }) => {
  const router = useRouter();

  const { name, pricePerHour, _id, image } = room;

  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const [date, setDate] = useState(getTodayDate());

  const [startTime, setStartTime] = useState("09:00");

  const [endTime, setEndTime] = useState("10:00");

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const calculateTotal = () => {
    const startHour = parseInt(startTime.split(":")[0]);

    const endHour = parseInt(endTime.split(":")[0]);

    const duration = endHour - startHour;

    return duration > 0 ? duration * pricePerHour : 0;
  };

  const dateObj = new Date(date);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const userId = session?.user?.id;
  const userName = session?.user?.name;
  const userImage = session?.user?.image;
  const userEmail = session?.user?.email;

  const onSubmit = async (e) => {
    e.preventDefault();

    if (calculateTotal() <= 0) {
      toast.error("End time must be later than start time");

      return;
    }

    const formData = new FormData(e.target);

    const restData = Object.fromEntries(formData.entries());
    const startHour = Number(startTime.split(":")[0]);
    const endHour = Number(endTime.split(":")[0]);

    const bookingData = {
      roomId: _id,
      roomName: name,
      date: formattedDate,
      startTime: startHour,
      endTime: endHour,
      userId: userId,
      userName: userName,
      userImage: userImage,
      userEmail: userEmail,
      notes: restData.notes,
      totalCost: calculateTotal(),
      status: "Confirmed",
      image: image,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Room booked successfully!", {
        position: "top-center",
      });
      router.refresh("/my-bookings");
    }
    if (!res.ok) {
      toast.error(
        "This time slot is already booked. Please choose another time.",
        {
          position: "top-center",
        },
      );
    }
  };

  return (
    <div>
      <Modal>
        <Button className="w-full h-12 rounded-xl bg-linear-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold shadow-lg shadow-indigo-600/20 transition-all duration-300">
          <IoCalendarOutline className="text-lg" />
          Book Now
        </Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="w-full sm:max-w-lg rounded-3xl">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <Envelope className="size-5" />
                </Modal.Icon>

                <div>
                  <Modal.Heading className="text-xl font-bold">
                    Book{" "}
                    <span className="text-indigo-600 dark:text-indigo-400">
                      {name}
                    </span>
                  </Modal.Heading>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Choose a date and time slot for your study session.
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="p-4 sm:p-6">
                <Surface
                  variant="default"
                  className="rounded-2xl border border-gray-200 dark:border-gray-700"
                >
                  <form onSubmit={onSubmit} className="space-y-5">
                    <TextField className="w-full">
                      <Label className="mb-2">Booking Date</Label>

                      <input
                        type="date"
                        value={date}
                        min={getTodayDate()}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </TextField>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <TextField className="w-full">
                        <Label className="mb-2">Start Time</Label>

                        <div className="relative">
                          <IoTimeOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                          <select
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </TextField>

                      <TextField className="w-full">
                        <Label className="mb-2">End Time</Label>

                        <div className="relative">
                          <IoTimeOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                          <select
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                            className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500"
                          >
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </TextField>
                    </div>

                    <TextField className="w-full" name="notes">
                      <Label className="mb-2">Special Notes (Optional)</Label>

                      <TextArea
                        placeholder="Any special requests or notes..."
                        className="min-h-28"
                      />
                    </TextField>

                    <div className="flex items-center justify-between rounded-2xl border border-indigo-100 dark:border-indigo-500/10 bg-indigo-50 dark:bg-indigo-500/5 p-5">
                      <div className="flex items-center gap-3">
                        <IoCashOutline className="text-2xl text-indigo-600 dark:text-indigo-400" />

                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Total Cost
                          </p>

                          <h3 className="text-lg font-semibold">
                            {startTime} - {endTime}
                          </h3>
                        </div>
                      </div>

                      <h1 className="text-3xl font-black text-indigo-600 dark:text-indigo-400">
                        ${calculateTotal()}
                      </h1>
                    </div>

                    <Modal.Footer className="pt-2">
                      <div className="flex flex-col sm:flex-row gap-3 w-full">
                        <Button
                          slot="close"
                          variant="danger-soft"
                          className="w-full sm:w-auto rounded-xl h-12"
                        >
                          Cancel
                        </Button>

                        <Button
                          type="submit"
                          slot="close"
                          className="w-full sm:w-auto h-12 rounded-xl bg-linear-to-r from-indigo-600 to-violet-500 hover:from-indigo-500 hover:to-pink-500 text-white font-semibold shadow-lg shadow-indigo-600/20"
                        >
                          <IoCalendarOutline className="text-lg" />
                          Confirm Booking
                        </Button>
                      </div>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default BookNowBtn;
