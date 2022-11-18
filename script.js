// creat function

function checkLeap(){
    var input = document.getElementById("year_input").value;
    // apply if condition of leap year
    // leap year comes after every 4 year so
    if(input%4 == 0){
        document.getElementById("res").innerText 
        = input + " is Leap year";
    }else{
        document.getElementById("res").innerText 
        = input + " is not Leap year";
    }
}