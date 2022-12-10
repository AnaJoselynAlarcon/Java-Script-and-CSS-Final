// when the "submit-button" is clicked, the contents of the 
//contact-page are replaced with a single <p> element
// that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element
// by modifying the value of that element's .style.fontSize, or by updating its .classList.

// style.fontSize="24 px";
var button = document.getElementById("submit-button");

function GoodDogSumbit()
{
    var message = document.getElementById("contact-page");
    message.innerHTML =  "Thank You for your message!";
    message.style.fontSize="24px";
}

button.addEventListener("click", GoodDogSumbit)