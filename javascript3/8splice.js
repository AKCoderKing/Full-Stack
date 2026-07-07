let primary =["red",'yellow','blue'];
let secondary = ["orange",'green','violet'];
let colors = primary.concat(secondary);
console.log(colors.splice(4));
console.log(colors);
console.log(colors.splice(0,1));
console.log(colors);
console.log(colors.splice(0,1,"black","grey"));
console.log(colors);