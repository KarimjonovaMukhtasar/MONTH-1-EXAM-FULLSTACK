/*
## Question 11: Capitalize First and Last Two Characters
Capitalize the first two and last two characters of a word. The word must have at least 8 characters.

**Examples:**
```javascript
"javascript" â†’ "JAvascriPT"
"java" â†’ Error: Word must have at least 8 characters
```

**Function Signature:**
```javascript
function capitalizeEnds(word) {
    // Your code here
}
```

---
*/
function capitalizeEnds(word) {
    if(word.length < 8){
        return "Word must have at least 8 characters "
    }
    else{
        let res = ""
        for(let i=0; i< word.length; i++){
            if(i === 0 || i === 1 || i === word.length-1 || i === word.length-2){
                res += word[i].toUpperCase()
            }
            else{
            res += word[i]
            }
        }
        return res
    }
}
console.log(capitalizeEnds("javascript"))
console.log(capitalizeEnds("java"))