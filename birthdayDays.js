const prompt = require('prompt-sync')();
const { formatDistance } = require("date-fns");

const birthDay = prompt(`Ingrese el día (dd) de su cumpleaños: `);
const birthMonth = prompt(`Ingrese el mes (mm) de su cumpleaños: `);
const date = 2022 + ', ' + birthMonth + ', ' + birthDay;
const birthday = new Date(date);
const presentDay = new Date();

console.log(`Faltan: ${formatDistance(presentDay, birthday)} para su cumpleaños`);