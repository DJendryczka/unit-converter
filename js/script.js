let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');

// Refactoring code using toFixed method insted of Math.round

function convert() {
  let convertEl = document.querySelector('input').valueAsNumber;

  let num = convertEl;

  console.log(typeof convertEl, convertEl, num);
  function convertLenght() {
    let resultFeet = num * 3.28084;
    let resultMeter = num * 0.3048;
    // let resultFeetRound = Math.round(resultFeet * 1000) / 1000;
    // let resultMeterRound = Math.round(resultMeter * 1000) / 1000;
    length.textContent = `${num}meters = ${Number(resultFeet).toFixed(
      3
    )}feet | ${num}feet =${Number(resultMeter).toFixed(3)}meters`;
  }

  function convertVolume() {
    let resultGallon = num * 0.264172052;
    let resultLiter = num * 3.78541178;
    volume.textContent = `${num}liters = ${Number(resultGallon).toFixed(
      3
    )} gallons | ${num} gallons = ${Number(resultLiter).toFixed(3)} liters`;
  }

  function convertMass() {
    let resultPound = num * 2.20462262;
    let resultKilo = num * 0.45359237;
    mass.textContent = `${num} kilos = ${Number(resultPound).toFixed(
      3
    )} pounds | ${num} pounds = ${Number(resultKilo).toFixed(3)} kilos`;
  }

  convertLenght();
  convertVolume();
  convertMass();
}
function clearMessage() {
  document.getElementById('convert-num').value = ' ';
  console.log('click');
}
