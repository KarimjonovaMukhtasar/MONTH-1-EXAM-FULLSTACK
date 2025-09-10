/*
## Question 6: Find Majority Element
Find the element that appears more than n/2 times in an array.

**Example:**
```javascript
Input: [3, 3, 4, 2, 3, 3, 3]
Output: 3
```
**Function Signature:**
```javascript
function findMajorityElement(arr) {
    // Your code here
}
```

---
*/
function findMajorityElement(arr) {
   let freq = {}
     arr.forEach((element)=>{
        freq[element] = (freq[element] || 0)+1
        return freq})
    let res = []
    for(let key in freq){
        res.push([key, freq[key]])
    }
    res.sort((a,b)=> b[1]-a[1])
    let size = arr.length / 2
    if(res[0][1] > size){
    return res[0][0]
    }
    else{
        return "Not found such a number which is more than half of array length"
    }
}
console.log(findMajorityElement([3, 3, 4, 2, 3, 3, 3]))