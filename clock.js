function digital_clock()
{
var date=new Date()
var hours=date.getHours()
var minutes=date.getMinutes()
var seconds=date.getSeconds()
/*
*Calls the addZero function to add a zero infront of minutes or seconds if they are below 10, i.e.
*to make it look like 12:07:09, not 12:7:9
*/
minutes=addZero(minutes);
seconds=addZero(seconds);
/*
*Puts hours in the element with the hours id,
*minutes in the element with the minutes id,
*and seconds in the element with the seconds id
*/
document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;
/*
*Runs every half second
*/
setTimeout('digital_clock()', 500)
}
/*
Adds a zero infront of minutes or seconds
*/
function addZero(min_or_sec)
{
if (min_or_sec < 10)
{min_or_sec="0" + min_or_sec}
return min_or_sec
}
