//Get reference to result input field
let result = document.getElementById("result");

//Function to append value to result field
function appendToResult(value) {
    result.value += value;
}

//Function to clear results field
function clearResult() {
    result.value = "";
}

//Function to calculate result
function calculate() {
    try{
        //Evaluate and display result
        result.value = eval(result.value);
    } catch (error) {
        //Display error messgae if calculation fails
        result.value = "Error";
    }
}
