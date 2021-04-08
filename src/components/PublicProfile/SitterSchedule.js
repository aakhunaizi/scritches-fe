// Styling
import Loading from "../Loading";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";

const birthdayStyle = `.DayPicker-Day--highlighted {
  background-color: #45CB85;
  color: white;
}`;

const SitterSchedule = ({ sitter }) => {
  if (!sitter) return <Loading />;
  const modifiers = {
    highlighted: sitter.schedule.map((schedule) => new Date(schedule.date)),
  };
  return (
    <>
      <style>{birthdayStyle}</style>
      <DayPicker modifiers={modifiers} showOutsideDays />
    </>
  );
};

export default SitterSchedule;
