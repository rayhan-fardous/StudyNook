"use client";

import { Spinner } from "@heroui/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <Spinner
        size="lg"
        color="primary"
        label="Loading..."
        classNames={{
          label: "text-cyan-500 mt-4 text-sm font-medium",
        }}
      />
    </div>
  );
}