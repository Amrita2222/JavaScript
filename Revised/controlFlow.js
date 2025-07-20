const isUserLogged = true;
const temperature = 81;
if(temperature < 50){
    console.log('Less than 50')
}
else{
    console.log('temperature is greater than 50');
    
}
if(2 == '2'){
    console.log('executed');
}

// <, >, <=, >=, == , ===
const score = 200;
if(score > 1000){
    const power ='fly';
    console.log(`User Power: ${power}`);
    
}
// console.log(`User Power ${power}`);

const balance = 1000;
if(balance > 50){
    console.log('test');
}
if(balance <500){
    console.log('less than 500');
    
}else if(balance < 700){
    console.log('less than 700');
    
}
else if(balance < 1220){
    console.log('less than 1220');
}
else{
    console.log(" pass");    
}

const userloggedIn = true;
const debitCard = true;
const googleLoggedIn = false;
const loggedInEmail = true;
if(userloggedIn && debitCard & 2==3){
    console.log('Allow to buy course');
}
if(loggedInEmail || googleLoggedIn){
    console.log("User logged In");
}

