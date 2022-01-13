const Week = require("./db");

//
let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// fecha
let fecha = year + "-" + month + "-" + date;
//

function bookWeekVerifyfunction() {
  const bookWeek = new Week(fecha);
  const splitBookWeek = bookWeek.date.split("-");
  const bookNumberDate = Number(splitBookWeek[2]);

  const splitFecha = fecha.split("-");
  const todayNumberDate = Number(splitFecha[2]);

  // day
  const day = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  let numberDayToday = new Date(fecha).getDay();
  let numberDayBook = new Date(bookWeek.date).getDay();



  // year
  if (Number(splitBookWeek[0]) < Number(splitFecha[0])) {
    // create book
    const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    return;
  }

  // month
  if (Number(splitBookWeek[1]) < Number(splitFecha[1])) {
    // create book
    //const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    return;
  }

 

  const todayMonday = day[numberDayToday] == "monday";
  const bookMonday = day[numberDayBook] == "monday";
  if (
    todayMonday === true &&
    bookMonday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    //const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("monday");
    return;
  }

  const todayTuesday = day[numberDayToday] == "tuesday";
  const bookTuesday = day[numberDayBook] == "tuesday";
  if (
    todayTuesday === true &&
    bookTuesday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    //const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("tuesday");
    return;
  }

  const todayWednesday = day[numberDayToday] == "wednesday";
  const bookWednesday = day[numberDayBook] == "wednesday";
  if (
    todayWednesday === true &&
    bookWednesday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    // const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("wednesday");
    return;
  }

  const todayThursday = day[numberDayToday] == "thursday";
  const bookThrusday = day[numberDayBook] == "thursday";
  if (
    todayThursday === true &&
    bookThrusday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    //const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("thrusday");
    return;
  }

  const todayFriday = day[numberDayToday] == "friday";
  const bookFriday = day[numberDayBook] == "friday";
  if (
    todayFriday === true &&
    bookFriday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    //const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("friday");
    return;
  }

  const todaySaturday = day[numberDayToday] == "saturday";
  const bookSaturday = day[numberDayBook] == "saturday";
  if (
    todaySaturday === true &&
    bookSaturday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    // const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("saturday");
    return;
  }

  const todaySunday = day[numberDayToday] == "sunday";
  const bookSunday = day[numberDayBook] == "sunday";
  if (
    todaySunday === true &&
    bookSunday === true &&
    todayNumberDate > bookNumberDate
  ) {
    // create book
    // const createNewBook = new Week(fecha);
    // fetch post
    // fetch get
    console.log("sunday");
    return;
  }

  return;
}

bookWeekVerifyfunction();
