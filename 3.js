/*
## Question 3: Rotate Array K Times
Rotate an array to the right by k positions.

**Example:**
```javascript
Input: [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
```

**Function Signature:**
```javascript
function rotateArray(arr, k) {
    // Your code here
}
```
*/
function rotateArray(arr, k) {
    for(let i=0; i < k; i++){
        arr.unshift(arr.pop())
    }
    return arr
}
console.log(rotateArray([1,2,3,4,5,6,7], 3))