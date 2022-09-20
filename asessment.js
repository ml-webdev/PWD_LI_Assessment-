/* Problem 1 */
/* Skill: Git
You want to grow a new branch from any commit. Identify the code you will use to swtich to "HEAD-5" and create a branch named 'testbranch'
*/
//YOUR CODE HERE
// git checkout -b HEAD-5/testbranch

/* Problem 2 */
/*Skill: React, API call  
You are creating an API that calls an application in ReactJS. The application allows the fetching of data from the following endpoint. 
API ENDPOINT: https://www.reddit.com/r/react.json
complete the code as per the given instructions:
*/


class APICaller extends React.Component{
  callApi(){
    //#1 Implement a fetch method with the given API ENDPOINT
    // YOUR CODE HERE
    fetch("https://www.reddit.com/r/react.json") 
    .then((result)=>{
      //#2 Return the result in json format
      //YOUR CODE HERE 
      result.json()
    }).then((jsonData)=>{
      //#3 Print/log the jsonData in the console of the browser
      //YOUR CODE HERE
      console.log(jsonData) 
    })
  }
render(){
  return <div>
    <button onClick={this.callApi}
  //#4 Implement an onCLick functionality to the button such that it calls the callApi() function when it is clicked. 
  // YOUR CODE HERE 
    >Call the API now.</button>
  </div>
}
}
React.render(
  <APICaller/>
  //#5 Implement the APICaller component appropiately into the render method
  //YOUR CODE HERE 
  , document.getElementById('myapicaller')
)


/* Problem 3 */
/*Skill: recursion
Please write an explanation of recursive functions where your audience is a beginner learner with knowledge of basic JS functions.
Please write an example of a recursive function, and comment each line 
*/
/*EXPLANATION HERE (1 paragraph) */
//  A recursive function is a function that invokes (or calls) itself. This means that you will call that function inside of its own code block. You must include a "base case" so that your function does not recurse infinitely. You can think of a base case as an "off" switch. If you have achieved your base case, return some value (stop recursing), otherwise recurse. 
function myRecursiveFunction(){
  //YOUR CODE WITH COMMENTS HERE
  const microwave = (seconds) => {
      if (seconds == 0) return console.log("Done.")
          // This is our base case. If our variable "seconds" hits 0, we will return a log to the console
      else { 
  
          console.log(`Cooking. ${seconds} seconds left.`) // Otherwise, log this statement to the console...
  
          setTimeout( () => microwave(seconds - 1), 1000) // ...and run this function again after decrementing seconds.
              // This is recursion. Notice we are calling the function inside of itself. We decrement "seconds" by 1, then that value is passed as an argument in the microwave function where we return to the top of our code block: the base case. Until the base case is satisfied, we will continue decrementing and recursing.
      }
  }
  
  microwave(5)
}


/* Problem 4 */
/* Skill: algorithms 
Please write an explanation for an introduction to sorting algorithms. 
Write an example of Bubble Sort and comment each line of your code 
with explanation
*/

/* Sorting algorithms intro explanation HERE (1-2 paragraphs) */
// A sorting algorithm helps us arrange data in a specific order. More specifically, it helps us arrange elements into a sorted array. This allows us to sort through data quickly. They are a fundamental aspect of computer science. Bubble sort is an example of a sorting algorithm. 

/*Bubble sort example HERE*/
const bubbleSort = (arr) => {
  let isSorted = false 
  let lastUnsorted = arr.length - 1 // This represents the index of the last sorted element

  // while the array is sorted, move through the array
  while(!isSorted) {
      isSorted = true
      for (let i = 0; i < lastUnsorted; i++ ){
          // If you find that the element at the current index is larger than the element at the next index, perform a swap, this will eventually "bubble" the largest value to the end of the array
           if (arr[i] > arr[i + 1]) {
              //create a temporary variable to store the first value. 
              let temp;

              //swap variables
              temp = arr[i]; // We store this value because it will be mutated in the next step
              arr[i] = arr[i + 1];
              arr[i + 1] = temp; // We changed the value of num2 to the first value that we stored.
              isSorted = false // Since we had to swap, we know the array is not sorted
           }
      }
      lastUnsorted-- // When the element reaches the end of the array ("bubbles up"), you know it is the largest, so you no longer need to check if you should perform a swap. Move the end of the array to the previous index, which is the same as decrementing the end of the array.
  }

  return arr
}


