const name = "changed mario";

console.log(name);

const greet = (name) => {
  console.log(`hello, ${name}`);
};

greet(name);

console.log(__dirname);
console.log(__filename);
const { people } = require("./people");
console.log(people);
