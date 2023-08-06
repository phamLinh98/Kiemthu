// Array.prototype.Demo = function(){
//     const result = [];
//     for(let i = 0; i< this.length;i++){
//         result.push(this[i].toUpperCase());
//     }
//     return result;
// };
// const demo = ["Hay","Doi","Day"];
// const test = demo.Demo();
// console.log(test);


const Demo = {name:"Linh", age:27, sex:"Male"};
Demo.prototype.native = "VN";
console.log(Demo);