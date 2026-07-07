const student = {
    name: "aman",
    marks: 95,
    prop : this, // global scope
    getName : function () {
        console.log(this);
        return this.name;
    },
    
    getmarks: () =>
    {
        console.log(this);  // parent's scope ->scope 
        return this.marks;  // it will give undefined because arrow function takes window scope and window object does not have marks 
    },
    
    getInfo1 : function()
    {
        setTimeout(() =>{
            console.log(this);
        },2000);
    },

    getInfo2 : function() {
        setTimeout(function () {
            console.log(this);
        },2000);
    },
};


// console.log(student.getName());
// console.log(student.getmarks());
