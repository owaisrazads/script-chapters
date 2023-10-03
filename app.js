// <!-- chapter 1 Alert -->
alert("Thanks for your input!");
// <!-- chapter 2 Variables for Strings -->
let names = "Owais";
name = "Raza";
// <!-- chapter 3 Variables for Numbers -->
let weight = 150;
weight + 25

// chatter 4 Variable Names Legal and Illegal

// chapter 5 Math expressions: Familiar operators
1 var num = 10;
2 var anotherNum = 1;
3 var popularNumber = num + anotherNum;

// chater 6 Math expressions:Unfamiliar operators
num++;
num = num + 1;
num--;
let num = 1;
let newNum1 = num++;
let num = 1;
let newNum2 = ++num;
let num = 1;
let newNum3 = num--;
let num = 1;
let newNum4 = --num; let

// chapter 7 Math expressions: Eliminating ambiguity
var totalCost = 1 + 3 * 4;
var totalCost = 1 + (3 * 4);
var totalCost = (1 + 3) * 4;
var resultOfComputation = (2 * 4) * 4 + 2;
resultOfComputation = ((2 * 4) * 4) + 2;
resultOfComputation = (2 * 4) * (4 + 2);






// chapter 8 Concatenating text strings
alert("Thanks for your input!");
var message = "Thanks for your input!";
alert(message);
lert("Thanks, " + userName + "!");
var message = "Thanks, ";
var banger = "!";
alert(message + userName + banger);
var message = "Thanks, ";
var userName = "Susan";
var banger = "!";
var customMess = message + userName + banger;
alert(customMess);
alert("2" + "2");
alert("2 plus 2 equals " + 2 + 2);




// chapter 9 Prompts
var spec = prompt("Your species?", "human");
var question = "Your species?";
var defaultAnswer = "human";
var spec = prompt(question, defaultAnswer);
var numberOfCats = prompt("How many cats?");
var tooManyCats = numberOfCats + 1;










// chapter 10 if statements
var x = prompt("Where does the Pope live?");
if (x === "Vatican") {
    alert("Correct!");
}
var correctAnswer = "Vatican";
if (x === correctAnswer) {
    alert("Correct!");
}

var correctAnswer = "Vatican";
if (x === correctAnswer) {
    score++;
    userIQ = "genius";
    alert("Correct!");
}






// chapter 11 Comparison operators
if (fullName === "Mark" + " " + "Myers")
    if (fullName === firstName + " " + "Myers")
        if (fullName === firstName + " " + "Myers")
            if (fullName === "firstName + " " + lastName"
if (totalCost === 81.50 + 135)
    if (totalCost === materialsCost + 135)
        if (totalCost === materialsCost + laborCost)
            if (x + y === a - b)


                if (yourTicketNumber !== 487208) {
                    alert("Better luck next time.");
                }

if (yourTicketNumber !== 487208) {
    alert("Better luck next time.");
}


if (1 >= 1)
    if (0 <= 1)
        if (1 <= 1)






// chapter 12 if...else and else if statements
 var x = prompt("Where does the Pope live?");
 if (x === "Vatican") {
 alert("Correct!");
 }

  var x = prompt("Where does the Pope live?");
  if (x === "Vatican") {
  alert("Correct!");
  }
  if (x !== "Vatican") {
  alert("Wrong answer");
  }
 
  
   if (x === "Vatican") {
   alert("Correct!");
   }
   else {
   alert("Wrong answer");
   }
  
    var correctAnswer = "Vatican";
    if (x === correctAnswer) {
    alert("Correct!");
    }
    else {
    score--;
    userIQ = "problematic";
    alert("Incorrect");
    }

    var correctAnswer = "Vatican";
    if (x === correctAnswer) {
    alert("Correct!");
    }
    else {
    score--;
    userIQ = "problematic";
    alert("Incorrect");
    }





// chapter 13 Testing sets of conditions
if (weight > 300 && time < 6) {
     alert("Come to our tryout!");
     }
     else {
     alert("Come to our cookout!");
     }

      if (weight > 300 && time < 6 && age > 17 && gender === "male") {
        alert("Come to our tryout!");
        }
        else {
        alert("Come to our cookout!");
        }
        

         if (SAT > avg || GPA > 2.5 || sport === "football") {
             alert("Welcome to Bubba State!");
             }
             else {
             alert("Have you looked into appliance repair?");
             }
            
             f (age > 65 || age < 21 && res === "U.S.") 

             f ((age > 65 || age < 21) && res === "U.S.") 

             if (age > 65 || (age < 21 && res === "U.S.")) 




// chapter 14 if statements nested
if ((x === y || a === b) && c === d) {
     g = h;
     }
     else {
     e = f;
     }
    
     if (c === d) {
        if (x === y) {
        g = h;
        }
        else if (a === b) {
        g = h;
        }
        else {
        e = f;
        }
        }
        else {
        e = f;
        }
    

// chapter 15 Array
var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";
var city3 = "Denver";
var city4 = "Los Angeles";
var city5 = "Seattle";

alert("Welcome to " + city3);

var cities = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];

