//1st step creates abd assigns values to the array
let colors = ["Red", "Green", "blue", "purple", "pink", "black", "white"];

//2nd step accesses the 1st last 
//and middle elements of the array
console.log("---------------- 2nd step ----------------");
var FirstColor = colors[0];
var LastColor = colors[colors.length - 1];
var MiddleColor = colors[Math.floor(colors.length/2)];
console.log("First Color: " + FirstColor);
console.log("Last Color: " + LastColor);
console.log("Middle Color: " + MiddleColor);

//3rd step uses .length to output the 
//number of elements in the array
console.log("\n---------------- 3rd step ----------------");
console.log(colors.length);

//4th step modifies the array by removing the last element, 
//adding an element at the end of the array and the beginning
console.log("\n---------------- 4th step ----------------");
console.log(colors);//array b4 being modified
colors.pop();
console.log(colors);
colors.push("lime");
console.log(colors);   
colors.unshift("orange");
console.log(colors);  

//5th step iterates over the array 
//using a for loop and prints each element
console.log("\n---------------- 5th step ----------------");
for (var i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}

//6th step uses destructuring to assign the first two 
//elements to variables, and the rest to an array
console.log("\n---------------- 6th step ----------------");
let [First, Second, ...rest] = colors;
console.log(First);
console.log(Second);
console.log(...rest);