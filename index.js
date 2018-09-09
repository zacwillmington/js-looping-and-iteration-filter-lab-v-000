// Code your solution in this file

function findMatching (drivers, driverName) {
    const foundDrivers = drivers.filter(driver => driver === driverName || driver === driverName.toLowerCase());

    return foundDrivers;
}

function fuzzyMatch (drivers, chars){
    const matched = drivers.filter(driver =>
    return driver[0] + driver[1] == chars);
    return matched
}

// function matchChars (chars, drivers) {
//     const matchingDrivers;
//     for ( const driver of drivers) {
//         if (driver[0] + driver[1] == chars){
//             matchingDrivers.push(driver);
//         }
//     }
//     return matchingDrivers
// }
