/* ### Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: []
    * despesas: []
    
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let family = {
    incomes: [1080.00, 320.00, 300.00],
    expenses: [500.00, 170.00, 100.00, 2000],
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total+=value
    }

    return total
}

function balanceCalculator() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)
    
    let totalBalance = calculateIncomes - calculateExpenses
    const itsOk = totalBalance >= 0

    let balanceText = "negativo"

    if(itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${totalBalance.toFixed(2).replace(".",",")}`)
}

balanceCalculator()