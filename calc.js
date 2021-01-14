let numField1 = document.getElementById('numField1');
let numField2 = document.getElementById('numField2');
let resultField = document.getElementById('resultField');
let form = document.getElementById('xIsWhatOfY');

form.addEventListener('submit', function(event) {
    if (!numField1.value || !numField2.value) {
        alert("Please enter values into the fields");
    } else {
        let x = parseFloat(numField1.value);
        let y = parseFloat(numField2.value);

        let result = x / y;
        let percent = result * 100;

        resultField.innerHTML = "Answer: " + percent + "%";
        event.preventDefault();
        
    }
})
