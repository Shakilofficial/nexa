import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DashboardHeader() {
  const [dateRange, setDateRange] = useState<{
    from: Date | undefined;
    to: Date | undefined;
  }>({
    from: undefined,
    to: undefined,
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container mx-auto flex flex-col items-start justify-around space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16 lg:max-w-7xl">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex w-full flex-col space-y-2 sm:w-auto sm:flex-row sm:space-x-2 sm:space-y-0 px-2 md:px-0">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant="outline"
                className="w-full justify-start text-left sm:w-[200px] md:w-[200px]"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "LLL dd, y")} -{" "}
                      {format(dateRange.to, "LLL dd, y")}
                    </>
                  ) : (
                    format(dateRange.from, "LLL dd, y")
                  )
                ) : (
                  <span>Pick a date range</span>
                )}
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={dateRange}
                onSelect={(value) =>
                  setDateRange(
                    value
                      ? { from: value.from, to: value.to ?? undefined }
                      : { from: undefined, to: undefined }
                  )
                }
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
          <Button className="w-full sm:w-auto md:ml-2">Apply Filter</Button>
        </div>
      </div>
    </motion.header>
  );
}
