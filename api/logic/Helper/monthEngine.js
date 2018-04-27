    /*if (year is not divisible by 4) then (it is a common year)
    else if (year is not divisible by 100) then (it is a leap year)
    else if (year is not divisible by 400) then (it is a common year)
    else (it is a leap year)*/
;(function() {
    'use strict';
    module.exports = monthEngine;
    
    function monthEngine(year, month) {
        function isLeapYear(year) {
            if ((year % 4) !== 0) {
                return 28;
            } else if ((year % 100) !== 0) {
                return 29;
            } else if ((year % 400) !== 0) {
                return 28;
            } else {
                return 29;
            }
        }

        var ret = {
            months: {
                '1': 31,
                '2': isLeapYear(year),
                '3': 31,
                '4': 30,
                '5': 31,
                '6': 30,
                '7': 31,
                '8': 31,
                '9': 30,
                '10': 31,
                '11': 30,
                '12': 31
            }
        };

        return ret.months[month];
    }
}());
    