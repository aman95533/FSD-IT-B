function login() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Login end");
            resolve();
        }, 2000);
    });
}
function getDetails() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("details fetched end");
            resolve();
        }, 2000);
    });
}

function displayUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data displayed end");
            resolve(); // Don't pass misleading values
        }, 1000);
    });
}



function conductTest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Test conducted end");
            resolve();
        }, 3000);
    });
}
function logout() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Logged out end");
            resolve();
        }, 4000);
    });
}
// Using async/await for cleaner syntax
    async function f1(){
        try{
    await login();
    await getDetails();
    await displayUserData();
    await conductTest();
    await logout();
    }
    catch(err){
        console.log("Error:", err);
    }}
    f1();
    console.log("All tasks done");