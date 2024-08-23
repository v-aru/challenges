# TypeScript Coding Challenge: Simple Inventory Management System
Challenge Overview
Your task is to create a basic inventory management system using TypeScript. This system will track items in an inventory, including their name, quantity, and category. The challenge will test your ability to define types and interfaces, work with arrays, and implement functions for adding, updating, and retrieving items from the inventory.

# Requirements
Define an Item Interface: Create an interface named Item that includes the following properties:

id: A unique identifier for the item (type string).
name: The name of the item (type string).
quantity: The quantity of the item in stock (type number).
category: The category of the item (type string).
Implement an Add Function: Write a function named addItem that takes an Item object and adds it to the inventory. If an item with the same id already exists, the function should not add the item and instead log an error message.

Implement an Update Quantity Function: Write a function named updateItemQuantity that updates the quantity of a specific item identified by id. The function should accept the id and the new quantity as parameters. If the item does not exist, log an error message.

Implement a Get Item Function: Write a function named getItem that retrieves an item by id and prints its details. If the item does not exist, log an error message.

Optional: Category Filtering Function: Create a function named filterItemsByCategory that returns all items belonging to a specified category.

# Starter Code - Refer to index.ts

# Instructions
Start by defining the Item interface as per the requirements above.
Implement the addItem, updateItemQuantity, and getItem functions, ensuring they operate correctly according to the type definitions.
Pay attention to edge cases, such as adding an item that already exists or updating an item that is not in the inventory.
If you choose to implement the optional filterItemsByCategory function, ensure it accurately filters and returns items.
Test your system with various operations to ensure it functions correctly, including adding new items, updating quantities, retrieving items, and filtering by category.
Evaluation Criteria
Correctness: The system must accurately perform the required operations, adhering to the given specifications.
Type Safety: Demonstrates effective use of TypeScript's type system to ensure type correctness throughout the application.
Code Organization: Code should be logically structured, well-commented, and easy to understand.
Error Handling: Proper handling and reporting of edge cases and errors in operations.
Submission Guidelines
Prepare and submit a TypeScript file containing your implementation. Ensure your code is clean, well-organized, and includes comments explaining your logic.

This challenge is designed to assess your practical TypeScript skills, focusing on creating type-safe and efficient data manipulation functions. Good luck, and enjoy the process of building a simple yet functional inventory management system!