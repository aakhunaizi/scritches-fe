// Styling

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: #45CB85;
  color: white;
}`;

const modifiers = {
  highlighted: {
    from: new Date(2021, 3, 12),
    to: new Date(2021, 3, 16),
  },
};

const SitterSchedule = () => {
  return (
    <>
      <style>{birthdayStyle}</style>
      <DayPicker modifiers={modifiers} showOutsideDays />
    </>
  );
};

export default SitterSchedule;
