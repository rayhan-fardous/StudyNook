export const metadata = {
  title: "StudyNook - Add Room",
};

import AddNewRoomForm from "@/components/add-new-room/AddNewRoomForm";
import { FaPlusCircle } from "react-icons/fa";

const AddRoom = () => {
  return (
    <section className="relative overflow-hidden min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-48 w-48 sm:h-64 sm:w-64 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-64 sm:w-64 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-lg">
              <FaPlusCircle className="text-cyan-500 text-4xl sm:text-5xl" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Add a <span className="text-cyan-500">New Room</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed px-2 sm:px-0">
            Share your quiet and productive study space with students around the
            world. You can update or remove your listing anytime.
          </p>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-cyan-500/70" />
        </div>

        <div className="mt-12 sm:mt-16">
          <div className="relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-8">
            <div className="absolute top-0 right-0 h-32 w-32 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              <AddNewRoomForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddRoom;
