function tabuada() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')

    if (num.value.length == 0) {
        res.innerHTML = 'Por favor, digite um número acima.'

    } else {
        res.innerHTML = ''
        let n = Number(num.value)
        let i = 0
        let r = 0
        if (n >=0) {
            while (r <= n*10) {
                res.innerHTML += `${n} x ${i} = ${r} <br>`
                i++
                r = n*i
            }    
        } else {
            while (r >= n*10) {
                res.innerHTML += `${n} x ${i} = ${r} <br>`
                i++
                r = n*i
        }
        
        
    }
}
}
