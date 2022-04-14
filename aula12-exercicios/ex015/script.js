function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fano.value == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e preencha novamente.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 12) {
                img.setAttribute('src', 'menino.png')
                genero = 'Menina'

            } else if (idade < 23) {
                img.setAttribute('src', 'garoto.png')
                genero = 'Garoto'

            } else if (idade < 50) {
                img.setAttribute('src', 'adulto.png')
                genero = 'Adulto'

            } else {
                img.setAttribute('src', 'idoso.png')
                genero = 'Idoso'

            }

        } else if (fsex[1].checked) {

            if (idade > 0 && idade < 12) {
                img.setAttribute('src', 'menina.png')
                genero = 'Menina'

            } else if (idade < 23) {
                img.setAttribute('src', 'garota.png')
                genero = 'Garota'

            } else if (idade < 50) {
                img.setAttribute('src', 'adulta.png')
                genero = 'Adulta'

            } else {
                img.setAttribute('src', 'idosa.png')
                genero = 'Idosa'

            }

        }
        
        res.style.padding = "70px"
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos sua Idade e Gênero.<br> ${genero} com ${idade} anos.`
        res.appendChild(img)
                
    }
}