/* Problem 5 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 
https://leetcode.com/problems/house-robber/
and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.
*/
const robber = (array) => {
  if (!array.length) return 0 // Return zero for an empty array
  if (array.length === 1) return array[0] // If the array has one element, return the value of that element
  if (array.length === 2) return Math.max(array[0], array[1]) // If the array has two elements, return the max of the two

  // if the first three conditions are not satisfied, we will have an array length of at least three. We will start at the third element (index 2) and iterate until the end of the array.
  for (let i = 2; i < array.length; i++){
      array[i] = Math.max(array[i-2] + array[i], (array[i - 3] || 0) + array[i]) // Since initially i is 2, array[i - 2] is just the first element. We will the compare the max of our two values. The first value is the sum of the first and third elements, and the second value is the sum of our current element (array[i]) and the element that came three spots before it (array[i - 3]). If there is no element three spots prior, use 0 as the value

  }
  return Math.max(array[array.length - 1], array[array.length - 2]) // Return the max of the last two elements
}

  let windowStart = 0;
  const checked = new Map() // We will store the count of our checked values in a map
  let max = 0

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
      let rightChar = s[windowEnd] // The right most character will be the end of the window

      // If checked has not been seen...
      if(!checked.get(rightChar)) {
          checked.set(rightChar, 1) // If the right character isn't already in the Map, set its value to 1
      }
      else {
          checked.set(rightChar, checked.get(rightChar) + 1) // Otherwise, get the count value of the right character from the map and increment
      }

      // shrink the size of the sliding window until
      while(checked.size > k) {
          let leftChar = s[windowStart] // We'll save the first character of the string as the left-most character 

          if (checked.get(leftChar) > 1) checked.set(leftChar, checked.get(leftChar) - 1) // If there is more than one left character, decrement and set leftChar to that value
          else checked.delete(leftChar)

          windowStart++ // Now shrink the window
      }

      if (checked.size >= k){

          max = Math.max(max, (windowEnd - windowStart) + 1)
      }
  }
  return max

/* Problem 6 */
/*Skill: Leetcode Algorithms
solve the following leetcode in JavaScript: 
https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
and paste your solution here. Please comment each line of your code to explain it, and be prepared to explain in the follow up interview.*/


const longestSubstring = (s, k) => {
  let windowStart = 0;
  const checked = new Map() // We will store the count of our checked values in a map
  let max = 0

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++){
      let rightChar = s[windowEnd] // The right most character will be the end of the window

      // If checked has not been seen...
      if(!checked.get(rightChar)) {
          checked.set(rightChar, 1) // If the right character isn't already in the Map, set its value to 1
      }
      else {
          checked.set(rightChar, checked.get(rightChar) + 1) // Otherwise, get the count value of the right character from the map and increment
      }

      // shrink the size of the sliding window until
      while(checked.size > k) {
          let leftChar = s[windowStart] // We'll save the first character of the string as the left-most character 

          if (checked.get(leftChar) > 1) checked.set(leftChar, checked.get(leftChar) - 1) // If there is more than one left character, decrement and set leftChar to that value
          else checked.delete(leftChar)

          windowStart++ // Now shrink the window
      }

      if (checked.size >= k){

          max = Math.max(max, (windowEnd - windowStart) + 1)
      }
  }
  return max
}

/* Problem 7 */
/*Skill: SQL
Please fork and complete this SQL exercise: 
https://gist.github.com/harrisonmalone/e06ea120532e5cd323ef0b0b379fa4d6
LINK TO YOUR REPO HERE
*/

// https://github.com/ml-webdev/kh-ca

/* Problem 8 */
/*Skill: React
Explain state management and lifting state in React. Please include the difference between Redux and Context API. Your audience is a beginner learner with an understanding of React components, props and basic state. 
//Your explanation HERE
*/
//  // You may find yourself in a situation where your child components need a shared state. When this happens, you can "lift" up the state to the parent component. For example, imagine you have a to-do list application. You render three components in App.js: a component that holds the entire list of to-dos (TodoList), the individual to-do component (TodoItem), and a component that keeps track of the number of to-do items (TodoCount). To get the count of the to-dos, you need the state of the entire to-do list. Though you could define the state of the to-dos inside of the TodoList component, you would not be able to access this state for the TodoCount. Instead, you can "lift" the state up to the parent component (App.js, in this case). 
// Furthermore, you may want to manage the state of your application. This is where state management tools like Redux and Context API come in handy. They allow you to store the states of your components. Context API allows you to store non-serialized data (like a reference) and working with Context API can be simpler than Redux. It is recommended for simple applications. However, if your application state is complex, needs to be tested frequently, or handles side effects related to the global state, it is recommend to use a tool like Redux.

/* Problem 9 */
/* 
Skill: Node/Express
How would you explain what Node and Express do to a beginner learner with no experience in server side programming?
Your explanation HERE (2 paragraphs)
// 
// Node.js is a javascript runtime environment. Runtime environments give us the functionality that we need to run our program. Runtime environments aid in the process of loading applications. It acts as a sort of "middle man" between the operating system and our application. Node runs on a JavaScript engine and helps us build network applications. It is event-driven and asynchronous.
// Express is a web application framework that runs on top of Node. It makes organizing our application easier and provides features that help in developing web and mobile applications. Express provides functionality like middleware and routing. Express is written in JavaScript, so it can be easier for newer programmers to learn, especially if they are familiar with JavaScript.

/* Problem 10 */
/*Skill: JavaScript Objects + Classes
Complete instructions in the cardGame.js file
*/

