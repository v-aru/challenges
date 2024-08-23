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
    // TODO: Implement the searchContacts function
    return addressBook.filter(function (contact) {
        var _a;
        var lowerQuery = query.toLowerCase();
        return contact.name.toLowerCase().includes(lowerQuery) ||
            ((_a = contact.email) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(lowerQuery)) ||
            (contact.phone && contact.phone.toLowerCase().includes(lowerQuery));
    });
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
//Searching for contacts
console.log("Search for email with: anand111 : ", searchContacts("anand111"));
console.log("Search for name with c++ : ", searchContacts("c++"));
//Removing contacts from addressbook 
removeContact(3);
console.log("Address Book now contains: ", addressBook);
