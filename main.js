

function startTime(){
    var today = new Date();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();


    // time formator

    if(hour <= 12){
        hour = hour;
    }
    else {
        hour = hour - 12;
    }

    //add zero if less than zero

    hour = concatZero(hour);
    minutes = concatZero(minutes);
    seconds = concatZero(seconds);


    // am pm

    var mode ;
    if(hour <=11){
        mode = "PM";
    } 
    else{
        mode= "AM";
    }
    document.getElementById("time").innerHTML = `${hour}: ${minutes}: ${seconds} ${mode}`;
    setTimeout( startTime, 1000);
}

function concatZero(value){
    if(value < 10){
        value = '0' + value;
    }
    return value;
}


// screen 

let screen = document.getElementById("screen");


// type to the screen

function press(numvalue){
    if(screen.value == 0){
        screen.value = '';
    }

    screen.value += numvalue;
} 


// clear screen

function clearScreen(value){
    screen.value = value;
}

//Delete key

function backSpace(){
    // const space = screen;
     screen.value =  screen.value.substring(0, screen.value.length-1);
    
}

// Calculate function
 function calculate(){
     if(screen.value != ''){

     try{
        clearScreen(eval(screen.value));
     }
     catch(err){
        clearScreen("Bad Expression");
     }
    }
}

// function to calculate sine, cosine, and tan

function sine(){
    screen.value = Math.sin(screen.value * Math.PI / 180);

}

function cosine(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
    
}

function tan(){
    screen.value = Math.tan(screen.value * Math.PI / 180);
    
}

// Function to calculate asin, acos, stan

function invsine(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI );
}

function invcosine(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI );
}

function invtan(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI );
}

// function to calculate the natural logarithum

function In(){
    screen.value = Math.log(screen.value);
}

function log(){
    screen.value = Math.log10(screen.value);
}

// Function for percentage

function percentage () {
    screen.value = (screen.value / 100);
}

// function for square
function square(){
    screen.value = Math.pow(screen.value, 2);
}

// function for cube
function cube(){
    screen.value = Math.pow(screen.value, 3);
}

// function for the sqrt
function sqrt (){
    screen.value = Math.sqrt(screen.value);
}

// function for plus and minus
function plusminus(){
    screen.value = screen.value * (-1)
}