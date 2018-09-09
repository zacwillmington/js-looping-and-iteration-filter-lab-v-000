// Code your solution in this file

function findMatching (drivers, driverName) {
    const foundDrivers = drivers.filter((driver, driverName) => driver === driverName);

    return foundDrivers;
}
