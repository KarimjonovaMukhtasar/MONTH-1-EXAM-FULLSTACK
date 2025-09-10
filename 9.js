/*
## Question 9: Add Even Index Elements
Accept an array of numbers and append elements at even indices to the end of the array.

**Example:**
```javascript
Input: [1,2,3,4]
Output: [1,2,3,4,1,3]
// 1 (index 0) and 3 (index 2) are added because their indices are even
```

**Function Signature:**
```javascript
function addEvenIndexElements(arr) {
    // Your code here
}
```
---
*/
function addEvenIndexElements(arr) {
    let res = []
    res = structuredClone(arr)
    for(let i=0; i< arr.length; i++){
        if(i % 2 === 0){
             res.push(arr[i])
        }
    }
    return res
}
console.log(addEvenIndexElements([1,2,3,4]))