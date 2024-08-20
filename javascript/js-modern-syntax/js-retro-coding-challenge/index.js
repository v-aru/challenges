function getNameAndCountry(city) {
    return [city.name, city.country];
}

function getRelocatedCity (city1, city2) {
    if (!city2) {
        city2 = {name: "Berlin", country: "Germany"};
    }

    var nameAndCountry = getNameAndCountry(city2);
    var country = nameAndCountry[1];
    var relocatedCity = {}; 
    for (var prop in city1) {
        relocatedCity[prop] = city1[prop];
    }
    relocatedCity.country = country;
    return relocatedCity;
}


module.exports = {
    getRelocatedCity,
  };