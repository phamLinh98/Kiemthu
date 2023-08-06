const demo = [10,20,30,249];
const demo2 = function(a,b){
    return a > 5;
}
const test = demo.filter(demo2);

console.log(test);