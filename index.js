// code your solution here
const record = [
  { year: "2018", result: "N/A" },
  { year: "2017", result: "N/A" },
  { year: "2016", result: "N/A" },
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "1963", result: "N/A" },
  { year: "1961", result: "N/A" },
];
function superbowlWin(arr) {
  let win = arr.find((record) => record.result === "W");
  return win ? win.year : undefined;
}
