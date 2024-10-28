function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value > ano)) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <5) {
                img.setAttribute('src', 'baby-mas.png')
            } else if (idade < 15) {
                img.setAttribute('src', 'child-mas.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'young-mas.png')
            } else if (idade < 50) { 
                img.setAttribute('src', 'adult-mas.png')
            } else {
                img.setAttribute('src', 'oldage-mas.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <5) {
                img.setAttribute('src', 'baby-fem.png')
            } else if (idade < 15) {
                img.setAttribute('src', 'child-fem.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'young-fem.png')
            } else if (idade < 50) { 
                img.setAttribute('src', 'adult-fem.png')
            } else {
                img.setAttribute('src', 'oldage-fem.png')
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}

