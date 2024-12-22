function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(" ");
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); //Corrected code
console.log(greeter(user[0]));//Another solution