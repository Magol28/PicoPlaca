const moment = require('moment');
const { isValidTime, isPicoPlacaApplied, isPicoPlacaDay, isNewPicoPlacaSchedule } = require('./functions/app');

const date = '2019-09-06';
const plate = 'ABC-1230';
const time = '10:00:00'

const currentTime = moment();

if (!isPicoPlacaDay(date)) {
    console.log('the car is allowed to travel ');
    return;
}
if (isNewPicoPlacaSchedule(date)) {

    if (!isValidTime(time, '04:59:59', '20:00:01')) {
        console.log('the car is  allowed to travel ');
        return;
    }

} else {
    if (!(isValidTime(time, '06:59:59', '09:30:01') || isValidTime(time, '15:59:59', '21:30:01'))) {
        console.log('the car is  allowed to travel ');
        return;
    }

}

if (!isPicoPlacaApplied(date, plate)) {
    console.log('the car is allowed to travel ');
} else {
    console.log('the car is not allowed to travel ');
}