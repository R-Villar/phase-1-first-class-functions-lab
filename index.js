// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    const firstTwo = drivers.slice(0, 2)
    return firstTwo
}

function returnLastTwoDrivers() {
    const lastTwo = drivers.slice(2, 4)
    return lastTwo
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(value1) {
    return function fareMultiplier(value2) {
        return value1 * value2 
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(drivers, newDrivers) {
    return newDrivers(drivers)
}