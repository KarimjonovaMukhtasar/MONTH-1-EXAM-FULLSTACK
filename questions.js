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

---

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

---

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

---

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

---

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
```

---

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

---

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
```

---

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

## Question 10: Count Character Occurrences in Array
Count how many times a specific character appears across all strings in an array.

**Example:**
```javascript
Input: ["hello", "string hello", "world is beautiful"], "e"
Output: 4
// "e" appears 4 times total across all strings
```

**Function Signature:**
```javascript
function countCharInArray(strArray, char) {
    // Your code here
}
```

---

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

## Question 12: Calculate Hours Between Two Days
Calculate the number of hours between two given days (provided as strings in any format).

**Example:**
```javascript
Input: "25-october", "oktyabrning 27chisi"
Output: 48
// 48 hours between October 25 and October 27
```

**Function Signature:**
```javascript
function hoursBetweenDays(day1, day2) {
    // Your code here
    // Note: You may need to parse different date formats
}
```

*/