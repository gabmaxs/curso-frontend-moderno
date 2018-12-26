const sequencia = {
    _valor: 1, // convenção, variavel paa ser acessada internamente
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if(valor > this._valor)
            this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = -1
console.log(sequencia.valor, sequencia.valor)