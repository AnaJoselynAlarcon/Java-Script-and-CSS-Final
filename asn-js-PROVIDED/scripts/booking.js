/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, 
// and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var cost_per_day = 35;
var number_of_days = 0;





/********* colour change days of week *********/
// when the day buttons are clicked, 
//we will apply the "clicked" class to that element,
// and update any other relevant variables. 
// Then, we can recalculate the total cost.

// added challenge: don't update the dayCounter if the same day is clicked more than once.
// hint: .classList.contains() might be helpful here!
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");


//all days
//full day and half day
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");


function ColourChange()
{
    if(this.classList.contains("clicked"))
    {this.classList.remove ("clicked");}

    else 
    {this.classList.add("clicked");
    number_of_days = number_of_days +1;
    //number_of_days ++
    }
    calculate();

}

monday.addEventListener("click", ColourChange);
tuesday.addEventListener("click", ColourChange);
wednesday.addEventListener("click", ColourChange);
thursday.addEventListener("click", ColourChange);
friday.addEventListener("click", ColourChange);
// fullDay.addEventListener("click", ColourChange);
// halfDay.addEventListener("click", ColourChange);

//click is a keyword
//event listener for all of them


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days,
// any other relevant variables are reset, and the calculated cost is set to 0.

//number of days 0
var clear = document.getElementById("clear-button");


function clearDays()
{
    // var clear = document.getElementById("clear-button");
    halfDay.classList.remove("clicked");
    monday.classList.remove("clicked");
    tuesday.classList.remove("clicked");
    wednesday.classList.remove("clicked");
    thursday.classList.remove("clicked");
    friday.classList.remove("clicked");
    document.getElementById("calculated-cost").innerHTML = 0;
    number_of_days = 0;
}

//     if (this.classList.contains("clicked"))
//         {this.classList.remove ("clicked");
//         cost_per_day = 0;
//         number_of_days = 0;}
    
//     calculate()
// }


clear.addEventListener("click", clearDays);

/********* change rate *********/
// when the half-day button is clicked,
// set the daily rate to $20, add the "clicked" class to the "half" element, 
// remove it from the "full" element, and recalculate the total cost.
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");

function halfRate()
{
    if(halfDay.innerHTML == "half")
    {
        halfDay.classList.add("clicked");
        fullDay.classList.remove("clicked");
        cost_per_day = 20;
    }
    else
    {
        halfDay.classList.remove("clicked");
        fullDay.classList.add("clicked");
        cost_per_day = 35;
    }

    // else 
    // {this.classList.add("clicked");
    // number_of_days = number_of_days +1
    // //number_of_days ++
    // }
    calculate();

}
if(halfDay)
{
halfDay.addEventListener("click", halfRate);
}



//daily rate = costperday
//add class list for the half
//remove class full day
//calculate function again 







// when the full-day button is clicked, 
//the daily rate is set back to $35, 
//the clicked class is added to "full"
// and removed from "half", and the total cost is recalculated.





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

var cost = document.getElementById("calculated-cost");

function calculate()
{
    var cost_text = document.getElementById("calculated-cost");
        cost_text.innerHTML = cost_per_day * parseInt(number_of_days);
        
        //document.getElementById("calculated-cost").innerHTML = cost_text;
}

if(cost)
{
    cost.addEventListener("click", calculate);
}
