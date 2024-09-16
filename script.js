let tourist = prompt('Qual o nome do turista')
let visited = prompt('Você visitou alguma cidade?')
let citiesNom = ''
let citiesNum = 0
while (visited === 'sim') {
    citiesNum++
    citiesNom = (citiesNom + ' ' + prompt('Qual o nome da cidade?'))
    visited = prompt('Você visitou mais alguma cidade?')
}
alert(` Turista: ${tourist}\n Quantidade de cidades visitadas: ${citiesNum}\nCidades visitadas: ${citiesNom} `)
