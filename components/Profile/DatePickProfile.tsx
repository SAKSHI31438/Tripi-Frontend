"use client";
import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function formatDate(date: Date | undefined) {
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime());
}

type DatePickProps = {
  value?: Date; // <-- added
  onChange?: (date: Date) => void; // <-- added
};

const DatePickProfile: React.FC<DatePickProps> = ({ value, onChange }) => {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [month, setMonth] = React.useState<Date | undefined>(value);
  const [inputValue, setInputValue] = React.useState(formatDate(value));

  React.useEffect(() => {
    setDate(value);
    setMonth(value);
    setInputValue(formatDate(value));
  }, [value]);

  const handleDateSelect = (selected: Date | undefined) => {
    if (!selected) return;

    setDate(selected);
    setInputValue(formatDate(selected));
    onChange?.(selected); // ✅ send selected date back to parent form
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date">Date</Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={inputValue}
          placeholder="June 01, 2025"
          className="pr-10 w-full h-[50px] bg-gray-200 p-2 rounded-lg border-none outline-none pl-2"
          onChange={(e) => {
            const typedDate = new Date(e.target.value);
            setInputValue(e.target.value);
            if (isValidDate(typedDate)) {
              setDate(typedDate);
              setMonth(typedDate);
              onChange?.(typedDate); // ✅ update form when user types date
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={handleDateSelect}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DatePickProfile;
