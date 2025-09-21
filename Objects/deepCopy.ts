const original = { name: 'John', age: 30, details: { city: 'New York' } };
const deepCopy = structuredClone(original);

deepCopy.name = 'Alice';
deepCopy.details.city = 'Los Angeles';

console.log(original.details.city); // "New York"
