// chp 31 to 34 start.

// var currentDate = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var Day = date.getDay();
// var Today = dayNames[Day];
// document.write(currentDate)



// var currentDate = new Date();
// var currentMonth = currentDate.getMonth();

// var monthNames = [
//     "January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];
// var currentMonthName = monthNames[currentMonth];
// alert("Current month: " + currentMonthName);



// var currentDate = new Date();
// var currentDay = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
// var firstThreeLetters = currentDay.slice(0, 3);
// alert("First three letters of the current day: " + firstThreeLetters);


// var currentdate=new Date();
// var currentDay=currentdate.getDay();
// if(currentDay===6 || currentDay===0){
//     alert("its funday today")
// }else{
//     alert("its not funday today")
// }


// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var currentdate=new Date();
// var currentDay=currentdate.getDay();
// if(currentDay<16){
//     alert("first fifteen days")
// }else{
//     alert("last days of the month")
// }


// var d=new Date();
// var cart = d.getTime();
// document.write(cart)


// var currentTime=new Date();
// var currentHour=currentTime.getHours();
// if(currentHour<12){
//     alert("its AM")
// }else{
//     alert("its PM")
// }

// var laterDate=new Date(2020, 11, 31)
// document.write("laterDate:" +laterDate)



// var ddate = new Date(2015,5,18);
// var currentDate = new Date();
// var timeDifference = currentDate.getTime() - ddate.getTime();
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed);


// var ddate=new Date(2015,5,18);
// var currentDate=new Date();
// var timeDifference=currentDate.getTime()-ddate.getTime();
// var daysPassed=Math.floor(timeDifference/(1000*60*60*24));
// alert("days past :" +daysPassed)


// var date=new Date(2016,7,12);
// var refrenceDate=new Date(2015,0,1);
// var timeDifference=refrenceDate.getTime()-date.getTime();
// document.write("seconds elapsed between the refrence date and the beginning of 2015:" +timeDifference);


// var currentDate = new Date();
// var currentHours = currentDate.getHours();
//  currentDate.setHours(currentHours + 1);
// document.write("Updated Date: " + currentDate);


// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years back: " + currentDate);


// var age=prompt("enter your age")
// var currentDate =new Date();
// var currentYear=currentDate.getFullYear();
// var birthYear=currentYear-age;
// document.write("your age is:" +birthYear)

// var age=prompt("dnjef")
// var currentDate=new Date();
// var currentYear=currentDate.getFullYear();
// var birthYear=currentYear-age;
// alert("your birth year is :" +birthYear)


// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,

// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

// function generateBill() {

// var customerName = prompt("Enter customer name:");
// var currentMonth = prompt("Enter current month:");
// var numberOfUnits = parseFloat(prompt("Enter number of units:"));
// var chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
// var latePaymentSurcharge = parseFloat(prompt("Enter late payment surcharge:"));

//     var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
// var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);


//     document.write("Customer Name: " + customerName);
// document.write("<br>")
// document.write("Current Month: " + currentMonth);
// document.write("<br>")

// document.write("Number of Units: " + numberOfUnits.toFixed(2));
//     document.write("<br>")

//     document.write("Charges per Unit: " + chargesPerUnit.toFixed(2));
// document.write("<br>")

// document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
// document.write("<br>")

//     document.write("Late Payment Surcharge: " + latePaymentSurcharge.toFixed(2));
//     document.write("<br>")

//     document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
// }

// generateBill();

// chp 31 to 34 end.


// chp 35 to 38 start.

// function dateTime(){
//     var currentDate=new Date();
//     var datetime=currentDate.toLocaleString()
//     document.write(datetime)
// }
// dateTime()

//  function firstLastname(){
//     var firstName=prompt("enter your 1st name")
//     var lastNmae=prompt("enter last name")
//     var greet= (firstName +  " "  +lastName)
//     document.write(greet)
//  }
//  firstLastname();



// function addNumbers() {
//     var num1 = parseFloat(prompt("Enter the first number:"));
//     var num2 = parseFloat(prompt("Enter the second number:"));
//     var sum = num1 + num2;
//      return sum;
// }
// var result=addNumbers();
// alert("The sum of the two numbers is: " + result);


