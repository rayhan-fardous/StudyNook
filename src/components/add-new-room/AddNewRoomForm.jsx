"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { IoRefreshOutline, IoRocketOutline } from "react-icons/io5";

import {
  FiHome,
  FiImage,
  FiLayers,
  FiUsers,
  FiDollarSign,
} from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddNewRoomForm = () => {
  const { data } = authClient.useSession();

  const router = useRouter();

  const userId = data?.user?.id;
  const userName = data?.user?.name;
  const userImage = data?.user?.image;
  const userEmail = data?.user?.email;
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const selectedAmenities = formData.getAll("amenities");

    const restData = Object.fromEntries(formData.entries());

    const finalRoomData = {
      name: restData.name,
      description: restData.description,
      image: restData.image,
      floor: Number(restData.floor),
      capacity: Number(restData.capacity),
      pricePerHour: Number(restData.pricePerHour),
      bookings: Number(restData.bookings),
      amenities: selectedAmenities,
      ownerId: userId,
      ownerName: userName,
      ownerImage: userImage,
      ownerEmail: userEmail,
      listedDate: formattedDate,
    };

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalRoomData),
      });

      const data = await res.json();

      if (data.insertedId) {
      toast.success("Room created successfully!", {
        position: "top-center",
      });
      router.push("/my-listings");
    } else{
      toast.error("Failed to create room!", {
        position: "top-center",
      });
    }
  };

  const amenitiesList = [
    "Whiteboard",
    "Projector",
    "Wi-Fi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  return (
    <>
      <Form onSubmit={onSubmit} className="w-full">
        <Fieldset className="w-full">
          <FieldGroup className="space-y-8">
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 5) {
                  return "Name must be at least 5 characters";
                }

                return null;
              }}
            >
              <Label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                <FiHome className="text-cyan-500" />
                Room Name
              </Label>

              <Input
                placeholder="Enter your room name"
                className="h-14 rounded-2xl"
              />

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="description"
              validate={(value) => {
                if (value.length < 30) {
                  return "Description must be at least 30 characters";
                }

                return null;
              }}
            >
              <Label className="mb-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                Description
              </Label>

              <TextArea
                placeholder="Describe your study room..."
                className="min-h-35 rounded-2xl"
              />

              <Description className="text-xs text-slate-500 dark:text-gray-400">
                Minimum 30 characters
              </Description>

              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="image"
              validate={(value) => {
                if (!value) return "Image URL is required";

                const isImage = /\.(jpeg|jpg|gif|png|webp)$/i.test(value);

                if (!isImage) {
                  return "Please enter a valid image URL";
                }

                return null;
              }}
            >
              <Label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                <FiImage className="text-cyan-500" />
                Image URL
              </Label>

              <Input
                type="url"
                placeholder="https://example.com/room.jpg"
                className="h-14 rounded-2xl"
              />

              <FieldError />
            </TextField>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <TextField isRequired name="floor">
                <Label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                  <FiLayers className="text-cyan-500" />
                  Floor
                </Label>

                <Input
                  type="number"
                  placeholder="Floor Number"
                  className="h-14 rounded-2xl"
                />

                <FieldError />
              </TextField>

              <TextField isRequired name="capacity">
                <Label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                  <FiUsers className="text-cyan-500" />
                  Capacity
                </Label>

                <Input
                  type="number"
                  placeholder="Room Capacity"
                  className="h-14 rounded-2xl"
                />

                <FieldError />
              </TextField>

              <TextField isRequired name="pricePerHour">
                <Label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                  <FiDollarSign className="text-cyan-500" />
                  Hourly Rate
                </Label>

                <Input
                  type="number"
                  placeholder="Price Per Hour"
                  className="h-14 rounded-2xl"
                />

                <FieldError />
              </TextField>

              <TextField isRequired name="bookings">
                <Label className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-gray-200">
                  <FiUsers className="text-cyan-500" />
                  Total Bookings
                </Label>

                <Input
                  type="number"
                  placeholder="Total bookings"
                  className="h-14 rounded-2xl"
                />

                <FieldError />
              </TextField>
            </div>

            <div>
              <h2 className="mb-4 text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Amenities
              </h2>

              <CheckboxGroup
                name="amenities"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {amenitiesList.map((item, index) => (
                  <Checkbox key={index} value={item}>
                    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300">
                      <Checkbox.Control className="rounded-full border border-slate-300 dark:border-white/20 p-2">
                        <Checkbox.Indicator />
                      </Checkbox.Control>

                      <Checkbox.Content>
                        <Label className="cursor-pointer text-sm font-medium text-slate-700 dark:text-gray-200">
                          {item}
                        </Label>
                      </Checkbox.Content>
                    </div>
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
          </FieldGroup>

          <Fieldset.Actions className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <Button
                type="submit"
                color="primary"
                radius="full"
                className="relative h-14 px-8 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 group-hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Publish Room
                  <IoRocketOutline className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
                </span>
              </Button>
            </div>

            <Button
              type="reset"
              radius="full"
              variant="bordered"
              className="h-14 px-8 border-slate-300 dark:border-white/10 hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <IoRefreshOutline className="text-lg group-hover:rotate-180 transition-transform duration-500" />
                Reset
              </span>
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>

      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </>
  );
};

export default AddNewRoomForm;
