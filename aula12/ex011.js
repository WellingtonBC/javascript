var idade = 23
console.log(`Você tem ${idade} anos`)

if (idade < 16) {
    console.log('Não pode votar.')

} else if (idade < 18 || idade >= 70) {
    console.log('Seu voto é Opcional.')

} else if (idade < 70) {
    console.log('Seu voto é Obrigatório.')

}