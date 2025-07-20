
// using try catch

async function fetchGithubData(){
    try {

        // fetch jo h ek promise return karega
        let github_API = `https://api.github.com/users/amrita2222`
    
        // us promise ko hm response me store kr rhe h 
        // h store hone isiliye await ka use kr rhe h
        const response = await fetch(github_API);
    
        // response se data json me convert karne me time lagta h isiliye await
        // use kr rhe h aur data me store kr rhe h Ab mera pura object data me    => Jisme me time lag skta h usse phle await use krte hai
        const data = await response.json()
    
        
        // console.log(data);
        console.log(data.login);
        console.log(data.id);
        console.log(data.url);

    } catch (error) {
        console.log("Error " + error)
    }
}

fetchGithubData();
// Ek alg tm script aur html ka file banao
// ek chota sa cart bna kr dikhate h usme data kaise inject krenge


// fetch ek promise h eska mtlb ye hota h ki fetch se jo bhi kam karenge
// wo kam ya to pura hoga ya nhi hoga
// pura hoga eska mtlb resolve hua
// nhi pura eska mtlb reject hua



// try ka mtlb bhi same as reolve ki trh hua
// agr koi kam pura hua eska mtlb wo try part me h 
// aur nhi hua to wo catch me mtlb kuchh error aaya






// const user = {
//     name: "Ranjeet",
//     city: "Patna",
//     email: "patna@gmail.com"
// }
// Jab bhi object ko access krna ho to object name ke sath . lagao aur jo
// Access krna h usse likh do wo access ho jayega
// console.log(user.city)  // Patna , You can check after run
// console.log(user.name);

// code run kro to chal bhi rha h ki nhi ye dekh lo



/*

{
    "login": "Amrita2222",
    "id": 122859805,
    "node_id": "U_kgDOB1KxHQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/122859805?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Amrita2222",
    "html_url": "https://github.com/Amrita2222",
    "followers_url": "https://api.github.com/users/Amrita2222/followers",
    "following_url": "https://api.github.com/users/Amrita2222/following{/other_user}",
    "gists_url": "https://api.github.com/users/Amrita2222/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Amrita2222/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Amrita2222/subscriptions",
    "organizations_url": "https://api.github.com/users/Amrita2222/orgs",
    "repos_url": "https://api.github.com/users/Amrita2222/repos",
    "events_url": "https://api.github.com/users/Amrita2222/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Amrita2222/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rita Roy",
    "company": null,
    "blog": "",
    "location": "Bihar, India",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2023-01-17T06:49:22Z",
    "updated_at": "2024-06-21T06:21:09Z"
}

*/
