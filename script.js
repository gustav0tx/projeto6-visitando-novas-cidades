let tourist = 'Jonh'
let citiesNum = 0
let citiesNom = ''
let visited = true
while (visited == true) {
    citiesNum += 3
    citiesNom += [`\nSão Paulo \nRio de Janeiro \nFortaleza`]
    visited = false
    break
}
console.log(`Turista : ${tourist}\nQuantidade de cidades visitadas : ${citiesNum}
Cidades visitadas : ${citiesNom}`)