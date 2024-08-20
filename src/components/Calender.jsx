import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}
