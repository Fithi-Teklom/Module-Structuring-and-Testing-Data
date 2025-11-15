// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
function formatAs12HourClock(time) {
  const [hh, mm] = time.split(":").map(Number);

  let period = hh < 12 ? "am" : "pm";
  let hour12 = hh % 12;
  if (hour12 === 0) hour12 = 12;

  return `${hour12.toString().padStart(2, "0")}:${mm
    .toString()
    .padStart(2, "0")} ${period}`;
}


const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
