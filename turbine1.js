//alert("hello");

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.innerHTML = "";
        alert("Sorry, this demo is only for desktop or landscape ratios.");
    } 
}

var x = window.matchMedia("(max-width: 601px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

$("#fireLLZ").hide();
$("#fireLLZ1").hide();
$("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit1.png'>");

/*------------------------------5 to 10 -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 10;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";

}


function startRotation(){
	setInterval(rotateSlow, 400);// had a bit of help from instructor
    $("#KW").text("200");  
    $("#WS").text("5");
    $("#RPM").text("5");
    $("#VOLTS").text(".2");
    $("#AMPS").text("1");
    $("#vibFreq").text("0");
    $("#vibFreq1").text("0");
    $("#vibFreq2").text("0");
    $("#vibFreq3").text("0");     
    $("#def").text("5");
    $("#def2").text("10");
    $("#genTemp").text("80");
    $("#grbxTemp").text("80");
    $("#pressure").text("60");
    $("#levelZ").text("89");
    $("#tachometer").empty();
    $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit2.png'>");
    $("#birdy").animate({left:"-400px"},10000);
    $("#videoBox").empty(); 
    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoSPics1.png'>"); 
}


/*------------------------------11 to 21 -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow1(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 10;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";

}

function startRotation1(){
	setInterval(rotateSlow1, 300);// had a bit of help from instructor
    $("#KW").text("440");  
    $("#WS").text("15");
    $("#RPM").text("10");
    $("#VOLTS").text(".4");
    $("#AMPS").text("1.1");
    $("#vibFreq").text("0");
    $("#vibFreq1").text("0");
    $("#vibFreq2").text("0");
    $("#vibFreq3").text("0");     
    $("#def").text("8");
    $("#def2").text("11.5");
    $("#genTemp").text("82");
    $("#grbxTemp").text("82");
    $("#pressure").text("60");
    $("#levelZ").text("89");
    $("#tachometer").empty();
    $("#birdy").animate({left:"-400px"},12000);
    $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit2.png'>");
    $("#videoBox").empty(); 



    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoSPics1.png'>");
}

/*------------------------------21 to 30 -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow2(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 10;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";

}

function startRotation2(){
	setInterval(rotateSlow2, 200);// had a bit of help from instructor
    $("#KW").text("980");  
    $("#WS").text("26");
    $("#RPM").text("15");
    $("#VOLTS").text(".7");
    $("#AMPS").text("1.4");
    $("#vibFreq").text(".3");
    $("#vibFreq1").text(".3");
    $("#vibFreq2").text(".3");
    $("#vibFreq3").text(".3");     
    $("#def").text("10");
    $("#def2").text("11.3");
    $("#genTemp").text("105");
    $("#grbxTemp").text("120");
    $("#pressure").text("60");
    $("#levelZ").text("90");//oil expansion
    $("#tachometer").empty();
    $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit3.png'>");
    $("#birdy").animate({left:"-400px"},14000);
    $("#videoBox").empty(); 
    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoSPics1.png'>"); 
}

/*------------------------------31 to 40 -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow3(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 10;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";

}

function startRotation3(){
	setInterval(rotateSlow3, 100);// had a bit of help from instructor
    $("#KW").text("2200");  
    $("#WS").text("38");
    $("#RPM").text("26");
    $("#VOLTS").text("1");
    $("#AMPS").text("2.2");
    $("#vibFreq").text(".5");
    $("#vibFreq1").text(".5");
    $("#vibFreq2").text(".5");
    $("#vibFreq3").text(".5");     
    $("#def").text("16");
    $("#def2").text("11.4");
    $("#genTemp").text("145");
    $("#grbxTemp").text("160");
    $("#pressure").text("60");
    $("#levelZ").text("90");//oil expansion
    $("#tachometer").empty();
    $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit4.png'>");
    $("#birdy").animate({left:"-400px"},20000);
    $("#videoBox").empty(); 
    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoSPics1.png'>"); 
}
/*------------------------------41 to 50 -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow4(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 20;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";

}

function startRotation4(){
	setInterval(rotateSlow4, 100);// had a bit of help from instructor
    $("#KW").text("3000");  
    $("#WS").text("45");
    $("#RPM").text("38");
    $("#VOLTS").text("1");
    $("#AMPS").text("3");
    $("#vibFreq").text("3");
    $("#vibFreq1").text("3");
    $("#vibFreq2").text("3");
    $("#vibFreq3").text("3");     
    $("#def").text("24");
    $("#def2").text("11.4");
    $("#genTemp").text("165");
    $("#grbxTemp").text("200");
    $("#pressure").text("60");
    $("#levelZ").text("90");//oil expansion
    $("#tachometer").empty();
    $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit5.png'>");
    $("#birdy").animate({left:"800px"},15000);
    $("#videoBox").empty(); 
    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoSPics1.png'>");  
}

/*------------------------------51 to 60 -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow5(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 40;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";

}

function startRotation5(){
	setInterval(rotateSlow5, 100);// had a bit of help from instructor
    $("#KW").text("3000");  //limited by circuitry
    $("#WS").text("58");
    $("#RPM").text("50");//no brake installed
    $("#VOLTS").text("1");//limited by circuitry
    $("#AMPS").text("3");//limited by circuitry
    $("#vibFreq").text("9");//out of balance
    $("#vibFreq1").text("9");
    $("#vibFreq2").text("9");
    $("#vibFreq3").text("9");     
    $("#def").text("60");
    $("#def2").text("11.8");
    $("#genTemp").text("200");
    $("#grbxTemp").text("250");
    $("#pressure").text("56");//drop due to oil thinning out
    $("#levelZ").text("91");//oil expansion
    $("#tachometer").empty();
    $("#tachometer").append("<img src='takyInit6.png'>");
    $("#birdy").animate({left:"1000px"},12000);
    $("#birdy").animate({left:"2100px"},12000); 
    $("#tachometer").empty(); 
    $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit6.png'>"); 
    $("#videoBox").empty(); 
    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoSPicsVibrate.png'>");  
}


/*------------------------------60+ -------------------------*/
var rotationAngle = 0;// had a bit of help from instructor
function rotateSlow6(){
	//console.log("Spinning..");
	rotationAngle = rotationAngle + 57;// had a bit of help from instructor
    // Code for Safari
    document.getElementById("bladeZZZ").style.WebkitTransform = "rotate(" + rotationAngle + "deg)"; 
    // Code for IE9                                                          // had a bit of help from instructor
    document.getElementById("bladeZZZ").style.msTransform = "rotate(" + rotationAngle + "deg)"; 
    // Standard syntax
    document.getElementById("bladeZZZ").style.transform = "rotate(" + rotationAngle + "deg)";
    
 
    $("#fireLLZ").fadeIn(1000);
    $("#fireLLZ").fadeOut(1000);
   $("#fireLLZ1").fadeIn(750);
    $("#fireLLZ1").fadeOut(750); 
  

}

function startRotation6(){
	setInterval(rotateSlow6, 100);// had a bit of help from instructor
    $("#KW").text("OFF");  //limited by circuitry
    $("#WS").text("&%OFFLINE");
    $("#RPM").text("&%OFFLINE");//no brake installed
    $("#VOLTS").text("&%OFFLINE");//limited by circuitry
    $("#AMPS").text("&%OFFLINE");//limited by circuitry
    $("#vibFreq").text("&%OFFLINE");
    $("#vibFreq1").text("&%OFFLINE");
    $("#vibFreq2").text("&%OFFLINE");
    $("#vibFreq3").text("&%OFFLINE");     
    $("#def").text("&%OFFLINE");
    $("#def2").text("&%");
    $("#genTemp").text("&%OFFLINE");
    $("#grbxTemp").text("&%OFFLINE");
    $("#pressure").text("&%OFFLINE");//drop due to oil thinning out
    $("#levelZ").text("&%OFFLINE");//oil expansion
   $("#birdy").animate({left:"1000px"},12000);
   $("#birdy").animate({left:"2100px"},3000); 
   $("#tachometer").empty(); 
   $("#tachometer").append("<img class='tachClass' src='http://www.brookesportfolio.com/WEB/takyInit7.png'>");
   $("#videoBox").empty(); 
    $("#videoBox").append("<img class='videoZ' src='http://www.brookesportfolio.com/WEB/videoStatic.png'>");
}


function Clutch(){

        location.reload();
}

function myFunction(x) {
    if (x.matches) { // If media query matches
        document.body.innerHTML = "";
        alert("Sorry, this demo is only for desktop or landscape ratios.");
    } 
}

var x = window.matchMedia("(max-width: 601px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes