let arr = ['a','b'];
let arrcopy = arr;
arrcopy.push('c');
console.log(arrcopy,arr);
console.log(arrcopy == arr);
console.log(arrcopy === arr);


const num = [1,2,3,4,5,5];
num.push(45,6);
num.pop();
console.log(num);
console.log(num = [3,4,6]);// it gives error