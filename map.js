
const persons = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];

const demo = persons.map(v => [v.firstname + " " + v.lastname].join());
// const phamang = demo.join();
console.log(demo);