// const operator = prompt("Enter Operetor (either +, -, * or /):");
// const number1 = (prompt("Enter value"));
// const number2 = (prompt("Enter value"));

// function add() {
//     let sum = number1 + number2;
//     return sum
// }
// function sub() {
//     let min = number1 - number2;
//     return min
// }
// function mul() {
//     let multiply = number1 * number2;
//     return multiply;
// }
// function div() {
//     let divide = number1 / number2;
//     return divide;
// }
// let val = 0;

// if (operator == "+") {
//     val = add(number1, number2);
// }
// else if (operator == "-") {
//     val = sub(number1, number2);
// }
// else if (operator == "*") {
//     val = mul(number1, number2)
// }
// else if (operator == "/") {
//     val = div(number1, number2);
// }

// document.write("value 01: " + number1 + " value 02: " + number2 + " RESULT: " + val)



// function square(number) {
//     return number * number;
// }
// let result = square(4);
// document.write(result)

// function func() {
//     function fact(num) {
//        if (num < 0){
//           return -1;
//        }
//        else if(num == 0){
//           return 1;
//        }
//        else {
//           let result = 1;
//           for(var i = num; i > 1; i--){
//              result *= i;
//           };
//           return result;
//        }
//     };
//     const num = 4;
//     document.getElementById("para").innerHTML = fact(num);
//  };


// function factorial(n){
// if(n=0){
//     return 1
// }
// else{
//     return factorial(n-1)*n
// }
// }
// document.write(factorial(10))


// function displayCounting(start, end) {
// var rear=prompt("enter your 1st no")
// var rear=prompt("enter your 2nd no")
//     if (start <= end) {
//       for (let i = start; i <= end; i++) {
//         document.write(i + "<br>");
//       }
//     } else {
//       for (let i = start; i >= end; i--) {
//         document.write(i + "<br>");
//       }
//     }
//   }
//   displayCounting(1,30)


// let a;
// let b;
// let c;

// a=window.prompt("enter side A")
// a=Number(a)

// b=window.prompt("enter side B")
// b=Number(b)

// c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2))
// document.write("side c:" ,c)


// function calculateArea(width, height) {
//     var area = width * height;
//     return area;
// }
// var result = calculateArea(2, 9);
// console.log(result)

// function ispalindrome(str){
// var val=str.split("").reverse().join("")
// if(str.toLowerCase()===val.toLowerCase()){
//     document.write(str+ "is palindrome")
// }
// else{
//     document.write(str+ "not palindrome")
// }
// }
// document.write(ispalindrome("fox"))

// function ispalindrome(str){
//     var val=str.split("").reverse().join("")
//     if(str.toLowerCase()===val.toLowerCase()){
//         document.write(str+"is palindrome")
//     }
//     else{
//         document.write(str+"is not palindrome")
//     }
// }
// document.write(ispalindrome("yoyo"))



// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];

//   for(var i = 0; i < array1.length; i++){
//newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));


// function long(str){
// var newString=str.split(' ')
// newString.sort(function(a,b){return b.length-a.length})
// return newString[0];
// } document.write(long("keyword are"));


// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function countOccurrences(str, letter) {

//     var count = 0;

//     str = str.toLowerCase();
//     letter = letter.toLowerCase();


//     for (var i = 0; i < str.length; i++) {

//         if (str[i] === letter) {

//             count++;
//         }
//     }

//     return count;
// }

// var inputString = 'google';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
//document.write(occurrences)



// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//      document.write("The circumference is " + circumference);
// }

// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area);
// }

// var radius = 5;
// calcCircumference(radius)
// calcArea(radius)

// function power(a,b){
// return Math.pow(a,b)
// }
// var result= power(2,4)
// document.write(result);


// var year=2004;
// if((year%4==0)&&(year%100!=0))
//     console.log(year+"is a leap year")
//     else if(year%400==0)
//     console.log(year+"is a leap year")
//     else
//     console.log(year +"is not a leap year")

// function calculateS(a, b, c) {
//   return (a + b + c) / 2;
// }

// function calculateTriangleArea(a, b, c) {
//     var s = calculateS(a, b, c);
//     var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }
// var sideA = 3;
// var sideB = 4;
// var sideC = 5;

//   var area = calculateTriangleArea(sideA, sideB, sideC);
// console.log(area)


