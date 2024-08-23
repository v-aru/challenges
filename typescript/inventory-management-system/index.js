var inventory = [];
var nextId = 1;
function addItem(item) {
    // TODO: Implement the addItem function
    var existingItem = inventory.find(function (i) { return i.id === item.id; });
    if (existingItem) {
        console.error("Item with ID " + item.id + " already exists.");
    }
    else {
        inventory.push(item);
    }
}
function updateItemQuantity(id, quantity) {
    // TODO: Implement the updateItemQuantity function
    var itemIndex = inventory.findIndex(function (i) { return i.id === id; });
    if (itemIndex !== -1) {
        inventory[itemIndex].quantity = quantity;
    }
    else {
        console.error("Item with ID " + id + " not found.");
    }
}
function getItem(id) {
    // TODO: Implement the getItem function
    var item = inventory.find(function (i) { return i.id === id; });
    if (item) {
        console.log("Item details fetched:");
        console.log(item);
        // console.log("ID:", item.id);
        // console.log("Name:", item.name);
        // console.log("Quantity:", item.quantity);
        // console.log("Category:", item.category);
    }
    else {
        console.error("Item with ID " + id + " not found.");
    }
}
function filterItemsByCategory(category) {
    // TODO: Implement the filterItemsByCategory function (Optional)
    return inventory.filter(function (i) { return i.category === category; });
}
//Adding items to system
var item1 = {
    id: "1",
    name: "Fererro Rocher",
    quantity: 200,
    category: "chocolates"
};
var item2 = {
    id: "1",
    name: "After Eight",
    quantity: 250,
    category: "chocolates"
};
var item3 = {
    id: "3",
    name: "Sprite",
    quantity: 400,
    category: "beverage"
};
var item4 = {
    id: "4",
    name: "Coco Cola Zero",
    quantity: 400,
    category: "beverage"
};
var item5 = {
    id: "5",
    name: "Bread",
    quantity: 500,
    category: "grains"
};
var item6 = {
    id: "6",
    name: "Barillo Spaghetti Pasta",
    quantity: 200,
    category: "grains"
};
//Adding items to the IMS
addItem(item1);
console.log('New item added!');
console.log("Inventory now consists of: ", inventory);
addItem(item3);
console.log('New item added!');
console.log("Inventory now consists of: ", inventory);
addItem(item4);
console.log('New item added!');
console.log("Inventory now consists of: ", inventory);
addItem(item5);
console.log('New item added!');
console.log("Inventory now consists of: ", inventory);
addItem(item6);
console.log('New item added!');
console.log("Inventory now consists of: ", inventory);
//Testing if additem function will work if id already exists
addItem(item2);
item2 = {
    id: "2",
    name: "After Eight",
    quantity: 250,
    category: "chocolates"
};
//On updating the id, the addItem function works
addItem(item2);
console.log('New item added!');
console.log("Inventory now consists of: ", inventory);
//Update quantity of an item:
updateItemQuantity("3", 500);
console.log("Item quantity updated!");
console.log("Updated inventory system: ", inventory);
//Negative test for update quantity
updateItemQuantity("8", 1000);
//Fetch item from system
getItem("3");
//Negative test for id not in system
getItem("9");
//Fetch items for a category
console.log(filterItemsByCategory("grains"));
