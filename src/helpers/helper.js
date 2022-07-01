import * as moment from "moment";

export const getTimeDiff = (day1, day2) => {
  const today = day2 && day2 != "today" ? moment(day2) : moment();
  const someday = moment(day1);
  const diff = someday.diff(today, "minutes");
  return diff - 10;
};

export const getDateTimestamp = (day1) => {
  const someday = moment(day1);
  return someday;
};

export const isNullorUndefined = (obj) => {
  return !(typeof obj !== "undefined" && obj !== null);
};
