
//find
const demo = [1,2,3,4,5,6,7];
const test = demo.find(a => a>4);
console.log(test);

//findIndex
const test2 = demo.findIndex(a => a>4);
console.log(test2);

const mang = [1,4,2,3,8];
const giatri = 5;

const kq = mang.findIndex(a => a>giatri);
console.log(kq);