alert("Welcome to " + cities[3]);

var mixedArray = [1, "Bob", "Now is", true];

// chapter 16 Arrays: Adding and removing elements

var pets = [];
 pets[0] = "dog";
 pets[1] = "cat";
 pets[2] = "bird";
 pets[3] = "lizard";
 pets[6] = "snake";
 pets[3] = "lizard";
 pets[4] = "fish";
 pets[5] = "gerbil";
 pets[6] = "snake";

pets.pop();

pets.push("fish", "ferret");





// chapter 17 Arrays Removing, inserting, and extracting elements
pets.shift();
pets.unshift("fish", "ferret");
pets.splice(2, 2, "pig", "duck", "emu");
pets.splice(2, 0, "pig", "duck", "emu");
pets.splice(2, 2);
var noPets = pets.slice(2, 4);









// chapter 18 for loops
var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

if (cityToCheck === cleanestCities[0]) {
    alert("It's one of the cleanest cities");
    }
    else if (cityToCheck === cleanestCities[1]) {
    alert("It's one of the cleanest cities");
    }
    else if (cityToCheck === cleanestCities[2]) {
    alert("It's one of the cleanest cities");
    }
     else if (cityToCheck === cleanestCities[3]) {
     alert("It's one of the cleanest cities");
     }
     else if (cityToCheck === cleanestCities[4]) {
     alert("It's one of the cleanest cities");
     }
    
     else {
     alert("It's not on the list");
     }
    
     for (var i = 0; i <= 4; i++) {
         if (cityToCheck === cleanestCities[i]) {
         alert("It's one of the cleanest cities");
         }
         }
        

// chapter 19 for loops Flags, Booleans, array length, and loopus interruptus
 var matchFound = "no";
 for (var i = 0; i <= 4; i++);
 if (cityToCheck === cleanestCities[i]) {
 matchFound = "yes";
 alert("It's one of the cleanest cities");
 }
 
 if (matchFound === "no") {
 alert("It's not on the list");
 }


  var matchFound = false;
  for (var i = 0; i <= 4; i++);
  if (cityToCheck === cleanestCities[i]) {
  matchFound = true;
  alert("It's one of the cleanest cities");
  }
  
  if (matchFound === false) {
  alert("It's not on the list");
  }
 
   var matchFound = false;
   for (var i = 0; i <= 4; i++);
   if (cityToCheck === cleanestCities[i]) {
   matchFound = true;
   alert("It's one of the cleanest cities");
   break;
   }
   
   if (matchFound === false) {
   alert("It's not on the list");
   }
  
   var numElements = cleanestCities.length;


    var numElements = cleanestCities.length;
 var matchFound = false;
 for (var i = 0; i < numElements; i++);
 if (cityToCheck === cleanestCities[i]) {
 matchFound = true;
 alert("It's one of the cleanest cities");
 break;
 }
 
 if (matchFound === false) {
 alert("It's not on the list");
 }


// chapter 20 for loops nested
 var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
 var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
 var fullNames = [];
 for (var i = 0; i < firstNames.length; i++) {
 for (var j = 0; j < lastNames.length; j++) {
 fullNames.push(firstNames[i] + lastNames[j]);
 }
 }


