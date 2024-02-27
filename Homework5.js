// 1. Create a variable via a ternary operator that assigns a string based on an expression.
const condition = true;
const result = condition ? "True String" : "False String";
console.log(result);

// 2. Create an object and loop through its properties, console logging each properties’ value
const myObject = {
  property1: "value1",
  property2: "value2",
  property3: "value3"
};

for (const key in myObject) {
  console.log(myObject[key]);
}

// 3. Create an array of numbers. Using the map function, create a second array of those numbers squared.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// 4. What is the DOM? What is meant by the DOM tree?
// The DOM (Document Object Model) is a programming interface for web documents.
// The DOM states what your script can "ask the browser about the current page, and how to tell the browser to update what is being shown to the user.


// 5. What is a XSS attack? How do they work? How can you guard against them?
// XSS (Cross-Site Scripting) is a type of security vulnerability commonly found in web applications. 
// It occurs if a malicious user adds code to an input that is eventually generated as html, that code could potentially be run for different users
// These scripts can steal sensitive information, manipulate or deface the webpage, or perform other malicious actions.

// To guard against XSS attacks:
// - be very careful with what content you treat as html
// - it should very rarely have the option to have come from a user at all
// - to validate that input, strip it of potential malicious intent by removing tags, escaping characters


// 6. Do the following:
// a. add a button with an id, when that button is clicked, change the button’s text
const button = document.createElement("button");
button.id = "myButton";
button.textContent = "Click me!";
button.addEventListener("click", () => {
  button.textContent = "Button clicked!";
});
document.body.appendChild(button);

// b. add a list with several list items, if any list item is clicked, change all list items color to blue
const list = document.createElement("ul");
list.innerHTML = `
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
`;

list.addEventListener("click", () => {
  const listItems = list.querySelectorAll("li");
  listItems.forEach(item => {
    item.style.color = "blue";
  });
});

document.body.appendChild(list);

// c. add a div that contains a second button element. When that button element is clicked, append a paragraph element with some text to the containing div after the second button.
const containerDiv = document.createElement("div");
const secondButton = document.createElement("button");
secondButton.textContent = "Click for a message";
const paragraph = document.createElement("p");
paragraph.textContent = "This is an added paragraph.";

secondButton.addEventListener("click", () => {
  containerDiv.appendChild(paragraph);
});

containerDiv.appendChild(secondButton);
document.body.appendChild(containerDiv);
