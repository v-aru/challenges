interface WeatherData {
    temperature: number | number[];
    humidity: number;
    windSpeed?: number;
    description?: string;
}
  
interface ProcessedWeatherData {
    avgTemperature: number;
    maxTemperature: number;
    minTemperature: number;
    detailedDescription: string;
    isWindy: boolean;
}
  
function processWeatherData<T extends WeatherData>(
    data: T[]
  ): ProcessedWeatherData[] {
    // TODO: Implement the function
    return data.map((item) => {
      const temp = data.map(d => d.temperature);
      const avgTemp = temp.reduce((sum, temp) => sum + temp , 0) / temp.length;
      const maxTemp = Math.max(...temp);
      const minTemp = Math.min(...temp);

      const detailedTemp = item.description ? item.description : "No description available";
      const checkIsWindy = isWindy(item);

      return {
        avgTemp,
        maxTemp,
        minTemp,
        detailedDescription,
        isWindy
      }
    })
}
  
function isWindy(data: WeatherData, threshold: number = 25): boolean {
    // TODO: Implement the type guard
    return data.windSpeed !== undefined && data.windSpeed > threshold;
}
  
function filterByDescription(
    data: ProcessedWeatherData[],
    description: string
  ): ProcessedWeatherData[] {
    // TODO: Implement the function
    return data.filter((item) => item.detailedDescription.includes(description));
}

//Test cases:
const weather1: WeatherData = { temperature: 18, windSpeed: 30, description: "Windy day", humidity: 45 };
const weather2: WeatherData = { temperature: 22, windSpeed: 10, description: "Calm and warm", humidity:35 };

console.log("\nDefault parameters: ");
console.log(`Weather for conditions ${JSON.stringify(weather1)} : `);
console.log(`For ${weather1.windSpeed}kmph, the weather is ${isWindy(weather1) ? "windy." : "not windy."}`); // true (since windSpeed 30 > 25)
console.log(`Weather for conditions ${JSON.stringify(weather2)} : `);
console.log(`For ${weather2.windSpeed}kmph, the weather is ${isWindy(weather2) ? "windy." : "not windy."}`); // false (since windSpeed 10 < 25)

console.log("\nWith parameters: ");
console.log(`Weather for conditions ${JSON.stringify(weather1)} : `);
console.log(`For ${weather1.windSpeed}kmph, the weather is ${isWindy(weather1, 20) ? "windy." : "not windy."}`); // true (since windSpeed 30 > 20)
console.log(`Weather for conditions ${JSON.stringify(weather2)} : `);
console.log(`For ${weather1.windSpeed}kmph, the weather is ${isWindy(weather2, 5) ? "windy." : "not windy."}`); // true (since windSpeed 10 > 5)