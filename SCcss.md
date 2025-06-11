# Simple-Calc
simple calculator (calc means calculator abbrevtion)
/* Styling for body */
body {
    font-family: Arial, sans-serif;+
    background-color: #f4f4f4;
    margin: 0;
    padding:0;
}

/* Styling for calculator container */
.calculator {
    max-width: 300px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 0 10px ☐ rgba(0, 0, 0, 0.1);
}

/* Styling for result display input field */
    #result {
    width: 90%;
    padding: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: right;
}

/* Styling for calculator buttons */ .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}


/* Styling for calculator buttons */
    button {
    padding: 10px;
    background-color: #4caf50;
    color: #fff;
    border: none;
    cursor: pointer;
}


/* Hover styling for calculator buttons */
    button:hover {
    background-color: #45a049;
}
