// this keyword show the current constant

const user = {
            username: "Rita",
            prize: 66,

            welcomeMessage : function(){
                        console.log(`${this.username}, welcome to website `);
                        console.log(this);
            }
}

// user.welcomeMessage();   //default value
// user.username = "Amrita";  //constant
// user.welcomeMessage();

console.log(this);


// Arrow Function

// function addone(){
//             let username = "Rita"
// //          console.log(this.username);
//             console.log(this)
// }
// addone();


//  const addone= function addone(){
//             let username = "Rita"
//             console.log(this.username);
// }
// addone();


const addone=  () =>{
            let username = "Rita"
            console.log(this);
}
addone();