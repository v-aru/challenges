const { getRelocatedCity } = require('./index.js');
/*
function testGetRelocatedCity() {
    // Test case 1: Both city1 and city2 are provided
    var city1 = { name: "Tokyo", country: "Japan" };
    var city2 = { name: "Berlin", country: "Germany" };
    var expected1 = { name: "Tokyo", country: "Germany" };
    var result1 = getRelocatedCity(city1, city2);
    
    console.assert(
      result1.name === expected1.name && result1.country === expected1.country,
      'Test case 1 failed'
    );
  
    // Test case 2: Only city1 is provided, city2 should default to Berlin, Germany
    var expected2 = { name: "Tokyo", country: "Germany" };
    var result2 = getRelocatedCity(city1);
  
    console.assert(
      result2.name === expected2.name && result2.country === expected2.country,
      'Test case 2 failed'
    );
  
    // Test case 3: Check that properties are copied correctly
    var city3 = { name: "Sydney", country: "Australia", population: 5000000 };
    var city4 = { name: "Paris", country: "France" };
    var expected3 = { name: "Sydney", country: "France", population: 5000000 };
    var result3 = getRelocatedCity(city3, city4);
  
    console.assert(
      result3.name === expected3.name &&
      result3.country === expected3.country &&
      result3.population === expected3.population,
      'Test case 3 failed'
    );
  }
  */

  describe('getRelocatedCity', () => {
    test('returns the correct city object with updated country', () => {
      const city1 = { name: "Tokyo", country: "Japan" };
      const city2 = { name: "Berlin", country: "Germany" };
      const result = getRelocatedCity(city1, city2);
      expect(result).toEqual({ name: "Tokyo", country: "Germany" });
    });
});