interface Contact {
    // TODO: Define the Contact interface
    id: number;
    name: string;
    email: string;
    phone?: string;
  }
  
  let addressBook: Contact[] = [];
  let nextId = 1;
  
  function addContact(contact: Contact): void {
    // TODO: Implement the addContact function
    contact.id = nextId++;
    addressBook.push(contact);
  }
  
  function removeContact(id: number): void {
    // TODO: Implement the removeContact function
    addressBook = addressBook.filter((contact) => contact.id !== id);
  }
  
  interface searchResult {
  results: Contact[];
  message: string;
  }

  function searchContacts(query: string): searchResult {

    let message = "";
    // TODO: Implement the searchContacts function
    if (typeof query !== 'string' || query.trim() === '') {
      message = ("Invalid query: Query must be a non-empty string!");
      return { results: [], message };
      //throw new Error("Invalid query: Query must be a non-empty string!");
    }

    const queryLowerCase = query.toLowerCase();
    const results =  addressBook.filter((contact) => {
        return contact.name.toLowerCase().includes(queryLowerCase) ||
           contact.email?.toLowerCase().includes(queryLowerCase) || 
           (contact.phone && contact.phone.toLowerCase().includes(queryLowerCase));
  });

  if (query.trim() === '' && results.length === 0) {
    message = "No contacts found matching the search query!";
    //throw new Error("No contacts found matching the search query!");
  } else {
    message = `${results.length} contact(s) found.`
  }

  return {results, message};
}


const contact1 = {
    id: 1, 
    name: "Arunima TypeScript", 
    email: "arunima111@yahoo.com", 
    phone: "1234567898"
}
const contact2 = {
    id: 2, 
    name: "Anand JavaScript", 
    email: "anand111@yahoo.com", 
    phone: "1234567887"
}
const contact3 = {
    id: 3,
    name: "Aditya C#", 
    email: "aditya111@yahoo.com", 
    phone: "1234567765"
}
const contact4 = {
    id: 4,
    name: "Malini c++", 
    email: "malini111@yahoo.com", 
}

//Adding contacts to address book
addContact(contact1);
addContact(contact2);
addContact(contact3);
addContact(contact4);
console.log("addressBook: ", addressBook);

//Searching for contacts - valid
const searchValid1 = "anand111";
console.log(`Search for email with ${searchValid1}: ` , searchContacts(searchValid1));
const searchValid2 = "c++";
console.log(`Search for name with ${searchValid2}: ` ,searchContacts(searchValid2));

//Searching for contacts - invalid case
const searchInvalid1 = '     ';
console.log(`Search for empty string: ` , searchContacts(searchInvalid1));
const searchInvalid2 = "Andy";
console.log(`Search for string ${searchInvalid2}: ` , searchContacts(searchInvalid2));


//Removing contacts from addressbook 
removeContact(3);
console.log("After removing an ID, the Address Book now contains: ", addressBook);
