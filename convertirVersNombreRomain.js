module.exports = function convertir(nombre) {
  let nombreRomain = ""

  const centaines = Math.trunc(nombre % 1000 / 100)
  const dizaines = Math.trunc(nombre % 100 / 10 )
  const unites = nombre % 10

  nombreRomain += convertirSelonAlgorithmeNombresRomains(centaines,"C", "D", "M")
  nombreRomain += convertirDizaines(dizaines)
  nombreRomain += convertirUnites(unites)

  return nombreRomain
}

function convertirDizaines(dizaines) {
  const PatternUnitaire = "X"
  const PatternCentral = "L"
  const PatternMajorant = "C"
  let dizainesConvertis = ""

  if (dizaines === 5) {
    dizainesConvertis += PatternCentral
  }

  if (dizaines % 5 > 0 && dizaines % 5 <= 3) {
    if (dizaines / 5 > 1) {
      dizainesConvertis += PatternCentral
    }
    dizainesConvertis += PatternUnitaire.repeat(dizaines % 5)
  }

  if (dizaines % 5 === 4) {
    dizainesConvertis += PatternUnitaire
    if (dizaines === 9) {
      dizainesConvertis += PatternMajorant
    }
    if (dizaines === 4) {
      dizainesConvertis += PatternCentral
    }
  }

  return dizainesConvertis
}

function convertirUnites(unites) {
  const PatternUnitaire = "I"
  const PatternCentral = "V"
  const PatternMajorant = "X"
  let unitesConvertis = ""

  if (unites === 5)
    unitesConvertis += PatternCentral

  if (unites % 5 > 0 && unites % 5 <= 3) {
    if (unites / 5 > 1) {
      unitesConvertis += PatternCentral
    }
    unitesConvertis += PatternUnitaire.repeat(unites % 5)
  }

  if (unites % 5 === 4) {
    unitesConvertis += PatternUnitaire
    if (unites + 1 === 10)
      unitesConvertis += PatternMajorant
    if (unites + 1 === 5)
      unitesConvertis += PatternCentral
  }

  return unitesConvertis
}

function convertirSelonAlgorithmeNombresRomains(unites, PatternUnitaire, PatternCentral, PatternMajorant) {
  let nombreConverti = ""

  if (unites === 5)
    nombreConverti += PatternCentral

  if (unites % 5 > 0 && unites % 5 <= 3) {
    if (unites / 5 > 1) {
      nombreConverti += PatternCentral
    }
    nombreConverti += PatternUnitaire.repeat(unites % 5)
  }

  if (unites % 5 === 4) {
    nombreConverti += PatternUnitaire
    if (unites + 1 === 10)
      nombreConverti += PatternMajorant
    if (unites + 1 === 5)
      nombreConverti += PatternCentral
  }

  return nombreConverti
}
