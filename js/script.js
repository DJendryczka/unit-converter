



let length = document.getElementById('length');
let volume = document.getElementById('volume');
let mass = document.getElementById('mass');



function convert() {
    let convertEl = document.querySelector("input").valueAsNumber;

    
    
    let num = convertEl

    console.log(typeof convertEl, convertEl, num)
    function convertLenght() {
        let resultFeet = num * 3.28084;
        let resultMeter = num * 0.3048;
        let resultFeetRound = Math.round(resultFeet * 1000) / 1000;
        let resultMeterRound = Math.round(resultMeter * 1000) / 1000;
        length.textContent = `${num}meters = ${resultFeetRound}feet | ${num}feet =${resultMeterRound}meters`;
    }
    
    function convertVolume() {
        let resultGallon = num * 0.264172052;
        let resultLiter = num * 3.78541178;
        let resultGallonRound = Math.round(resultGallon * 1000) / 1000;
        let resultLiterRound = Math.round(resultLiter * 1000) / 1000;
        volume.textContent = `${num}liters = ${resultGallonRound} gallons | ${num} gallons = ${resultLiterRound} liters`
    }
    
    function convertMass() {
        let resultPound = num * 2.20462262;
        let resultKilo = num * 0.45359237;
        let resultKiloRound = Math.round(resultKilo * 1000) / 1000;
        let resultPoundRound = Math.round(resultPound * 1000) / 1000;
        mass.textContent = `${num} kilos = ${resultPoundRound} pounds | ${num} pounds = ${resultKiloRound} kilos`
    }

    convertLenght()
    convertVolume()
    convertMass()
    
    
}
function clearMessage() {
    document.getElementById('convert-num').value = ' ';
    console.log('click');
}
















