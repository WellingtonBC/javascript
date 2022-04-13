var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()
var tempo = `${hora} horas e ${minuto} minutos`

console.log(`Agora são ${tempo}.`)

if (tempo > 0 && tempo < 12) {
    console.log(`Está de Manhã. Bom dia!`)

} else if (tempo >= 12 && tempo < 18) {
    console.log(`Está de Tarde. Boa tarde!`)

} else {
    console.log(`Está de Noite. Boa noite!`)

}