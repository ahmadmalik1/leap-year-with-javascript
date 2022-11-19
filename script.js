// creating a function to print its table

function printtable(){
    // getting ids from input field and result div
    var input_number = document.getElementById("table_input").value;
    var table_number = document.getElementById("table_number");
    var result = document.getElementById("result");

    // lets apply loop
    table_number.innerText = input_number;
    result.innerText = "";
    for (var i=1; i<=10; i++ ){

        result.innerText += input_number + " x " + i + " = " + input_number*i + "\n";

    }

}