function calculatecartprize(var1,var2,...num1) { //rest operator use(...)
            return num1  
}
console.log(calculatecartprize(200,300,400));

let user = {
            username: "Rita",
            price: 99
}

function handleObject(anyobject) {
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);          
}

// handleObject(user);


handleObject({
            username:"Amrita",
            price:4099
})


let newArray = [233,244,255,266,366,];

function returnnewarray(getArray) {
            return getArray[1];
}
// console.log(returnnewarray(newArray));
console.log(returnnewarray([200,400,500,1000]));