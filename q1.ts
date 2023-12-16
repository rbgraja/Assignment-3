function CelsiustoFahrenheit(Celsius:number){
    return ((9 / 5 * Celsius) + 32)
}

const Ctemperature = 25
const Cresult = CelsiustoFahrenheit(Ctemperature)
console.log(`${Ctemperature} is equal to ${Cresult}`);

// to reverse
function FahrenheittoCelsius(Fahrenheit:number){
    return 5 / 9 * (Fahrenheit - 32) 
}

const Ftemperature = 77
const Fresult = FahrenheittoCelsius(Ftemperature)
console.log(`${Ftemperature} is equal to ${Fresult}`);






