// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function () {
        return number * number
    }
}

function fareDoubler (number) {
    return number*2
}

function fareTripler (number) {
    return number*3
}
function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}