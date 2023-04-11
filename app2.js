function outerFunction(a){
    a= 15; 
    //a = +prompt("Please Enter 1st Number");
     function innerFunction(b){
        b = +prompt("Please Enter 2nd Number")
        let answer = a+b;
            console.log("Answer is " + answer);
        }
        return innerFunction();
    }
    outerFunction();




  
  function searchArray(array, value) {
    if (array.length === 0) {
      return false;
    }
        
    if (array[0] === value) {
        return true;
    } 
    else {
        return searchArray(array.slice(1), value);
    }
  }
  const array = [1, 2, 3, 4, 5];
  const value = +prompt("Please enter a value to search in the array");
      
  if (searchArray(array, value)) {
      console.log("Value Found");
  } 
  else {
    console.log("Value not Found");
  }



function addParaToHTML(text) {
  let para = document.querySelector("p");
  para.textContent = text;
}
addParaToHTML("This is a paragraph");




function addLiToUl(text) {
  let ul = document.querySelector("ul");
  ul.textContent = "This is my list";
  let li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}
addLiToUl("This is a New List Item");




function changeBgColor(text, color) {
  text.style.backgroundColor = color;
}
let myText = document.querySelector("h1");
myText.textContent="Hello Pakistan"
changeBgColor(myText, "#f0f");


