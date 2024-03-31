let celsius = document.getElementById('celsius');
let  fahrenhite = document.getElementById('fahrenhite');


celsius.oninput =()=>{
    let output = (parseFloat(celsius.value)*9)/5+32;
    fahrenhite.value = parseFloat(output.toFixed(2));
}
fahrenhite.oninput =()=>{
    let output = ((parseFloat(fahrenhite.value)-32)*5) /9;
    celsius.value = parseFloat(output.toFixed(2));
}