// chapter 21 Changing case
var cleanestCities = ["Cheyenne", "cheyenne", "Santa Fe", "santa fe", "Tucson", tucson", "Great Falls", "great falls", "Honolulu", "honolulu"];

 var cityToCheck = prompt("Enter your city");
 cityToCheck = cityToCheck.toLowerCase();
 var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
 for (var i = 0; i <= 4; i++) {
 if (cityToCheck === cleanestCities[i]) {
 alert("It's one of the cleanest cities");
 }
 }

  cityToCheck = cityToCheck.toLowerCase();
  cityToCheck = cityToCheck.toUpperCase();



// chapter 22 Strings: Measuring length and extracting parts
var firstChar = cityToCheck.slice(0, 1);
var someChars = cityToCheck.slice(2, 5);
var someChars = cityToCheck.slice(2);

 var firstChar = cityToCheck.slice(0, 1);
 var otherChars = cityToCheck.slice(1);
 firstChar = firstChar.toUpperCase();
 otherChars = otherChars.toLowerCase();
 var cappedCity = firstChar + otherChars;

 var month = prompt("Enter a month");
 var charsInMonth = month.length;
 if (charsInMonth > 3) {
 monthAbbrev = month.slice(0, 3);
 }
 
  var str = prompt("Enter some text");
  var numChars = str.length;
  for (var i = 0; i < numChars; i++) {
  if (str.slice(i, i + 2) === " ") {
  alert("No double spaces!");
  break;
 
  }
  }
 






// chapter 23 Strings: Finding segments

for (var i = 0; i < text.length; i++) {
     if (text.slice(i, i + 12) === "World War II") {
     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
     }
     }
    
     var firstChar = text.indexOf("World War II");


     var firstChar = text.indexOf("World War II");
     if (firstChar !== -1) {
     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
     }

      var text = "To be or not to be.";
      var segIndex = text.lastIndexOf("be");
     

// chapter 24 Strings: Finding a character at a location
var firstChar = firstName.slice(0, 1);
var firstChar = firstName.charAt(0)
var lastChar = name.charAt(name.length - 1);
 for (var i = 0; i < text.length; i++) {
     if (text.charAt(i) === "!") {
     alert("Exclamation point found!");
     break;
     }
     }
    


// chapter 25 Math Strings: Replacing characters 
 for (var i = 0; i < text.length; i++) {
     if (text.slice(i, i + 12) === "World War II") {
     text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
     }
     }
    
      var firstChar = text.indexOf("World War II");
      if (firstChar !== -1) {
      text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
      }
     
      var newText = text.replace("World War II", "the Second World War");

      text = text.replace("World War II", "the Second World War");

      var newText = text.replace(/World War II/g, "the Second World War");






// chapter 26 Rounding numbers
var numberOfStars = Math.round(scoreAvg);
scoreAvg = Math.round(scoreAvg);
var scoreAvg = Math.round(.0678437);
var scoreAvg = Math.ceil(.000001);
var scoreAvg = Math.floor(.999999);








// chapter 27 Generating random numbers

randomNumber
var randomNumber = Math.random();

 var bigDecimal = Math.random();
 var improvedNum = (bigDecimal * 6) + 1;
 var numberOfStars = Math.floor(improvedNum);


// chapter 28 Math expressions: Eliminating ambiguity
var currentAge = prompt("Enter your age.");

 var currentAge = prompt("Enter your age.");
 var yearsEligibleToVote = currentAge - 18;

var profit = "200" - "150";

var profit = "200" - "duck";

var result = "200" + 150;

 var currentAge = prompt("Enter your age.");
 var qualifying Age = currentAge + 1;

var myInteger = parseInt("1.9999");

var myFractional = parseFloat("1.9999");



// chapter 29 Converting strings to numbers, numbers to strings

 var integerString = "24"
 var num = Number(integerString);
 var floatingNumString = "24.9876";
 var num = Number(floatingNumString);
 var numberAsNumber = 1234;
 var numberAsString = numberAsNumber.toString();


// chapter 30 Controlling the length of decimals

var total = price + (price * taxRate);

var prettyTotal = total.toFixed(2);

var currencyTotal = "$" + prettyTotal;

var prettyTotal = total.toFixed();

 var str = num.toString();
 if (str.charAt(str.length - 1) === "5") {
 str = str.slice(0, str.length - 1) + "6";
 }
 num = Number(str);
 prettyNum = num.toFixed(2);


// chapter 31 Getting the current date and time

var dateString = rightNow.toString();

 var rightNow = new Date();
 var theDay = rightNow.getDay();

 var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 var now = new Date();
 var theDay = now.getDay();
 var nameOfToday = dayNames[theDay];

// chapter 32 Extracting parts of the date and time

 var d = new Date();
 var currentMonth = d.getMonth();

var dayOfMonth = d.getDate();

var currYr = d.getFullYear();

var currentHrs = d.getHours();

var currMins = d.getMinutes();

var currSecs = d.getSeconds()

var currMills = d.getMilliseconds();

var millsSince = d.getTime();


// chapter 33 Specifying a date and time
 var today = new Date();
 var doomsday = new Date("June 30, 2035");
 var msToday = today.getTime();
 var msDoomsday = doomsday.getTime();
 var msDiff = msDoomsday - msToday;
 var dDiff = msDiff / (1000 * 60 * 60 * 24);
 dDiff = Math.floor(dDiff);
 var msDiff = new Date("June 30, 2035").getTime() - new Date().getTime();
 var daysTillDoom = Mathfloor(msDiff / (1000 * 60 * 60 * 24));
var d = new Date("July 21, 1983 13:25:00");



// chapter 34 Changing elements of a date and time
 var d = new Date();
 d.setFullYear(2001);
 var d = new Date();
 d.setMonth(11);
 var d = new Date();
 d.setDate(15);
 var d = new Date();
 d.setHours(13);
 var d = new Date();
 d.setMinutes(05);
 var d = new Date();
 d.setSeconds(55);
 var d = new Date();
 d.setMilliseconds(867);




// chapter 35 Functions
 var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 alert("time: " + theHr + ":" + theMin);
ellTime();
 function tellTime() {
 var now = new Date();
 var theHr = now.getHours();
 var theMin = now.getMinutes();
 alert("Current time: "+ theHr + ":" + theMin);
 }
    
// chapter 36 Functions: Passing them data
 function greetUser() {
    alert("Hello, there.");
    }
    greetUser("Hello, there.");
     function greetUser(greeting) {
     alert(greeting);
     }
     var greeting = "Hello, there."
     greetUser(greeting);
     function greetUser(greeting) {
     alert(greeting);
     }                    
     var whatever = "Hello, there.";
     greetUser(whatever);
    
 var almostAMil = 999999;
 showBigNum(almostAMil);
howBigNum(999999);
 function showMessage(m, string, num);
 alert(m + string + num);
 
 var month = "March";
 showMessage(month, "'s winner number is ", 23);        










// chapter 37 Functions: Passing data back from them
var orderTot;
if (merchTot >= 100) {
orderTot = merchTot;
}
else if (merchTot < 50.01) {
orderTot = merchTot + 5;
}
else {
orderTot = merchTot + 5 + (.03 * (merchTot - 50));
 }
function calcTot(merchTot) {
    var orderTot;
    if (merchTot >= 100) {
    orderTot = merchTot;
    }
    else if (merchTot < 50.01) {
    orderTot = merchTot + 5;
    }
    else {
     orderTot = merchTot + 5 + (.03 * (merchTot - 50));
     }
     return orderTot;
     }
    var totalToCharge = calcTot(79.99);
    var totalToCharge = 85.00;
    var totalToCharge = merchTotal;
    var totalToCharge = merchTotal + ship + tax;
    var totalToCharge = calcTot(79.99);
    alert(calcTot(79.99));
    var orderTot = merchTot + calcTax(merchTot);
    var tot = calc(merchTot, calcTax(merchTot));
     function calcTot(price) {
     return price + calcShip(price);
     }
            




// chapter 38 Functions: Local vs. global variables

 var theSum
 addNumbers();
 function addNumbers() {
 theSum = 2 + 2;
 }
alert(theSum);
 function addNumbers() {
 var theSum = 2 + 2;
 }
alert(theSum);
 var theSum = 1000;
 addNumbers();
 function addNumbers() {
 var theSum = 2 + 2;
 }
 var theSum = addNumbers();
 function addNumbers() {
 var theSum = 2 + 2;
 return theSum;
 }
                                    

// chapter 39 switch statements: How to start them

 if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
     alert("Whoopee!");
     }
     else if (dayOfWk === "Fri") {
     alert("TGIF!");
     }
     else {
     alert("Shoot me now!");
     }

     switch(dayOfWk) {
        case "Sat" :
        alert("Whoopee");
        break;
        case "Sun" :
        alert("Whoopee");
        break;
        case "Fri" :
        alert("TGIF!");
         break;
         default :
         alert("Shoot me now!");
         }    



