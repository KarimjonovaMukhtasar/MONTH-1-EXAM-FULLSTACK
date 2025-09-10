/*
## Question 5: Find Common Elements in Two Arrays
Return an array of common elements between two arrays.

**Example:**
```javascript
Input: [1, 2, 3] and [2, 3, 4]
Output: [2, 3]
```

**Function Signature:**
```javascript
function findCommonElements(arr1, arr2) {
    // Your code here
}
*/
function findCommonElements(arr1, arr2) {
    let res = []
    for(let key of arr1){
        if(arr2.includes(key)){
            res.push(key)
        }
    }
    return res
}
console.log(findCommonElements([1, 2, 3],[2, 3, 4]))