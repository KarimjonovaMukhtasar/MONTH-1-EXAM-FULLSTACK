/*
## Question 2: Sort Array by Frequency
Sort an array by the frequency of elements (most frequent first, then least frequent).

**Example:**
```javascript
Input: [4,1,2,1,2,3,3,3]
Output: [3,3,3,1,1,2,2,4]
```

**Function Signature:**
```javascript
function sortByFrequency(arr) {
    // Your code here
}
```
*/
function sortByFrequency(arr) {
     let freq = {}
     arr.forEach((element)=>{
        freq[element] = (freq[element] || 0)+1
        return freq})
     let res = []
    for(let key in freq){
        res.push([key, freq[key]])
    }
    res.sort((a,b)=> b[1]-a[1])
    let result = []
    for(let key of res){
        for(let i=0; i < key[1];i++){
            result.push(key)
        }
    }
    return result}
console.log(sortByFrequency([4,1,2,1,2,3,3,3]))
