const url="https://api.github.com/users/aman95533";
const pr=fetch(url);
pr.then((response)=>{
    return response.json();})
.then((data)=>{
    console.log("Data=",data);
})
.catch((err)=>{console.log("Error=",err.message);});
// .finally(()=>{console.log("Inside finally");})