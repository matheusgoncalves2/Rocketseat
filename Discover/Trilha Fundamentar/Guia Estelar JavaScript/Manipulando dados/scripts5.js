/* 
    Manipulating Strings and Numbers

    Transform a broken number with 2 decimal cases and switch its point for comma
*/

let number = 144.12312908
console.log(number.toFixed(2).replace('.', ','))
