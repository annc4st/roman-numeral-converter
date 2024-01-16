const inputNumber = document.getElementById("number");
const convertBtn= document.getElementById("convert-btn");
const outputDiv= document.getElementById("output");
/*
Create an object that maps Roman numeral symbols to their decimal values 
and an empty string to store the Roman numeral representation.
Iterate through the Roman numeral symbols in descending order of their decimal values. 
For each symbol, calculate how many times it fits into the input number and 
append that symbol to the result string that many times.
Subtract the portion of the number converted to Roman numerals 
from the input. Repeat this process for all symbols. And then return the result string.
*/

const converter = (input) => {
    const yearMap = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1,     
    }

    let result;
    let str = '';
    let inputNumber = Number(input);

    if (input.length === 0){
        result = "Please enter a valid number";
      } else if(inputNumber <1) {
      result = "Please enter a number greater than or equal to 1"
      } else if (inputNumber >= 4000){
        result = "Please enter a number less than or equal to 3999"
      } else {
        for (let i of Object.keys(yearMap)) { 
            // console.log("yearMap[i] >>", yearMap[i])
           
            let q = Math.floor(inputNumber / yearMap[i]); 
            // console.log("q>> " , q);
            inputNumber -= q * yearMap[i]; 
            // console.log("inputNumber  " , inputNumber)
            str += i.repeat(q); 
        } 
        result = str;
      }
    // outputDiv.innerText = `${result}`;
    // outputDiv.classList.remove('hidden');
    return result;
}
 

const showResult = () => {
    const userInput = inputNumber.value;
    outputDiv.innerText = `${converter(userInput)}`;
    outputDiv.classList.remove('hidden');
}

convertBtn.addEventListener("click", () => {
    showResult();
  });
  
inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        showResult();
    }
  });
 