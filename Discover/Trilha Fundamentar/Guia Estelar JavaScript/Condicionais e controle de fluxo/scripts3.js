// throw

function sayMyName(name = '') {
    if (name === '')
    throw 'Nome é obrigatório' // throw errors

    console.log(name)
}

// try...catch
try {
    sayMyName('Matheus')
} catch(e) { // catch errors
    console.log(e)
}

console.log('após o try/catch')