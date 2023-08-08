import dateFormat, { masks } from "dateformat";
const now = new Date();

const currentDate = dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
console.log(currentDate);