// chapter 40 switch statements: How to complete them

 switch(dayOfWk) {
     case "Sat" :
     alert("Whoopee");
     break;
     case "Sun" :
     alert("Whoopee");
     break;
     case "Fri" :
     alert("TGIF!");
     break;
     default :
     alert("Shoot me now!");
     }
     default:{
     alert("Shoot me now!");
    }



// chapter 41 while loops
 for (var i = 0; i <= 3; i++) {
     alert(i);
     }
     var i = 0;
     while (i <= 3) {
     alert(i);
     i++;
     }
        

// chapter 42 do...while loops
 var i = 0;
 while (i <= 3) {
 alert(i);
 i++;
 }
 var i = 0;
 do {
 alert(i);
 i++;
 } while (i <= 3);
 var i = 0;
 while (i < 0) {
 alert(i);
 i++;
 }
 var i = 0;
 do {
 alert(i);
 i++;
 } while (i < 0);





// chapter 43 Placing scripts
 <script>
 function sayHi() {
 alert("Hello world!");
 }
 function sayBye() {
 alert("Buh-bye!");
 }
 </script>
 function sayHi() {
     alert("Hello world!");
     }
     function sayBye() {
     alert("Buh-bye!");
     }
    script src="whatever.js"></script>




// chapter 44 Commenting

