console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    console.log("This starts the odd count");
    if (count < 0) { //console.log(`${count} is less than zero.`); 
        for (let i = 0; i >= count; i--) {
            if (i%2 != 0) { console.log(i); }
        }
    } else {
        for (let i = 0; i <= count; i++) {
            if (i%2 != 0) { console.log(i); }
        }
    }
    console.log("This ends the odd count");
}
//printOdds(-50);
//printOdds(-4);
//printOdds(0);
//printOdds(10);
//printOdds(150);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    if (typeof userName === 'undefined') { userName = "stranger"; }
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16) { 
        console.log(aboveSixteen);
    } else { 
        console.log(belowSixteen); 
    }
}
//checkAge("Robert", 35);
//checkAge("Dave", 16);
//checkAge("Mike",9);
//checkAge(undefined, 42);
//checkAge("Nora",);
//checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function quadrant(x, y) {
    if (x == 0 & y == 0) { console.log(`(${x}, ${y}) is at the origin`); }
    if (x == 0 & y != 0) { console.log(`(${x}, ${y}) is on the y-axis`); }
    if (y == 0 & x != 0) { console.log(`(${x}, ${y}) is on the x-axis`); }
    if (x > 0 & y > 0) { console.log(`(${x}, ${y}) is in Quadrant 1`)}
    if (x < 0 & y > 0) { console.log(`(${x}, ${y}) is in Quadrant 2`)}
    if (x < 0 & y < 0) { console.log(`(${x}, ${y}) is in Quadrant 3`)}
    if (x > 0 & y < 0) { console.log(`(${x}, ${y}) is in Quadrant 4`)}
}

//quadrant(0,0);
//quadrant(2,0);
//quadrant(0,-4);
//quadrant(1,50);
//quadrant(-34,8.3);
//quadrant(-2.1,-6.89);
//quadrant(69,-456);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function isValidTriangle(a, b, c) {
    if (a<=0 || b<=0 || c<=0) {return false;}
    if (a+b > c & a+c > b & b+c > a) {return true;}
    else { return false; }
}

function triangle(a, b, c) {
    if (isValidTriangle(a,b,c) == false) {
        console.log(`Sides ${a}, ${b}, ${c} make an invalid triangle.`);
    } else
    if (a == b & a == c & b == c) { 
        console.log(`Sides ${a}, ${b}, ${c} make an equilateral triangle.`); 
    } else 
    if ( (a==b || a==c || b==c) ) { 
        console.log(`Sides ${a}, ${b}, ${c} make an isosceles triangle.`); 
    }
    else {
        console.log(`Sides ${a}, ${b}, ${c} make a scalene triangle.`);
    }
}

//triangle(1,2,2);
//triangle(1,1,2);
//triangle(4,4,4);
//triangle(3,4,5);
//triangle(0,3,4);
//triangle(-2,-4,-9);
//triangle(2,3,234);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function isOverUnderRight(avgPlanDaily, avgUserDaily){
    if (avgUserDaily < avgPlanDaily) { return 'under'; }
    else 
    if (avgUserDaily > avgPlanDaily) { return 'over'; }
    else { return 'right'; }
}

function dataPlanStatus(planLimit, day, usage) {
    let avgPlanDaily = (planLimit/30).toFixed(3); // plan average
    let avgUserDaily = (usage / day).toFixed(3); // user average
    let remainAvg = ((planLimit - usage)/(30-day)).toFixed(3);
    let planUsage = isOverUnderRight(avgPlanDaily, avgUserDaily);
    console.log(`${day} days used, ${30-day} days remaining\nAverage daily use: ${avgPlanDaily} GB/day\n`);
    
    if (planUsage == 'over') {
        let exceed = ((usage*30.0/day) - planLimit).toFixed(3);
        console.log(`You are EXCEEDING your daily use (${avgUserDaily} GB/day), continuing this high usage, you'll exceed your data plan by ${exceed} GB. To stay below your data plan, use no more than ${remainAvg} GB/day.`)
    } else 
    if (planUsage == 'under'){
        let remaining = (planLimit - usage*30.0/day).toFixed(3);
        console.log(`You are BELOW your daily use (${avgUserDaily} GB/day), continuing this usage, you will have ${remaining} GBs remaining. You can increase your usage to ${remainAvg} GB/day without exceeding your plan limit.`)
    } else {
        console.log(`You are on pace to use all of your data in exactly 30 days.`);
    }
}

//dataPlanStatus(100,15,56);
//dataPlanStatus(100,15,45);
//dataPlanStatus(100,15,50);