function weathertemperature(temperature) {
    if (temperature > 20) {
        return "Wear summer clothes";
    }
    else {
        return "Wear warm clothes";
    }
}
console.log(weathertemperature(25));
