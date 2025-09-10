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
function setMonth(str){
    let day1 = str.toLowerCase()
    if(day1.includes("oct")){
        return "9"
    }
    else if(day1.includes("nov")){
        return "10"
    }
    else if(day1.includes("dec")){
        return "11"
    }
    else if(day1.includes("jan")){
        return "0"
    }
    else if(day1.includes("feb")){
        return "1"
    }
     else if(day1.includes("march")){
        return "2"
    }
    else if(day1.includes("april")){
        return "3"
    }
     else if(day1.includes("may")){
        return "4"
    }
    else if(day1.includes("june")){
        return "5"
    }
     else if(day1.includes("july")){
        return "6"
    }
    else if(day1.includes("august")){
        return "7"
    }
    else if(day1.includes("sep")){
        return "8"
    }
    else{
        return "NOT FOUND SUCH A MONTH, ENTER THE CORRECT MONTH NAME"
    }
}
function hoursBetweenDays(day1, day2) {
    let day = ""
    for(let i = 0; i < day1.length; i++){
        if(!isNaN(day1[i])){
           day += day1[i]
        }
    }
    let time1 = new Date()
    time1.setDate(Number(day))
    let month1 = setMonth(day1)
    time1.setMonth(+month1)
    console.log(time1)
    let day0 = ""
    for(let i = 0; i < day2.length; i++){
        if(!isNaN(day2[i])){
           day0 += day2[i]
        }
    }
    let time2 = new Date()
    time2.setDate(Number(day0))
    let month2 = setMonth(day2)
    time2.setMonth(+month2)
    console.log(time2)
    

    // DAYS AND MONTHS
    // let x = ""
    // x += time1.getDate()
    // let d = time1.getMonth()

    // let y = ""
    // y += time2.getDate()
    // y += "  " + time2.getMonth()
    let str = `${time2.getFullYear()}-${time2.getMonth()}-${time2.getDate()}`
    let str1 = `${time1.getFullYear()}-${time1.getMonth()}-${time1.getDate()}`
    let x = new Date(str)
    let y = new Date(str1)
    let res = Math.abs(x-y)/(1000 * 60 * 60)
    return res
}
console.log(hoursBetweenDays("25 october", "octoberning 27chisi"))