// function calculateAverage(subject1, subject2, subject3) {
//     var sum = subject1 + subject2 + subject3;
//     var average = sum / 3;
//     return average;
// }

// function calculatePercentage(subject1, subject2, subject3) {
//     var totalMarks = 300
//     var obtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (obtainedMarks / totalMarks) * 100;
//     return percentage.toFixed(2)
// }

// function mainFunction(subject1, subject2, subject3) {
//     var average = calculateAverage(subject1, subject2, subject3);
//     var percentage = calculatePercentage(subject1, subject2, subject3);

//     document.write("Average: " + average);
//     document.write("Percentage: " + percentage + "%");
// }
// mainFunction(75, 80, 85);


// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i;
//         }
//     }
//     return -1;
// }
// var str = "Hello, World!";
// var char = "e";

// var index = customIndexOf(str, char);
// document.write(index)


// function deleteVowels(sentence) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//     let result = '';

//     for (let i = 0; i < sentence.length; i++) {
//         if (!vowels.includes(sentence[i])) {
//             result += sentence[i];
//         }
//     }

//     return result;
// }

// const sentence = "Hello World!";
// const result = deleteVowels(sentence);
// console.log(result)


// function countSuccessiveVowels(text) {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let i = 0; i < text.length - 1; i++) {
//       const currentChar = text[i].toLowerCase();
//       const nextChar = text[i + 1].toLowerCase();

//       if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
//         switch (currentChar + nextChar) {
//   case 'ea':
//   case 'ei':
//   case 'ia':
//   case 'ie':
//   case 'io':
//   case 'iu':
//   case 'oa':
//   case 'oi':
//   case 'ou':
//   case 'ua':
//   case 'ue':
//   case 'ui':
//     count++;
//     break;
//   default:
//     break;
//         }
//       }
//     }

//     return count;
//   }

//   const text = "Pleases read this application and give me gratuity";
//   const occurrenceCount = countSuccessiveVowels(text);
//   console.log(occurrenceCount)


// function convertToMeters(distanceKm) {
//     var distanceM = distanceKm * 1000;
//     return distanceM;
//   }

//   function convertToFeet(distanceKm) {
//     var distanceFt = distanceKm * 3280.84;
//     return distanceFt;
//   }

//   function convertToInches(distanceKm) {
//     var distanceIn = distanceKm * 39370.1;
//     return distanceIn;
//   }

//   function convertToCentimeters(distanceKm) {
//     var distanceCm = distanceKm * 100000;
//     return distanceCm;
//   }

//   var distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

//   var distanceM = convertToMeters(distanceKm);
//   var distanceFt = convertToFeet(distanceKm);
//   var distanceIn = convertToInches(distanceKm);
//   var distanceCm = convertToCentimeters(distanceKm);

//   document.write("Distance in meters:", distanceM);
//   document.write("Distance in feet:", distanceFt);
//   document.write("Distance in inches:", distanceIn);
//   document.write("Distance in centimeters:", distanceCm);


// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const hourlyRate = 12.00;

//     if (hoursWorked <= regularHours) {
//         return 0;
//     }

//     const overtimeHours = hoursWorked - regularHours;
//     const overtimePay = overtimeHours * hourlyRate;

//     return overtimePay;
// }


// const hoursWorked = 45;
// const overtimePay = calculateOvertimePay(hoursWorked);
// document.write("Overtime Pay:", overtimePay);


// var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));


// var num_100s = 0;
// var num_50s = 0;
// var num_10s = 0;

// num_100s = Math.floor(amount);

// amount %= 100;

// num_50s = Math.floor(amount / 50);

// amount %= 50;

// num_10s = Math.floor(amount / 10);

// console.log("Number of 100s:", num_100s);
// console.log("Number of 50s:", num_50s);
// console.log("Number of 10s:", num_10s);


var amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
var num_100s=0
var num_50s=0
var num_10s=0
num_100s=Math.floor(amount)
amount %=100
num_100s=Math.floor(amount/50)
amount %=50
num_10s=Math.floor(amount/10)
amount %=50
console.log("number of 100_s",num_100s)
console.log("number of 10_s",num_50s)
console.log("number of 10_s",num_10s)



// chp 35 to 38 end.









