// Initial array
let fruits = ["Apple", "Banana", "Mango"];
console.log("Initial array:", fruits);

// 1️⃣ push() → Add at the end
fruits.push("Orange");
console.log("After push('Orange'):", fruits); // ["Apple", "Banana", "Mango", "Orange"]

// 2️⃣ pop() → Remove from end
let removedLast = fruits.pop();
console.log("After pop():", fruits); // ["Apple", "Banana", "Mango"]
console.log("Removed item:", removedLast); // Orange

// 3️⃣ unshift() → Add at the beginning
fruits.unshift("Pineapple");
console.log("After unshift('Pineapple'):", fruits); // ["Pineapple", "Apple", "Banana", "Mango"]

// 4️⃣ shift() → Remove from beginning
let removedFirst = fruits.shift();
console.log("After shift():", fruits); // ["Apple", "Banana", "Mango"]
console.log("Removed item:", removedFirst); // Pineapple

// 5️⃣ splice() → Remove & add at position
// Replace "Banana" with "Papaya"
fruits.splice(1, 1, "Papaya");
console.log("After splice(1, 1, 'Papaya'):", fruits); // ["Apple", "Papaya", "Mango"]

// Add "Kiwi" and "Grapes" at index 1 without removing
fruits.splice(1, 0, "Kiwi", "Grapes");
console.log("After splice(1, 0, 'Kiwi', 'Grapes'):", fruits); 
// ["Apple", "Kiwi", "Grapes", "Papaya", "Mango"]

// 6️⃣ slice() → Copy part of array
let sliced = fruits.slice(1, 4);
console.log("Using slice(1, 4):", sliced); // ["Kiwi", "Grapes", "Papaya"]

// Check original array remains unchanged
console.log("Original array after slice():", fruits);

//join() -> Convert array to string
console.log



