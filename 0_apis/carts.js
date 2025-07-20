const inputText = document.getElementById('inputText');
const btn = document.querySelector('button');

async function fetchGithubData(input) {
    try{
        const github_API = `https://api.github.com/users/${input}`
        const response = await fetch(github_API);
        const data = await response.json();
        // console.log(data);
        DisplayData(data);
    } catch(error){
        console.log("Error " + error);
    }
}


function DisplayData(data){
    const img = document.querySelector('img');
    img.src = data.avatar_url;
    
    const publicRepo = document.querySelector('#public_repo')
    console.log(data.public_repos)
    publicRepo.textContent = data.public_repos;

    // const public_gits = document.querySelector('.public_gits');
    // console.log(data.public_gists)
    // public_gits.textContext = data.public_gists;

    // const followers = document.querySelector('.followers');
    // followers.textContent = data.followers;

    // const Following = document.querySelector('.Following');
    // Following.textContent = data.following;
    
    const company = documnet.querySelector('company');
    console.log(company.textContent)
    company.innerHTML =data.company;

    const website = documnet.querySelector('website');
    website.textContent =data.website; // glt h

    const location = documnet.querySelector('location');
    location.textContent =data.location;

    // const member= documnet.querySelector('member_since');
    // member.textContent = data.member; // glt h

}


btn.addEventListener('click', function () {
    const input = inputText.value
    fetchGithubData(input);
})