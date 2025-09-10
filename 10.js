/*
## Question 10: Count Character Occurrences in Array
Count how many times a specific character appears across all strings in an array.

**Example:**
```javascript
Input: ["hello", "string hello", "world is beautiful"], "e"
Output: 3
// "e" appears 3 times total across all strings
```
**Function Signature:**
```javascript
function countCharInArray(strArray, char) {
    // Your code here
}
```
*/
function countCharInArray(strArray, char) {
     let res = strArray.join("")
     let count = 0
     for(let i of res){
        if(i === char){
            count+=1
        }
     }
     return count
}
console.log(countCharInArray(["hello", "string hello", "world is beautiful"], "e"))