1 // This is a comment, ignored by the browser
2 for (var i = 0; i
3 if (animals[i] === "bat") {
4 animals[i] = "cat";
5 }
6 
var animals = []; // Declare an empty array

// Each comment line must begin with a pair
// of slashes, like this. (Most code editors,
// by the way, are smart enough to recognize
// comments and render them in a different
// color so they're easy for you to
// distinguish from code.)

/*
When a comment requires more than one line,
a block comment like this, with its opening
and closing tags, is the way to go.
*/


// chapter 45 Events: link
{/* <a href="#" onClick="alert('Hi');">Click</a>
<a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a>
<a href="JavaScript:void(0)" onClick="var greet="hi'; alert(greet);">Click</a> */}
 function popup(message) {
     alert(message);
     }
    <a href="JavaScript:void(0)" onClick="popup('Hi');">Click</a>
    











// chapter 46 Events: button
{/* <input type="button" value="Click" onClick="alert('Hello world!');"> */}

{/* <a href="summary-page.html"><img src="button-sum-pg.png"></a>

<img src="button-greet.png" onClick="alert('Hello world!');"> */}

{/* <img src="button-greet.png" onClick="greetTheUser();"> */}



// chapter 47 Events: mouse

{/* <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"> */}
{/* <h1 onMouseover="alert('Be sure to get your shopping done today.');">World Ends Tomorrow</h1>

<a href="index.html" onMouseover="this.style.color='green';">Home Page</a>

<p id="loris" onMouseover="expand();">Slow Loris: Mouse over for more info</p>

<img src="before-pic.jpg" onMouseover="src='after-pic.jpg'"

onMouseout="src='before-pic.jpg'"></img> */}










// chapter 48 Events: fields

// Email:<br>
// <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';">
// Email:<br>
// <input type="text" size="30" onFocus="this.style.backgroundColor='yellow';"
// onBlur="this.style.backgroundColor='white';"></input>
// Email:<br>
// <input type="text" size="30" onFocus="makeFieldYellow();" onBlur="makeFieldWhite();"></input>




// chapter 49 Reading field values

{/* <form>
Email:
<input type="text">
<input type="submit" value="Submit">
</form>
<form>
Email:
<input type="text" id="email">
<input type="submit" value="Submit">
</form>
<form onSubmit="checkAddress('email');">
Email:
<input type="text" id="email">
<input type="submit" value="Submit">
</form> */}
 function checkAddress(fieldId) {
 if (document.getElementById(fieldId).value === "") {
 alert("Email address required.");
 }
 }
  function checkAddress(fieldId) {
     var val = document.getElementById(fieldId).value;
     if val === "") {
     alert("Email address required.");
     }
     }
    


