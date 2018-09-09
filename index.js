// Code your solution in this file

function findMatching (drivers, driverName) {
    const foundDrivers = drivers.filter(driver => driver === driverName || driver === driverName.toLowerCase());

    return foundDrivers;
}

function fuzzyMatch (drivers, chars){
    const matched = drivers.filter(driver => chars);
}
