# TypeScript Coding Challenge: Weather Dashboard Data Processor
## Challenge Overview
This coding challenge involves creating a data processing module for a weather dashboard application using TypeScript. You will work with interfaces, type guards, and generics to ensure type safety and functionality. The module will process raw weather data fetched from an API and present it in a structured format suitable for a front-end application. This challenge does not require the use of classes but focuses on advanced TypeScript features and data manipulation.

# Requirements
Weather Data Interface: Define an interface WeatherData that represents the raw weather data. It should include properties such as temperature, humidity, windSpeed, and description. Note that some properties might be optional or vary in type.

Processed Data Interface: Define an interface ProcessedWeatherData that represents the processed data. It should include properties like avgTemperature, maxTemperature, minTemperature, detailedDescription, and isWindy (boolean).

Data Processor Function: Implement a generic function processWeatherData<T> that takes an array of T (where T extends WeatherData) and returns an array of ProcessedWeatherData. This function should calculate averages, maximums, minimums, and other relevant processed data from the raw input.

Type Guard for Windy Conditions: Implement a type guard function isWindy to check if the windSpeed in a WeatherData object exceeds a certain threshold, indicating windy conditions.

Filter Function: Create a function filterByDescription that takes an array of ProcessedWeatherData and a string description, and returns all items that include the description string in their detailedDescription.

# Starter Code
Refer to index.ts

# Instructions
Start by defining the WeatherData and ProcessedWeatherData interfaces based on the requirements.
Implement the processWeatherData function to process the raw weather data. Ensure calculations handle varying data types correctly, especially for temperature.
Write the isWindy type guard function to evaluate windy conditions based on windSpeed.
Complete the filterByDescription function to filter processed data based on the description.
Evaluation Criteria
Type Safety: Effective use of TypeScript's typing system to prevent common data processing errors.
Correctness: The processing functions should accurately compute and transform the raw data into the desired format.
Edge Case Handling: Your implementation should correctly handle optional properties and varying data types within the WeatherData interface.
Code Quality: Code should be clear, concise, and well-commented.
Submission
Please submit a TypeScript file (.ts) containing your solution. Ensure your submission is well-organized and includes comments explaining your logic, especially for the more complex parts of the data processing.

This coding challenge aims to test your ability to work with complex data structures and type systems in TypeScript, focusing on real-world scenarios you might encounter while developing data-driven applications. Good luck!