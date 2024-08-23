type TransformationRules<T> = {
    [Property in keyof T]?: (value: T[Property]) => any;
  };
  
  function transformData<T>(items: T[], rules: TransformationRules<T>): T[] {
    // TODO: Implement the transformData function
    return items; // Placeholder return, update accordingly
  }
  Example Usage
  const data = [
    { id: 1, name: "John Doe", age: 28 },
    { id: 2, name: "Jane Doe", age: 32 },
  ];
  
  const rules = {
    name: (value: string) => value.toUpperCase(),
    age: (value: number) => value + 10,
  };
  
  const transformedData = transformData(data, rules);
  console.log(transformedData);
  // Expected output:
  // [
  //   { id: 1, name: "JOHN DOE", age: 38 },
  //   { id: 2, name: "JANE DOE", age: 42 },
  // ]