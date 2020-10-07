console.log("is in hello.js")

var today = new Date();
var hourNow = today.getHours();
var greeting = "";
if (hourNow <= 12){
  greeting = "Good Morning";
}
else{
  greeting = "Good Afternoon"
}

document.write(greeting)
