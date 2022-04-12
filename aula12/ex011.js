var idade = 23

if (idade < 16) {
    console.log('Não vota.')

} else if (idade < 18 || idade >= 70) {
    console.log('Voto Opcional.')

} else if (idade < 70) {
    console.log('Voto Obrigatório.')

}