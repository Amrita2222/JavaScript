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
// console.log("Result :" , addnumber);



function loginusermsg(username) {
            if (username=== undefined) {
                        console.log('Please enter a username');
                        return;
            }
            return `${username} just logged in`;
            
}
// console.log(loginusermsg("Rita"));

console.log(loginusermsg());