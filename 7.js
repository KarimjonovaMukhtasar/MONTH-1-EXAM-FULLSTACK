/*
## Question 7: Remove K Digits to Get Smallest Number
Remove k digits from a number string to create the smallest possible number.
**Example:**
```javascript
Input: num = "1432219", k = 3
Output: "1219"
```
**Function Signature:**
```javascript
function removeKDigits(num, k) {
    // Your code here
}
```
*/


// MATEMATIK BILIMIM YETARLI EMAS, Saytdan foydalandim :(. UZR :( in shaa Allah matematikani algoritmni kelajakda o'rganamiz...)
function removeKDigits(num, k) {
    if(k === 0){
        return num
    }
    else{
        let size = num.length
        if(size <= k){
            return ""
        }
        let minIndex = 0
        for(let i=0; i <= k; i++)
        if(num[i] < num[minIndex]){
            minIndex = i
        }
        return num[minIndex] + removeKDigits(num.slice(minIndex + 1), k-minIndex)
    }
}
console.log(removeKDigits("1432219", 3))