// chapter 50 Setting field values

{/* <form>
ZIP:<br>
<input type="text" id="zip" onBlur="fillCity();"><br>
City:<br>
<input type="text" id="city">
</form> */}

function fillCity() {
var cityName;
var zipEntered = document.getElementById("zip").value;
switch (zipEntered) {
case "60608" :
cityName = "Chicago";
break;
case "68114" :
cityName = "Omaha";
 break;
 case "53212" :
 cityName = "Milwaukee";
 }
 document.getElementById("city").value = cityName;
 }

// chapter 51 Reading and setting paragraph text

<p id="slowLoris">
Slow lorises are a group of several species of strepsirrhine primates which make up the genus Nycticebus.
<a href="javascript:void(0);" onClick="expandLoris();"><em>Click for more.</em></a>
</p>
 function expandLoris() {
     var expandedParagraph = "Slow lorises are a group of several species of trepsirrhine primates which"
    // make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
    // distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
    // adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
    // Slow lorises have a toxic bite, a rare trait among mammals.";
     document.getElementById("slowLoris").innerHTML = expandedParagraph;
     }
     function placeAList() {
     var listToPlace = "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
     document.getElementById("lorisList").innerHTML = listToPlace;
     }
     function peekAtContent() {
     var whatsThere = document.getElementById("content").innerHTML;
     }
                        










// chapter 52 Manipulating images and text

{/* <img src="Blobfish.jpg" id="ugly"...
<img src="blobfish.jpg" id="ugly" onClick="makeInvisible();"> */}


.hidden {display:none;}
 function makeInvisible() {
     document.getElementById("ugly").className = "hidden";
     }
      function makeBig() {
         document.getElementById("p1").className += " big";
         }
        




