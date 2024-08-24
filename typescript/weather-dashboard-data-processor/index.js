function processWeatherData(data) {
    // TODO: Implement the function
    return data.map(function (item) {
        var temp = data.map(function (d) { return d.temperature; });
        var avgTemp = temp.reduce(function (sum, temp) { return sum + temp; }, 0) / temp.length;
        var maxTemp = Math.max.apply(Math, temp);
        var minTemp = Math.min.apply(Math, temp);
        var detailedTemp = item.description ? item.description : "No description available";
        var checkIsWindy = isWindy(item);
        return {
            avgTemp: avgTemp,
            maxTemp: maxTemp,
            minTemp: minTemp,
            detailedDescription: detailedDescription,
            isWindy: isWindy
        };
    });
}
function isWindy(data, threshold) {
    if (threshold === void 0) { threshold = 25; }
    // TODO: Implement the type guard
    return data.windSpeed !== undefined && data.windSpeed > threshold;
}
function filterByDescription(data, description) {
    // TODO: Implement the function
    return data.filter(function (item) { return item.detailedDescription.includes(description); });
}
//Test cases:
var weather1 = { temperature: 18, windSpeed: 30, description: "Windy day", humidity: 45 };
var weather2 = { temperature: 22, windSpeed: 10, description: "Calm and warm", humidity: 35 };
console.log("\nDefault parameters: ");
console.log("Weather for conditions ".concat(JSON.stringify(weather1), " : "));
console.log("For ".concat(weather1.windSpeed, "kmph, the weather is ").concat(isWindy(weather1) ? "windy." : "not windy.")); // true (since windSpeed 30 > 25)
console.log("Weather for conditions ".concat(JSON.stringify(weather2), " : "));
console.log("For ".concat(weather2.windSpeed, "kmph, the weather is ").concat(isWindy(weather2) ? "windy." : "not windy.")); // false (since windSpeed 10 < 25)
console.log("\nWith parameters: ");
console.log("Weather for conditions ".concat(JSON.stringify(weather1), " : "));
console.log("For ".concat(weather1.windSpeed, "kmph, the weather is ").concat(isWindy(weather1, 20) ? "windy." : "not windy.")); // true (since windSpeed 30 > 20)
console.log("Weather for conditions ".concat(JSON.stringify(weather2), " : "));
console.log("For ".concat(weather1.windSpeed, "kmph, the weather is ").concat(isWindy(weather2, 5) ? "windy." : "not windy.")); // true (since windSpeed 10 > 5)
