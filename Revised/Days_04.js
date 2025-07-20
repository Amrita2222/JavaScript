// Primitive 
// 7 Type: String, Number, Boolean, null, Bigint, Symbol, undefined

const score = 100
const scorevalue = 100.3


const isLogedIn = false
const outsideTemp = null;
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


// Reference (Non-primitive)

// Array, Objects, Functions
const heros = ['abc', 'def', 'doga']
let obj = {
    name: 'rita',
    age:22
}

const myfunction = function name(params) {
    console.log('hello')
}
