const number=[1,2,3,4,5,6,7,8,9,10];
const newnumber=number.filter((num)=>(num>5));
const newnumber1=number.filter((num)=>(num%2==0));
const number1=number.map((num)=>(num*5));
const sum=number.reduce((num,count)=>(num+count),0);
// console.log(newnumber);
// console.log(newnumber1);
console.log(number1);
console.log(sum);