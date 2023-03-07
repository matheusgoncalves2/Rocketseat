/* 
    Manipulating Arrays
*/

let techs = ["html", "css", "js"]

// add item at the end
techs.push("nodejs")

// add at the beggining
techs.unshift("sql")

// remove from the end
techs.pop()

// remove from beggining
techs.shift()

// pick only some elements of the array
// console.log(techs.slice(1,3))

// remove 1 or more items from any position of the array
// techs.splice(1,1)

// find the position of some element of the array
let index = techs.indexOf("css")

console.log(index)