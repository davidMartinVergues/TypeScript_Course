// const person = {
//   name: "david martin",
//   age: 36,
//   hoobies: ["sports", "cooking"],
// };

// for (const hobby of person.hoobies) {
//   console.log(hobby.toUpperCase());
// }

let favoriteActivities: any[];

favoriteActivities = ["sports", 5, { name: "david" }];

// console.log(typeof person);
// console.log(person.name);

let tupla: [number, string];
tupla = [10, "d  avid"]; // cumple con la estructura
// tupla[1] = 5; // no me permite poner en la segunda posición 1 un number
// tupla = ["david", 1]; // no me permite poner un numer seguido de string
// tupla = [1]; // no cumple ni tamaño no tipo de datos
// tupla = [10, "david", 5]; // no cumple  tamaño*/
tupla.push("david2"); // esto si está permitido pero no debería ERROR!!

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "david martin",
  age: 36,
  hoobies: ["sports", "cooking"],
  role: Role.ADMIN,
};

if (person.role == Role.ADMIN) {
  console.log(person.role);
}

let myArray: any[];

myArray = [1, "avid", [1, 2, 3], { name: "david" }];
