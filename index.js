// Code your solution in this file

function findMatching (drivers, driverName) {
    const foundDrivers = drivers.filter(driver => driver === driverName || driver === driverName.lowwerCase());

    return foundDrivers;
}
