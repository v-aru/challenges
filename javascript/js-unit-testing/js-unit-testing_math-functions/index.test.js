import { add, subtract, multiply, divide } from './index.js';

/*
test("add() return 5 if called with add(2,3)", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test("subtract() return 7 if called with subtract(10,3)", () => {
    const result = subtract(10, 3);
    expect(result).toBe(7);
})

test("multiply() return 30 if called with multiply(10,3)", () => {
    const result = multiply(10, 3);
    expect(result).toBe(30);
})

test("divide() return 5 if called with divide(10,2)", () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
})
    */

//Add function test:
test("add() return 5 if called with add(2,3)", () => {
    const result = add(2, 3);
    expect(result).toBe(5);
});

test("add() return -10 if called with add(-12, 2)", () => {
    const result = add(-12, 2);
    expect(result).toBe(-10);
    expect(result).toBeLessThan(0);
});

test("add() return value close to 0.3 if called with add(0.1, 0.2)", () => {
    const result = add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
});

//Subtract function test:
test("subtract() return 10 if called with subtract(15,5)", () => {
    const result = subtract(15,5);
    expect(result).toBe(10);
});

test("add() return -14 if called with subtract(-12, 2)", () => {
    const result = subtract(-12, 2);
    expect(result).toBe(-14);
    expect(result).toBeLessThan(0);
});

//Multiply function test:
test("multiply() return 8 if called with multiply(2,4)", () => {
    const result = multiply(2,4);
    expect(result).toBe(8);
});

test("multiply() return -8 if called with multiply(-2,4)", () => {
    const result = multiply(-2,4);
    expect(result).toBe(-8);
    expect(result).toBeLessThan(0);
})

test("multiply() return -8 if called with multiply(2,-4)", () => {
    const result = multiply(2,-4);
    expect(result).toBe(-8);
    expect(result).toBeLessThan(0);
});

test("multiply() return 8 if called with multiply(-2,-4)", () => {
    const result = multiply(-2,-4);
    expect(result).toBe(8);
});

//Divide function test:
test("divide() return 3 if called with divide(9,3)", () => {
    const result = divide(9, 3);
    expect(result).toBe(3);
});

test("divide() return error \"You should not do this!\" if called with divide(9,0)", () => {
    const result = divide(9, 0);
    expect(result).toBe("You should not do this!");
});