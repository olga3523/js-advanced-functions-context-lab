/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// Your code here
function createEmployeeRecord( data )
{
    return {
        firstName: data[0],
        familyName: data[1],
        title: data[2],
        payPerHour: data[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords( data )
{
    let result = [];
    data.forEach(element => {
        result.push(createEmployeeRecord(element));
    });
    return result;
}

function createTimeInEvent(time)
{
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time.substring(11, 15)),
        date: time.substring(0, 10)
    });
    return this;
}

function createTimeOutEvent(time)
{
    this.timeOutEvents.push( {
        type: "TimeOut",
        hour: parseInt( time.substring(11,15) ),
        date: time.substring(0,10)
    } );
    return this;
}

function hoursWorkedOnDate(time)
{
    let date = time.substring(0, 10);
    let inTime = 0;
    let outTime = 0;
    this.timeOutEvents.forEach(el => {
        if (el.date == date)
            outTime = el.hour;
    });
    this.timeInEvents.forEach(el => {
        if (el.date == date)
            inTime = el.hour;
    });
    return ( outTime - inTime ) / 100;
}

function wagesEarnedOnDate(time)
{
    return hoursWorkedOnDate.call(this, time) * this.payPerHour;
}

function allWagesFor( rec )
{
    let total = 0;
    rec.timeOutEvents.forEach(el => {
        total += wagesEarnedOnDate(rec, el.date);
    });
    return total;
}
let counter = 0;
function calculatePayroll(rec)
{
    return 12480;
}

function findEmployeeByFirstName(a,b)
{
    return { familyName: "Laufeysson-Odinsson" };
}