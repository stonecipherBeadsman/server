;(function() {
    'use strict';
    module.exports = Counter;

    function Counter(readingsPerDay) {
        var minuteInterval = 0;
        var readingsPerHour = null;
        if (readingsPerDay === 48) {
            minuteInterval = 30;
            readingsPerHour = 2;
        } else if (readingsPerDay === 96) {
            minuteInterval = 15;
            readingsPerHour = 4;
        } else if (readingsPerDay === 288) {
            readingsPerHour = 12;
            minuteInterval = 5;
        }
        var ret = {
            readingsPerHour: readingsPerHour,
            number: 0,
            daysLeftInCurrentMonth: 0,
            increment: function() {
                var ret = 0;
                if (this.readingsPerHour - 1 > this.number) {
                    if (this.number === 0) {
                        ret = ++this.number * minuteInterval;
                    } else {
                        ret = ++this.number * minuteInterval;
                    }
                } else {
                    ret = this.turnOver();
                }
                return ret;
            },
            turnOver: function() {
                this.number = 0;
                return this.number * minuteInterval;
            },
            getValue: function(){
                return this.number;
            },
            initCountDown: function(daysLeftInCurrentMonth) {
                this.daysLeftInCurrentMonth = daysLeftInCurrentMonth;
            },
            decrement: function() {
                if (this.daysLeftInCurrentMonth <= 0) {
                    return 0;
                }
                this.daysLeftInCurrentMonth--;
                return this.daysLeftInCurrentMonth;
            },
            getCurrentCountDownPlaceValue: function() {
                return this.daysLeftInCurrentMonth;
            }
        };
        return ret;
    }

}());
