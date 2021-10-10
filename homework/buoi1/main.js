//grade
console.log(grade(85)); //A
console.log(grade(72)); //B

//day of week
console.log(numToDay(0)); //Sun
console.log(numToDay(2)); //Tue

//random
console.log(randomBetweenRange(3, 5));

//sum odd numbers
console.log(sumOddNumbers(1, 100));

//fizz buzz number (% 3 & 5 == 0)
console.log(sumFizzBuzz(0, 100));

function grade(point) {
    if (point >= 85) return "A";
    else if (point >= 70) return "B";
    else if (point >= 40) return "C";
    else if (point >= 0) return "D";
}

function numToDay(num) {
    switch (num) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}

function randomBetweenRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function sumOddNumbers(begin, end) {
    if (begin <= end) {
        let sum = 0;
        for (let i = begin; i <= end; i++) {
            if (i % 2 !== 0) {
                sum += i;
            }
        }
        return sum;
    }
}

function sumFizzBuzz(begin, end) {
    let sum = 0;
    for (let i = begin; i <= end; i++) {
        if (i % 3 === 0 && i % 5 ===0) {
            sum += i;
        }
    }
    return sum;
}
