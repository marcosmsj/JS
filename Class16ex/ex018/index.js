function add() {
    let num = document.getElementById('num')
    let selnum = document.getElementById('selnum')
    let res = document.getElementById('res')
    
    if (num.value.length == 0) {
        alert('Why r u gay?')
    } else {
        let n = Number(num.value)
        //let pos = vetor.indexOf(n)
        if (n < 1 || n > 100) {
            alert('Why r u gay again?')
        } else {
            let vetor = []
            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            item.value = `selnum${n}`
            selnum.appendChild(item)
            vetor.push(n)
            res.innerHTML = `Nosso vetor é o ${vetor}`            
        }

    }
   
}

/*function resultado() {
    let res = document.getElementById('res')
    res.innerHTML = `<p>Ao todo, temos ${total} números cadastrados.`
}*/
