/*
## Question 12: Calculate Hours Between Two Days
Calculate the number of hours between two given days (provided as strings in any format).

**Example:**
```javascript
Input: "25-october", "oktyabrning 27chisi"
Output: 48
// 48 hours between October 25 and October 27
```

**Function Signature:**
```javascript
function hoursBetweenDays(day1, day2) {
    // Your code here
    // Note: You may need to parse different date formats
}
```
*/
function hoursBetweenDays(day1, day2) {
    for(day1.includes("OCT")){

    }
    let time1 = new Date(day1)
    let time2 = new Date(day2)
    let res = Math.abs(time2- time1)/(1000 * 60 * 60)
    return res
}
console.log(hoursBetweenDays("25-october", "oktyabrning 27chisi"))