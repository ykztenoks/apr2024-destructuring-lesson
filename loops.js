// OBJECT DESTRUCTURING

// let person = {
//   name: "Ironhacker",
//   age: 25,
//   favoriteMusic: "Metal",
// };

// const {
//   name,
//   age,
//   favoriteMusic,
// } = person;

// console.log(`Hello, ${fullName}.`); // => Hello, Ironhacker.
// console.log(`You are ${currentAge} years old.`);
// console.log(`Your favorite music is ${favoriteMusicGenre}.`);

// let { name, age, favoriteMusic } = person;

// console.log(`Hello, ${name}.`);
// console.log(`You are ${age} years old.`);
// console.log(`Your favorite music is ${favoriteMusic}.`);

// let { name, age, favoriteMusic, country = "Spain" } = person;

// console.log(country);

// const person = {
//   name: "Ironhacker",
//   age: 25,
//   favoriteMusic: "Metal",
//   address: {
//     street: "Super Cool St",
//     number: 123,
//     city: "Miami",
//   },
// };

// let {
//   name,
//   age,
//   favoriteMusic,
//   address: { street, number, city },
// } = person;

// console.log(`${name} lives in ${number} ${street}, city of ${city}.`);
// ==> Ironhacker lives in 123 Super Cool St, city of Miami.

// const data = {
//   name: {
//     firstName: "ana",
//     lastName: "marino",
//   },
//   isStudent: true,
//   favoriteFootballTeam: "fc barcelona",
//   hometown: {
//     city: "buenos aires",
//     country: "argentina",
//   },
// };

// const {
//   name: { firstName, lastName },
//   favoriteFootballTeam,
//   hometown: { city, country },
// } = data;

// console.log(
//   `${firstName} ${lastName}, resides in ${city}, ${country}. His favorite team is ${favoriteFootballTeam}`
// );

//ARRAY DESTRUCTURING

// const campuses = ["madrid", "barcelona", "miami"];

// const [firstCampus, secondCampus, thirdCampus] = campuses;

// console.log(firstCampus);

// const [firstCampus, secondCampus, thirdCampus, fourthCampus = "remote"] =
//   campuses;

// console.log(fourthCampus);

// const europeanCampuses = [
//   ["madrid", "es"],
//   ["barcelona", "es"],
//   ["berlin", "de"],
//   ["paris", "fr"],
//   ["amsterdam", "nl"],
//   ["lisbon", "pt"],
// ];

// const [[campusSpain1], [campusSpain2, country], [campus5, theCountry]] =
//   europeanCampuses;

// console.log(campusSpain1, campusSpain2, country, theCountry);
// ==> 'madrid' 'barcelona' 'es' 'de'

// const [a, b] = [1];
// console.log(a * b); // <== ???

// const [a, b = 1] = [2];
// console.log(a * b); // <== ???

// let [a, b = 2, c, d = 1] = [3, 4];
// console.log(a, b, c, d); // ==> ???

// const reptiles = ["snake", "lizard", "alligator", ["lizard2"]];
// const mammals = ["puppy", "kitten", "bunny"];

// const animals = reptiles.concat(mammals);

// const animals = [...reptiles, ...mammals];

// animals[0] = "not a snake";
// console.log(animals);
// console.log(reptiles);

// const person = {
//   name: "someone",
//   age: 12,
//   isStudent: true,
//   school: {
//     name: "great school",
//     teacher: "great teacher",
//   },
// };

// const copyPerson = { ...person, age: 16 };

// const copyPerson = JSON.parse(JSON.stringify(person));

// copyPerson.age = 16;
// copyPerson.school.name = "not such a great school";
// console.log(copyPerson);
// console.log(person);

// function add() {
//   let sum = arguments.reduce((acc, element) => acc + element);

//   return sum;
// }

// add(); // 0
// add(1); // 1
// add(1, 2, 5, 8); // 16

// function add(...numbers) {
//   console.log(numbers);
//   // numbers represents the arguments passed when function gets invoked
//   let sum = numbers.reduce((acc, element) => (acc += element), 0);

//   console.log(sum);
//   return sum;
// }

// add(1); // 1
// add(1, 2); // 3
// add(1, 2, 5, 8); // 16

// function showMovie(title, year, ...actors) {
//   console.log(actors);
//   console.log(
//     `${title} is released in ${year} and in the cast are: ${actors[0]} and ${actors[1]}.`
//   );
// }

// showMovie(
//   "Titanic",
//   "1997",
//   "Leonardo Di Caprio",
//   "Kate Winslet",
//   "Kate",
//   "John Wick"
// );

// const customer = {
//   name: {
//     firstName: "ivan",
//     lastName: "zoro",
//   },
//   age: 32,
//   preferences: [
//     {
//       tech: ["cameras", "smartwatches"],
//       books: ["science fiction", "coding"],
//     },
//   ],
// };

// const {
//   name: { firstName, lastName },
//   age,
//   preferences: [{ tech, books }],
// } = customer;

// console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
// console.log(tech, books); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]

// const {
//     name: { firstName, lastName },
//     age,
//     preferences: [{ tech: technology, books: literature }],
//   } = customer;

//   console.log(firstName, lastName, age); // ==> 'ivan' 'zoro' 32
//   console.log(technology, literature); // ==> [ 'cameras', 'smartwatches' ] [ 'science fiction', 'coding' ]

let person = { name: "name", age: 12 };
const { name, age } = person;

function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
console.log(getFullName({ firstName: "ana", lastName: "martinez" })); // => ana martinez
