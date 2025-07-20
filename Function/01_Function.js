// function addNumber(number1 , number2){
//             console.log(number1 + number2);
// }
// let addnumber = addNumber(2,4)
// console.log("Result :" , addnumber);


function addNumber(number1 , number2){
           let result= number1 + number2
           return result;
}

 let addnumber = addNumber(2,4)

console.log("Result :" , addnumber);



function loginusermsg(username) {
            if (username=== undefined) {
                        console.log('Please enter a username');
                        return;
            }
            return `${username} just logged in`;
            
}
// console.log(loginusermsg("Rita"));

console.log(loginusermsg());

// ... isko hi rest operator bola jata hai
function calculatePrize(val1,val2, ...num1){
    return num1;

}
console.log(calculatePrize(200,400,600));


const user = {
    username: 'Rita',
    age: 30
}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username}, and prize name is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    username: 'sam',
    price:399
})

// Array with function

const myNewArray = [200,400,600,800];
function returnSecondValue(geArray){
    return geArray[1];
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));

// Scoop
let a = 300;
if (true) {
    let a =10;
const c= 40;
console.log('Inner:' , a);


}

console.log(a);
// console.log(c);


function one(){
    const username = 'Rita'
    function two(){
        const website= 'youtube'
        console.log(username)
    }
    // console.log(website);
    two()
    
}
one();

if(true){
    const username = 'Amrita'
    if(username === 'Amrita'){
        const website = ' youtube'
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);

// ********************Interesting***********************

function addone(num) {
    return num +1;

}
console.log(addone(5));

function addTwo(num) {
    return num +2;

}
console.log(addTwo(5));


