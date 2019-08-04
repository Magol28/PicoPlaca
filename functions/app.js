const moment = require('moment');
const isPicoPlacaApplied = (date, plate) => {
    const lastDigit = getLastDigit(plate);
    const fullDate = new Date(date + ' ');
    const weekDay_1 = ((fullDate.getDay()) * 2) - 1;
    const weekDay_2 = (weekDay_1 + 1) % 10;
    if (weekDay_2 === lastDigit || weekDay_1 === lastDigit)
        return true;
    else
        return false;
}
const isValidTime = (time, start, end) => {
    const currentTime = moment(time, "HH:mm:ss ");
    const startTime = moment(start, "HH:mm:ss ");
    const endTime = moment(end, "HH:mm:ss ");
    return currentTime.isBetween(startTime, endTime);
}
const getLastDigit = (plate) => {
    return Number(plate.split('-')[1][3]);
}
const isPicoPlacaDay = (date) => {
    const fullDate = new Date(date + ' ');
    const day = fullDate.getDay();
    if (day === 6 || day === 0)
        return false;
    return true;
}

const isNewPicoPlacaSchedule = (date) => {
    const currentDate = new moment(date + ' ', 'YYYY-MM-DD');
    return currentDate.isBetween('2019-09-01', '2020-05-03')
}


module.exports = {
    getLastDigit,
    isValidTime,
    isPicoPlacaApplied,
    isPicoPlacaDay,
    isNewPicoPlacaSchedule
}