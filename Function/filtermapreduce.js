const coding = ['ruby', 'python', 'js', 'java', 'css'];


const values= coding.forEach((items) => {
    console.log(items)
});
console.log(values);


// forEach values return nhi karta hai

const mynums = [1,2,3,4,5,6,7,8,9];
const newnumbs = mynums.filter((num) => {return num > 4 });
console.log(newnumbs);

// filter values return krta hai
// or scope ke sath return lgana must hai 

let numlist = [1,2,3,4,5,6,7,8,9,10]
let newnumber = []
numlist.forEach((num) => {
    if (num > 4) {
        newnumber.push(num);
    }
})
console.log(newnumber);

const books = [
    {
        title: 'Book One', genre:'Function', publish:1981, edition: 2009
    },
    {
        title: 'Book Two', genre:'history', publish:1982, edition: 2000
    },
    {
        title: 'Book Three', genre:'english', publish:1988, edition: 2000
    },
    {
        title: 'Book Four', genre:'Function', publish:2000, edition: 2006
    },
    {
        title: 'Book Five', genre:'grammar', publish:1990, edition: 2004
    },
    {
        title: 'Book Six', genre:'non-functional', publish:2005, edition: 2004
    },
    {
        title: 'Book Seven', genre:'history', publish:2005, edition: 2009
    },
];
let newlistbook = books.filter((bk) => bk.genre === 'history');
newlistbook = books.filter((bk) => {return bk.publish >= 2004});
newlistbook = books.filter((bk) => {
    return bk.edition >= 2000 && bk.genre === 'history'
});

console.log(newlistbook);

// //////////////
// Use Map

let mapnum = [ 1,2,3,4,5,6,7,8,9,10];

mapnum.map()