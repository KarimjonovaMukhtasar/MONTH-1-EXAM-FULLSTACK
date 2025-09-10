/*
## Question 4: Check if Two Strings are Isomorphic
Two strings are isomorphic if characters in one string can be mapped to characters in another string.

**Examples:**
```javascript
"egg" and "add" â†’ true
"hello" and "salom" â†’ false
```

**Function Signature:**
```javascript
function areIsomorphic(str1, str2) {
    // Your code here
}
```
*/
function areIsomorphic(str1, str2) {
    let check1 = false
    for(let i=0; i< str1.length; i++){
        if(str1[i] === str1[i+1]){
            check1 = true
        }
    }
    let check2 = false
    for(let i=0; i< str2.length; i++){
        if(str2[i] === str2[i+1]){
            check2 = true
        }
    }
    if(!check1 || !check2){
        return false
    }
    return true
}

console.log(areIsomorphic("egg", "add"))
console.log(areIsomorphic("hello", "salom"))