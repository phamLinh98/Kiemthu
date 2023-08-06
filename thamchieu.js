const person = {
    name : "Linh",
    age :25,
    Hoten: function(){
     this.name = "Minaho";
    }
}

console.log(person.age);
let changeinfo = person
person.name = 28;
console.log(person.Hoten(name));