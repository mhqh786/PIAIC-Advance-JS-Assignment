var obj1 = {
    name : "Muhammad Hassan",
    course : "LLB"
};
var obj2 = {
    age : 25
};

var obj3  = {...obj1, ...obj2};
console.log(obj3);