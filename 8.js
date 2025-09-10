/*
## Question 8: Email Validator
Create a function to validate email addresses according to the given examples.

**Examples:**
```javascript
"hello@loremipsum" â†’ false
"hello@lorem.ipsum" â†’ true
"he.llo@loremipsum." â†’ false
"@hello.loremipsum" â†’ false
"@helloloremipsum" â†’ false
"hello.lor@emipsum" â†’ false
"hello@world.com" â†’ true
```
**Function Signature:**
```javascript
function isValidEmail(email) {
    // Your code here
}
*/
function isValidEmail(email) {
    if(!email.includes("@") || !email.includes(".") || !/[a-z]/g.test(email[0]) || !/[a-z]/g.test(email[email.length-1])){
        return false
    }
    else{
        let dot = email.indexOf(".")
        let sobachka = email.indexOf("@")
        if(dot < sobachka){
            return false
        }
        let check = false
        let check1 = false
        for(let i=0; i < email.length; i++){
            if(email[i] === "@"){
                if(/[a-z]/.test(email[i+1])){
                    check = true
                }
            }
            if(email[i] === "."){
                if(/[a-z]/g.test(email[i+1])){
                    check1 = true
                }
            }
        }
        if(check && check1){
            return true
        }
        return false
    }
}
console.log(isValidEmail("hello@loremipsum"))
console.log(isValidEmail("hello@lorem.ipsum"))
console.log(isValidEmail("he.llo@loremipsum."))
console.log(isValidEmail("@hello.loremipsum"))
console.log(isValidEmail("@helloloremipsum"))
console.log(isValidEmail("hello.lor@emipsum"))
console.log(isValidEmail("hello@world.com"))