#!/bin/env node

const moment = require("moment");

let daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const today = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};

let isLeapYear = (year) => moment([year]).isLeapYear();

/**
 * A Function that calculates the age in years, months and days approximetly.
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {Object} - an object of the years, months and days as you see in the example below.
 *
 * @example
 * if we assume that the date of writing this example is Mar 25, 2024.
 * ChronolicalAge(2002, 3, 5); // -> { years: 22, months: 0, days: 20 }
 */

function ChronolicalAge(year, month, day) {
  // if it's a leap year set feburary to 29 days!
  if (isLeapYear(year)) {
    daysInMonths[1] = 29;
  }

  let birthdayHasPassed =
    today.month > month || (today.month === month && today.day >= day);

  if (!birthdayHasPassed) {
    today.month--;
    today.day += daysInMonths[month - 1];
  }

  return {
    years: today.year - year,
    months: today.month - month,
    days: today.day - day,
  };
}

module.exports.ChronolicalAge = ChronolicalAge;
