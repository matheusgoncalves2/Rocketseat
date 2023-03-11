/* ### Transformar notas escolares

Crie um algorítmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipos A B C

* de 90 para cima - A
* entre 80 - 89   - B
* entre 70 - 79   - C
* entre 60 - 69   - D
* menor que 60    - F

*/

function getGrade(grade) {

    let gradeA = grade >= 90 && grade <= 100
    let gradeB = grade >= 80 && grade < 90
    let gradeC = grade >= 70 && grade < 80
    let gradeD = grade >= 60 && grade < 70
    let gradeF = grade < 60 && grade >= 0
    let gradeFinal;

    if (gradeA) {
        gradeFinal = "A"
    } else if (gradeB) {
        gradeFinal = "B"
    } else if (gradeC) {
        gradeFinal = "C"
    } else if (gradeD) {
        gradeFinal = "D"
    } else if (gradeF) {
        gradeFinal = "F"
    } else {
        gradeFinal = "Nota inválida"
    }

    return gradeFinal
}

console.log(getGrade(-5))
console.log(getGrade(59))
console.log(getGrade(69))
console.log(getGrade(79))
console.log(getGrade(89))
console.log(getGrade(99))
console.log(getGrade(109))