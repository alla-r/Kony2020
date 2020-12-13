function chronos( year, month, day ){
    // zero day is 22.08.01 - sunday
    // get amount of day from the start of year for zero day
    const numZeroDay = getNumDayFromStartYear(1, 8, 22);
    // amount of days to the end of zero year
    const zeroToEnd = 360 - numZeroDay;

    let numDaysFromZeroDay = 0;

    if ( year === 1 ) {
        numDaysFromZeroDay += getNumDayFromStartYear(year, month, day) - numZeroDay;
    } else {
        numDaysFromZeroDay += getNumDayFromStartYear(year, month, day);
        numDaysFromZeroDay += amountDaysInYears(1, year - 1);
        numDaysFromZeroDay += zeroToEnd;
    }
    
    return getDay(numDaysFromZeroDay);
}

//for tests
module.exports = chronos;

// amount of days in years between zero and curr
function amountDaysInYears (zeroYear, curYear) {
    let days = 0;

    for (let i = curYear; Math.abs(curYear - zeroYear) !== 0;) {
        if (checkLeapYear(curYear)) {
            days += 361;
        } else {
            days += 360;
        }
       curYear > zeroYear ? curYear-- : curYear++;
    }
   
    return days;
    
}

function getNumDayFromStartYear (year, month, day) {
    let result = 0;
    if ( checkLeapYear(year) ) {
        if ( month > 2 ) {
            result = (month - 2) * 30 + 31 + day;
        } else {
            result = (month - 1) * 30 + day;
        }
    } else {
        result  = (month - 1) * 30 + day;
    }
    

    return result;
}

function checkLeapYear (year) {
    if ( year % 5 === 0 ) {
        if ( year % 100 === 0 ) {
            if ( year % 500 === 0 ) {
                return true;
            } else {
                return false;
            }
        } 
        return true;
    }

    return false;
}

function getDay (numDays) {
    switch (true){
        case numDays === 1 || numDays % 7 === 1:
            return 'Monday';
        case numDays === 2 || numDays % 7 === 2:
            return 'Tuesday';
        case numDays === 3 || numDays % 7 === 3:
            return 'Wednesday';
        case numDays === 4 || numDays % 7 === 4:
            return 'Thursday';  
        case numDays === 5 || numDays % 7 === 5:
            return 'Friday';
        case numDays === 6 || numDays % 7 === 6:
            return 'Saturday';
        case numDays === 7 || numDays % 7 === 0:
            return 'Sunday';   
    }
}