// function hello(user='Guest'){
//     console.log(`Hello ${user}`);
// }
// hello('aman');
// hello();

// function sum(a=0,b=0){
//     console.log('Before Return');
//     return(a+b);
//     console.log('After Return');
// }
// console.log(sum(23,34));
// console.log(sum(1));
// console.log(sum());


// //arrow function
// const hello=()=>console.log('Hello');
// hello();

const add=(a,b)=>a+b
// console.log(add(4,5));

// // IIFE example
// (function(){
//     console.log('Hello Aman');
// })()

function hello(user,callback){
    console.log(`Hello ${user}`);
    callback();
}


hello('Admin',function(){
    console.log(add(7,6))});
hello('Admin',()=>{
    console.log(add(5,6))});