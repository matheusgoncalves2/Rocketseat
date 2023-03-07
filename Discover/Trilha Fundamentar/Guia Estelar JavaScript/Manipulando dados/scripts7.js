/* 
    Manipulating Strings and Arrays

    Separate a text that contains spaces in a new array where each text is a different position of the array. After that, transform the array into a text, and where there was spaces put _
*/

let phrase = "Eu quero viver o amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)