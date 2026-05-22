"use client";

import {
  Label,
  SearchField,
  Checkbox,
  CheckboxGroup,
  Input,
  Button,
} from "@heroui/react";

import { useRouter, useSearchParams } from "next/navigation";
import { FiSearch, FiRefreshCw, FiFilter, FiDollarSign } from "react-icons/fi";

const RefineSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("search") || "";

  const selectedAmenities = searchParams.get("amenities")
    ? searchParams.get("amenities").split(",")
    : [];

  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const handleFilterChange = (
    updatedSearch,
    updatedAmenities,
    updatedMin,
    updatedMax,
  ) => {
    const params = new URLSearchParams();

    if (updatedSearch) params.set("search", updatedSearch);

    if (updatedAmenities?.length > 0) {
      params.set("amenities", updatedAmenities.join(","));
    }

    if (updatedMin) params.set("minPrice", updatedMin);

    if (updatedMax) params.set("maxPrice", updatedMax);

    router.push(`/rooms?${params.toString()}`, {
      scroll: false,
    });
  };

  const searchInput = (e) => {
    handleFilterChange(e.target.value, selectedAmenities, minPrice, maxPrice);
  };

  const handleAmenitiesChange = (values) => {
    handleFilterChange(searchValue, values, minPrice, maxPrice);
  };

  const handleMinPriceChange = (e) => {
    handleFilterChange(
      searchValue,
      selectedAmenities,
      e.target.value,
      maxPrice,
    );
  };

  const handleMaxPriceChange = (e) => {
    handleFilterChange(
      searchValue,
      selectedAmenities,
      minPrice,
      e.target.value,
    );
  };

  const handleReset = () => {
    router.push("/rooms", { scroll: false });
  };

  const AMENITIES_OPTIONS = [
    "Wi-Fi",
    "Whiteboard",
    "Projector",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-xl p-5 sm:p-6 lg:p-7">
      <div className="absolute top-0 right-0 h-32 w-32 bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <FiFilter className="text-cyan-500 text-xl" />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Refine Search
            </h2>
          </div>
        </div>

        <Button
          size="sm"
          variant="light"
          onClick={handleReset}
          className="text-red-500 hover:text-red-600 font-medium"
        >
          <span className="flex items-center gap-2">
            <FiRefreshCw />
            Reset
          </span>
        </Button>
      </div>

      <div className="my-6 h-px bg-linear-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />

      <div>
        <Label className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
          <FiSearch />
          Search By Name
        </Label>

        <SearchField name="search">
          <SearchField.Group className="h-12 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900">
            <SearchField.SearchIcon />

            <SearchField.Input
              value={searchValue}
              onChange={searchInput}
              placeholder="Search study room..."
              className="text-sm"
            />

            <SearchField.ClearButton
              onClick={() =>
                handleFilterChange("", selectedAmenities, minPrice, maxPrice)
              }
            />
          </SearchField.Group>
        </SearchField>
      </div>

      <div className="mt-8">
        <Label className="mb-4 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
          Amenities
        </Label>

        <CheckboxGroup
          value={selectedAmenities}
          onChange={handleAmenitiesChange}
          className="space-y-3"
        >
          {AMENITIES_OPTIONS.map((option, ind) => (
            <Checkbox key={ind} value={option} className="group">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-4 py-3 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5">
                <Checkbox.Control className="rounded-full border border-slate-300 dark:border-white/20 p-2">
                  <Checkbox.Indicator />
                </Checkbox.Control>

                <Checkbox.Content>
                  <Label className="cursor-pointer text-sm font-medium text-slate-700 dark:text-gray-200">
                    {option}
                  </Label>
                </Checkbox.Content>
              </div>
            </Checkbox>
          ))}
        </CheckboxGroup>
      </div>

      <div className="mt-8">
        <Label className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400">
          <FiDollarSign />
          Hourly Rate
        </Label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            min={0}
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="rounded-2xl"
          />

          <Input
            min={0}
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="rounded-2xl"
          />
        </div>
      </div>

      <div className="mt-8 h-1 w-20 rounded-full bg-cyan-500/70" />
    </div>
  );
};

export default RefineSidebar;
