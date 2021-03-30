function sum (name, course, ...args){
    console.log(arguments);
    document.write(`Hello ${name} of ${course}`);
    let sum = 0;
    for (let i in args){
        sum += args [i];
    }
    document.write(sum + "<br>");
}
sum("Hassan Qureshi", "LLB", 20, 30, 40);
sum("kamran Hassan", "IT", 55, 44);