// Code your solution in this file

function findMatching (drivers, driverName) {
    const foundDrivers = drivers.filter(function (driver, driverName) {return driver === driverName });

    return foundDrivers;
}
