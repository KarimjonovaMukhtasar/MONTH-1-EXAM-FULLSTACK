/*
## Question 1: Group Words by Anagrams
Write a function that groups words that are anagrams of each other.

**Example:**
```javascript
Input: ["bat", "tab", "tap", "pat", "cat"]
Output: [["bat", "tab"], ["tap", "pat"], ["cat"]]
```

**Function Signature:**
```javascript
function groupAnagrams(words) {
    // Your code here
}
```
*/
function groupAnagrams(words) {
    let map = {}
    for(let key of words){
        let res = key.split("").sort().join("")
        if(!map[res]){
            map[res] = []
        }
        map[res].push(key)
    }
    let result = []
    for(let key in map){
        result.push(map[key])
    }
    return result
}
console.log(groupAnagrams(["bat", "tab", "tap", "pat", "cat"]))