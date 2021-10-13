// Carne - 400gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + de 6 horas - 1500ml

// crianças valem 0,5

let inputAdultos = document.getElementById('adultos')
let inputCriancas = document.getElementById('criancas')
let inputDuracao = document.getElementById('duracao')

let resultado = document.getElementById('resultado')

function calcular() {
  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  let qtdeTotalCarne =
    carnePP(duracao) * adultos + (carnePP(duracao) / 2) * criancas
  let qtdeTotalCerveja = cervejaPP(duracao) * adultos
  let qtdeTotalBebidas =
    bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * criancas

  resultado.innerHTML = `<h3>Você vai precisar de:</h3 >`
  resultado.innerHTML += `<p>${qtdeTotalCarne / 1000} KG de Carne</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdeTotalCerveja / 355
  )} latas de Cerveja</p>`
  resultado.innerHTML += `<p>${Math.ceil(
    qtdeTotalBebidas / 2000
  )} Pet's de 2 litros de Bebidas</p>`
}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
