function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       console.log('register end');
       resolve();
    },5000)
})
}
function sendEmail(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
       console.log('send email end');
       resolve();
    },3000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
       console.log('login end');
       resolve();
    },1000)
    }) 
}
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log('get data end');
        // resolve();
        reject
    },2000)
    })
}
function displayData(){
     setTimeout(()=>{
        console.log('display Data End')
    },4000)
    
}
//callback Hell
// register(()=>{
//            sendEmail(()=>{
//                       login(()=>{
//                             getData(()=>{
//                                 displayData();
//                             });
//                       });
//            });
// });

// using Promise................
// register()
// .then(sendEmail)
// .then(login)
// .then(getData)
// .then(displayData)
// .catch((err)=>{console.log('Error: '+err)})
// .finally((err)=>{console.log('inside finally')})


//using async and await
async function f1() {
    try{
    await register();
    await login();
    await getData();
    await displayData();
    }
    catch(err){
        console.log('Error :'+err);
    }
}
f1();
console.log('call other application');