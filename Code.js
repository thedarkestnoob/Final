var intervalIds = new Array();
//Start Button function
function startButtonClick(){
    document.getElementById("btnStart").disabled = true;
    document.getElementById("btnStop").disabled = false;
    let x =document.getElementById("DisplayCountdown");
    runtime(x);
}
//stop Button Function
function stopButtonClick(){
    document.getElementById("btnStart").disabled = false;
    document.getElementById("btnStop").disabled = true;

    for(i = 0; i < 11; i++){
        clearTimeout(intervalIds[i]);
    }
    


}

//this function is for the Name promt
function getUserInput(){

    do{
        FirstName = prompt("Enter Your First Name: ")
        LastName = prompt("Enter Your Last Name: ")

        Names = FirstName + " " + LastName;

        //For When The Name Is Too Long.
        if (Names.length > 20){
            alert("Your Name Is TOO LONG! Make it LESS Than 20 Charecters!")
        }

    }while(Names.length > 20);
}


//this function is the Count Down
function runtime(x){
    currTime = 50;
var timeout = 1000;
    for(i = 0; i < 11; i++){
        intervalIds[i] = setTimeout(function(){
            x.innerHTML = currTime
            currTime = currTime - 5;
        }, timeout);
        timeout = timeout + 1000;
//This is A Loop Alert
        if(i > 3){
            alert("Welcome!" + i);
        }
    }
    setTimeout(function(){
        alert("Blast Off!")
    }, timeout);
}




function startbuttonclick(){
    
}


