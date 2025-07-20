
// use any one upper function promiseFive  or this
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json();
})
.then((data) => {
console.log(data);
})
.catch((error) =>{
    console.log(error); 
})

// const username = document.getElementById('name').value;
const response = fetch(`https://api.github.com/users/amrita2222`)
.then((response) => response.json())
.then((data) => {
    const username = document.getElementById('name');
    username.textContent = data.name;

    const loginID = document.getElementById('login');
    loginID.textContent = data.login;

    const img = document.getElementById('img');
    img.src = data.avatar_url;

})
.catch((error) => {
    console.log('Error Something went wrong');
});


