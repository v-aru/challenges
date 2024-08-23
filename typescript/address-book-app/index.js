var addressBook = [];
var nextId = 1;
function addContact(contact) {
    // TODO: Implement the addContact function
    contact.id = nextId++;
    addressBook.push(contact);
}
function removeContact(id) {
    // TODO: Implement the removeContact function
    addressBook = addressBook.filter(function (contact) { return contact.id !== id; });
}
function searchContacts(query) {
    var message = "";
    // TODO: Implement the searchContacts function
    if (typeof query !== 'string' || query.trim() === '') {
        message = ("Invalid query: Query must be a non-empty string!");
        return { results: [], message: message };
        //throw new Error("Invalid query: Query must be a non-empty string!");
    }
    var queryLowerCase = query.toLowerCase();
    var results = addressBook.filter(function (contact) {
        var _a;
        return contact.name.toLowerCase().includes(queryLowerCase) ||
            ((_a = contact.email) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(queryLowerCase)) ||
            (contact.phone && contact.phone.toLowerCase().includes(queryLowerCase));
    });
    if (query.trim() === '' && results.length === 0) {
        message = "No contacts found matching the search query!";
        //throw new Error("No contacts found matching the search query!");
    }
    else {
        message = "".concat(results.length, " contact(s) found.");
    }
    return { results: results, message: message };
}
var contact1 = {
    id: 1,
    name: "Arunima TypeScript",
    email: "arunima111@yahoo.com",
    phone: "1234567898"
};
var contact2 = {
    id: 2,
    name: "Anand JavaScript",
    email: "anand111@yahoo.com",
    phone: "1234567887"
};
var contact3 = {
    id: 3,
    name: "Aditya C#",
    email: "aditya111@yahoo.com",
    phone: "1234567765"
};
var contact4 = {
    id: 4,
    name: "Malini c++",
    email: "malini111@yahoo.com",
};
//Adding contacts to address book
addContact(contact1);
addContact(contact2);
addContact(contact3);
addContact(contact4);
console.log("addressBook: ", addressBook);
//Searching for contacts - valid
var searchValid1 = "anand111";
console.log("Search for email with ".concat(searchValid1, ": "), searchContacts(searchValid1));
var searchValid2 = "c++";
console.log("Search for name with ".concat(searchValid2, ": "), searchContacts(searchValid2));
//Searching for contacts - invalid case
var searchInvalid1 = '     ';
console.log("Search for empty string: ", searchContacts(searchInvalid1));
var searchInvalid2 = "Andy";
console.log("Search for string ".concat(searchInvalid2, ": "), searchContacts(searchInvalid2));
//Removing contacts from addressbook 
removeContact(3);
console.log("After removing an ID, the Address Book now contains: ", addressBook);
