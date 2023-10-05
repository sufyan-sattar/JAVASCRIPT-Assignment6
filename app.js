//   Chapter 26 to 30

// Question 1:-
// var number= prompt("Enter a positive integer.")
// document.write ("Number= " +number+"<br>")

// if(isNaN(number) || number<0){
//     alert("Invalid integer.Please enter a positive integer.")
// }else{
// var round= Math.round(number)
// var ceil= Math.ceil(number)
// var floor= Math.floor(number)

// document.write ("Round off= " +round +"<br>")
// document.write ("Ceil= " +ceil +"<br>")
// document.write ("floor= " +floor +"<br>")
// }

// Question 2:-
// var number = prompt("Enter a negative floating point number.")
// document.write("Number= " + number + "<br>")

// if (isNaN(number) || number >= 0) {
//     alert("Invalid integer.Please enter a negative floating point number.")
// } else {
//     var round = Math.round(number)
//     var ceil = Math.ceil(number)
//     var floor = Math.floor(number)

//     document.write("Round off= " + round + "<br>")
//     document.write("Ceil= " + ceil + "<br>")
//     document.write("floor= " + floor + "<br>")
// }

// Question 3:-
// var num= prompt("Enter a Number.")
// var absolutevalue= Math.abs(num)
// document.write ("The absolute value of " +num +" is " +absolutevalue)

// Quetion 4:-
// var dice= Math.floor(Math.random() * 6) +1
// document.write ("Random dice value: " +dice)

// Question 5:-
// var randomnumber= Math.floor(Math.random() * 2) +1

// if(randomnumber < 2){
//     document.write (randomnumber +"<br>" +"Random coin value: " +"Tails")
// }else{
//     document.write (randomnumber +"<br>" +"Random coin value: " +"Heads")
// }

// Question 6:-
// var randomnumbr=Math.floor(Math.random() * 100) +1
// document.write("Random number between 1 to 100: " +randomnumbr)

// Question 8:-
// var number= Math.floor(Math.random()*10) +1
// var userinput= prompt("Enter a number between 1 to 10.")

// if(number==userinput){
//     document.write ("Congratulations,you guessed the secret number")
// } else{
//     alert ("Try Again!")
// }


//  Chapter 31 to 34

// Question 1:-
// var now= new Date()
// document.write (now)

// Question 2:-
// var now = new Date()
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// var monthIndex= (now.getMonth())
// var monthName= monthNames[monthIndex]

// alert ("Current Month: " +monthName)

// Question 3:-
// var now= new Date()
// var dayNames= ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

// var dayIndex= (now.getDay())
// var dayName= dayNames[dayIndex]

// alert ("Today is: " +dayName)

// Question 4:-
// var now = new Date()
// var day = now.getDay()

// if (day == 0 || day == 6){
//     document.write ("It's Fun Day")
// }else{
//     document.write ("It's not Fun Day")
// }

// Question 5:-
// var now= new Date()
// var day= now.getDay()

// if(day<16){
//     document.write ("First fifteen days of the month")
// }else{
//     document.write ("Last days of the month")
// }

// Qustion 6:-
// var now = new Date()
// document.write("Current Date: " + now + "<br>")


// Question 7:-
// var now= new Date()
// var hours= now.getHours()

// if (hours < 12){
//     alert ("It's AM.")
// }else {
//     alert ("It's PM.")
// }

// Question 8:-
// var now= new Date("December 31 2020")
// document.write ("Later Date: " +now)

// Question 9:-
// var ramdandate = new Date("June 18 2015")
// var currentdate = new Date()

// var daypast = Math.floor((ramdandate - currentdate) / (1000 * 60 * 60 * 24))
// alert(daypast +" days have passed since 1st Ramdan,2015.")

// Question 10:-
// var passeddate = new Date("December 5 2015")
// var currentdate = new Date()
// var secondspast = Math.floor((passeddate - currentdate) / 1000)
// document.write(secondspast +" seconds had passed since December 5,2015")

// Question 11:-
// var now = new Date()
// document.write ("Current Date: " +now +"<br>")
// var hours = now.getHours()
// now.setHours(hours + 1)
// document.write ("1 hour ago,it was " +now)

// Question 12:-
// var now= new Date()
// var years= now.getFullYear()
// now.setFullYear(years-100)
// alert("100 years back,it was " +now)

// Question 13:-
// var now=new Date().getFullYear()
// var age= prompt("Enter your age")
// var birthyear= now-age
// document.write("Your birth year is " +birthyear)

// Question 14:-
// document.write("<h1>" + "Chay-Electric Bill" + "</h1>")
// document.write("Customer Name: " + "<b>" + "Bakra" + "</b>" + "<br>")
// var now = new Date()
// var monthsname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var monthindex = now.getMonth()
// var monthname = monthsname[monthindex]
// document.write("Month: " + "<b>" + monthname + "</b>" + "<br>")
// var numberofunits = 410
// document.write("Number of Units: " + "<b>" + numberofunits + "</b>" + "<br>")
// var chargesperunit = 16
// document.write("Charges Per Units: " + "<b>" + chargesperunit + "</b>" + "<br>" + "<br>")
// var amountpayable = (numberofunits * chargesperunit)
// document.write("Net Amount Payable (within Due Date): " + "<b>" + amountpayable + "</b>" + "<br>")
// var latepaymentsurcharge = 350
// document.write("Late Payment Surcharge: " + "<b>" + latepaymentsurcharge + "</b>" + "<br>")
// var grossamount = amountpayable + latepaymentsurcharge
// document.write("Gross Amount Payable (after Due Date): " + "<b>" + grossamount + "</b>")