// chapter 53 Swapping images
{/* <img src="before-pic.jpg" onMouseover="src='after-pic.jpg'">
<img src="before-pic.jpg" id="before" onMouseover="swapPic();"> */}

 function swapPic() {
//  document.getElementById("before").src = "after-pic.jpg";
//  }
// <img src="before-pic.jpg" id="before" onMouseover="swapPic(id,'after-pic.jpg');">
//  {/* function swapPic(eId, newPic) { */}
//  document.getElementById(eId).src = newPic;
//  }











// chapter 54 Swapping images and setting classes
function swapPic() {
     document.getElementById("before").src = "after-pic.jpg";
     }
     function swapPic() {
         var pic = document.getElementById("before");
         pic.src = "after-pic.jpg";
         }
         function getAddress() {
             var link = document.getElementById("link1");
             var address = link.href;
             }
             function enlargeForm() {
                 var frm = document.getElementById("link1);
                 frm.className = "jumbo";
                 }
                                        
// chapter 55 Setting styles

 function makeBig() {
 document.getElementById("p1").className += " big";
 }
 function makeBig() {
     document.getElementById("p1").style.fontSize = "2em";
     }
    document.getElementById("pic99").style.cssFloat = "left";
    document.getElementById("div9").style.visibility = "hidden";
    document.getElementById("mainPic").style.margin = "0 10px 0 10px;";
    var m = document.getElementById("mainPic").style.margin;
    var m = document.getComputedStyle("mainPic").margin;
    



// chapter 56 Target all elements by tag name
getElementById(the id).style.fontSize = "2em";
var par = document.getElementsByTagName("p");
{/* <p>This bed is too small.</p>
<p>This bed is too big.</p>
<p>This bed is just right.</p> */}
var textInMiddleParagraph = par[1].innerHTML;
par[1].innerHTML = "This SUV is too big.";
for (var i = 0; i < par.length; i++) {
     par[i].style.fontFamily = "Verdana, Geneva, sans-serif";
     }
    var pics = document.getElementsByTagName("img");
    var divs = document.getElementsByTagName("div");
    var ulists = document.getElementsByTagName("ul");
    




// chapter 57 Target some elements by tag name

var pars = document.getElementsByTagName("p");
var textInMiddleParagraph = pars[1].innerHTML;
 var e = document.getElementByID("rules");
 var paragraphs = e.getElementsByTagName("p");
ocument.getElementsByTagName("p");
.getElementsByTagName("p");
 var t = document.getElementById("table9");
 var cells = t.getElementsByTagName("td");
 for (var i = 0; i < cells.length; i++) {
 cells[i].style.backgroundColor = "pink";
 }








// chapter 58 The DOM


1st level: document
2nd level: <html>
3rd level: <head>
4th level: <title>
5th level: Simple document
</title>
</head>
3rd level <body>
4th level <p>
5th level There's not much to this.
</p>
</body>
</html>

1st level: document
2nd level: <html>
3rd level: <head>
4th level: <title>
5th level: Simple document
</title>
</head>
3rd level <body>
4th level <div>
5th level <p>
6th level There's not much to this.
</p>
5th level <p>
6th level Nor to this.
</p>
</div>
</body>
</html>





// chapter 59 The DOM: Parents and children


1st level: document
2nd level: <html>
3rd level: <head>
4th level: <title>
5th level: Simple document
</title>
</head>
3rd level <body>
4th level <div>
5th level <p>
6th level There's not much to this.
</p>
5th level <p>
6th level Nor to this.
</p>
</div>
</body>
</html>




// chapter 60 The DOM: Finding children

var eField = document.getElementById("email");
var eField = document.getElementsByTagName("p");
var contents = p[2].innerHTML;
 var d = document.getElementById("div3");
 var p = d.getElementsByTagName("p");
 var contents = p[2].innerHTML;
<body>
<div id="cal">
<p>Southern Cal is sunny.</p>

<p>Northern Cal is rainy.</p>
<p>Eastern Cal is desert.</p>
</div>
<div id="ny">
<p>Urban NY is crowded.</p>
<p>Rural NY is sparse.</p>
</div>
</body>

 var p = document.getElementsByTagName("p");
 var contents = p[4].innerHTML;
 var div = document.getElementById("ny");
 var p = div.getElementsByTagName("p");
 var contents = p[1].innerHTML;
 var p = document.childNodes[0].childNodes[1].childNodes[1].childNodes[1];
 var contents = p.innerHTML;


<body>
<div id="cal">
<p>Southern Cal is sunny.</p>
<p>Northern Cal is rainy.</p>
<p>Eastern Cal is desert.</p>
</div>
<div id="ny">
<p>Urban NY is crowded.</p>
<p>Rural NY is sparse.</p>
</div>
</body>

 var d = document.getElementById("ny");
 var p = d.childNodes[1];
 var contents = p.innerHTML;





// chapter 61 Math expressions: Eliminating ambiguity
// chapter 62 Math expressions: Eliminating ambiguity
// chapter 63 Math expressions: Eliminating ambiguity
// chapter 64 Math expressions: Eliminating ambiguity
// chapter 65 Math expressions: Eliminating ambiguity
// chapter 66 Math expressions: Eliminating ambiguity
// chapter 67 Math expressions: Eliminating ambiguity
// chapter 68 Math expressions: Eliminating ambiguity
// chapter 69 Math expressions: Eliminating ambiguity
// chapter 70 Math expressions: Eliminating ambiguity
// chapter 71 Math expressions: Eliminating ambiguity
// chapter 72 Math expressions: Eliminating ambiguity
// chapter 73 Math expressions: Eliminating ambiguity
// chapter 74 Math expressions: Eliminating ambiguity
// chapter 75 Math expressions: Eliminating ambiguity
// chapter 76 Math expressions: Eliminating ambiguity
// chapter 77 Math expressions: Eliminating ambiguity
// chapter 78 Math expressions: Eliminating ambiguity
// chapter 79 Math expressions: Eliminating ambiguity
// chapter 80 Math expressions: Eliminating ambiguity
