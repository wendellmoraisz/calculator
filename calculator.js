const res = document.getElementById('res')

function display(id) {
    res.innerHTML.length < 13 ? res.innerHTML += id.value : null
}

function clean() {
    res.innerHTML = ''
}

function expo() {
    res.innerHTML = calcular() ** 2
}

function raiz() {
    res.innerHTML = Math.sqrt(calcular())
}

function dividirPorUm() {
    res.innerHTML = 1 / calcular()
}

function calcular() {
    res.innerHTML = eval(document.getElementById('res').innerHTML.replace('÷', '/').replace('x', '*').replace(',', '.'))
    return eval(document.getElementById('res').innerHTML.replace('÷', '/').replace('x', '*').replace(',', '.'))
}

function deletar() {
    res.innerHTML = document.getElementById('res').innerHTML.slice(0, -1)
}

function invert() {
    if (document.getElementById('res').innerHTML[0] != '-') {
        document.getElementById('res').innerHTML = '-' + document.getElementById('res').innerHTML
    } else {
        let resultado = document.getElementById('res').innerHTML
        resultado = resultado.replace('-', '')
        res.innerHTML = resultado
    }
}
