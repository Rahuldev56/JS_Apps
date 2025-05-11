// Shalllow copy:For shallow copies, only the top-level properties are copied, not the values of nested objects(Array,object). Therefore:

//Re-assigning top-level properties(like primittive data types) of the copy does not affect the source object.
// but Re-assigning nested object properties of the copy does affect the source object and vice versa.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },// not a top level property 
  };
  const myCar = [myHonda, 2,[3,5], "cherry condition", "purchased 1997"];
  const newCar = myCar.slice(0, 3);

  
console.log(newCar)
newCar[2][0] = "blue";
newCar[1]=6;

console.log("The new color of my Honda is",newCar[2][0]);
console.log(newCar)
console.log(myCar)

// how shallow copy is done


const original = {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: 12345
    }
  };
  
  const shallowCopy = { ...original }; // or Object.assign({}, original)
  
  shallowCopy.name = 'Bob';
  shallowCopy.address.city = 'Mirrorland';
  
  console.log(original.name);        
  console.log(original.address.city);
//----------------------------------------------------------------------------------------------------------------------------------------------------


// Deep copy
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
// How: To  make a deep copy of a JavaScript object, if it can be serialized,is to use JSON.stringify() 
// to convert the object to a JSON string, and then JSON.parse() to convert the string back into a (completely new) JavaScript object:


const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
ingredientsListDeepCopy[1].list = ["rice flour", "water"];
console.log(ingredientsListDeepCopy[1])
console.log(ingredientsList[1].list)












