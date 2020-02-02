module.exports = function convertir(nombre) {
  const patternUn = "I"
  const patternCinq = "V"
  const patternDix = "X"
  const patternCinquante = "L"
  const patternCent = "C"
  const patternCinqCent = "D"
  const patternMille = "M"

  const milliers = Math.trunc(nombre % 10000 / 1000)
  const centaines = Math.trunc(nombre % 1000 / 100)
  const dizaines = Math.trunc(nombre % 100 / 10 )
  const unites = nombre % 10

  let nombreRomain = ""
  nombreRomain += convertirSelonAlgorithmeNombresRomains(milliers,patternMille)
  nombreRomain += convertirSelonAlgorithmeNombresRomains(centaines,patternCent, patternCinqCent, patternMille)
  nombreRomain += convertirSelonAlgorithmeNombresRomains(dizaines, patternDix, patternCinquante, patternCent)
  nombreRomain += convertirSelonAlgorithmeNombresRomains(unites, patternUn, patternCinq, patternDix)

  return nombreRomain
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
