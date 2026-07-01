// User Inputs 
// 1- easy way = Window Prompt 
// 2- Professional way = HTML Form

// ----------------------------------------------------------------------

// Window Prompt : 

// let userName = window.prompt("Enter your name");
// console.log(userName);

// -----------------------------------------------------------------------

// Window Confirm :

// let confirmMessage = window.confirm("Are you sure you want to proceed?");
// console.log(confirmMessage);

// window.alert():

// window.alert("Hello World");

// --------------------------------------------------------------------------

//  HTML Form :    
let userName;

// Get the button element by its ID and add an event listener when it is clicked.    
document.getElementById("myBtn").onclick = function(){
    // Get the value of the input element by its ID.
    userName = document.getElementById("userName").value;
    // console.log(userName);
    // Set the text content of the heading element by its ID to the value of the input element.
    document.getElementById("myHead").textContent = "Hello " + userName;
}