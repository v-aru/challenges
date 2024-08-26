# TypeScript Coding Challenge: Generic Data Transformer
## Challenge Overview
In this advanced TypeScript coding challenge, you will create a generic data transformer utility. This utility will transform arrays of objects based on a set of transformation rules provided at runtime. The challenge is designed to test your understanding of advanced TypeScript features such as generics, type inference, and type guards, without relying on classes.

# Requirements
Generic Transformation Function: Implement a function named transformData that:

Accepts an array of objects (items) and a transformation rule set (rules).
Applies transformation rules to each item in the array.
Returns a new array of transformed objects, preserving the original array.
Transformation Rules:

A transformation rule is an object where each key specifies a property to be transformed, and its value is a function defining the transformation.
Transformation functions receive the original value of the property and return the transformed value.
The transformation should be applied to all objects in the input array that have the properties defined in the rules.
Type Safety:

The transformData function should be generic, supporting arrays of any object type.
Use TypeScript's type system to ensure that only properties existing on the input items can be specified in the rules.
The return type of transformData should reflect the transformed object type based on the provided rules.

# Starter Code 
Refer to index.ts

# Instructions
Implement the transformData function following the requirements. Pay special attention to the type safety of the function, ensuring it can work with any object types and enforce the transformation rules correctly.
Consider edge cases such as properties in the rules not existing on all objects in the input array or transformation functions returning a different type than the original property.
Test your utility with various data sets and transformation rules to ensure its versatility and robustness.
Evaluation Criteria
Generics and Type Safety: Effective use of generics to ensure type safety across different use cases.
Functionality: The utility should accurately apply transformation rules to the input data and return correctly transformed data.
Code Quality: The code should be clean, well-organized, and properly commented.
Edge Case Handling: The utility should handle edge cases gracefully and not introduce type errors or inconsistencies.
Submission
Submit your TypeScript file containing the implementation of the generic data transformer utility. Ensure your code is well-commented, explaining your approach and any TypeScript features utilized.

This coding challenge aims to test your ability to work with advanced TypeScript features to create flexible, type-safe utilities. Good luck!