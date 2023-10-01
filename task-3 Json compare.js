let Obj1 = { name: "person1", age: 5 };

const keys_1 = Object.keys(Obj1).sort();
const Order_1 = JSON.stringify(keys_1);

let obj2 = { age: 5, name: "person2" };

const keys_2 = Object.keys(Obj1).sort();
const Order_2 = JSON.stringify(keys_2);

if (Order_1 === Order_2) {
  console.log("the json are equal !");
} else {
  consoloe.log("the json are not equal");
}
