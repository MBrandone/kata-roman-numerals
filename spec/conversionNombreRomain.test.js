const convertir = require("../convertirVersNombreRomain")

describe("conversion en nombre romain", () => {

  describe("Unités", () => {
    test("devrait convertir 1 en I", () => {
      expect(convertir(1)).toEqual("I")
    })

    test("devrait convertir 2 en II", () => {
      expect(convertir(2)).toEqual("II")
    })

    test("devrait convertir 3 en III", () => {
      expect(convertir(3)).toEqual("III")
    })

    test("devrait convertir 4 en IV", () => {
      expect(convertir(4)).toEqual("IV")
    })

    test("devrait convertir 5 en V", () => {
      expect(convertir(5)).toEqual("V")
    })

    test("devrait convertir 6 en VI", () => {
      expect(convertir(6)).toEqual("VI")
    })

    test("devrait convertir 7 en VII", () => {
      expect(convertir(7)).toEqual("VII")
    })

    test("devrait convertir 8 en VIII", () => {
      expect(convertir(8)).toEqual("VIII")
    })

    test("devrait convertir 9 en IX", () => {
      expect(convertir(9)).toEqual("IX")
    })
  })

  describe("Dizaines", () => {

    describe("10", () => {
      test("devrait convertir 10 en X", () => {
        expect(convertir(10)).toEqual("X")
      })

      test("devrait convertir 11 en XI", () => {
        expect(convertir(11)).toEqual("XI")
      })

      test("devrait convertir 12 en XII", () => {
        expect(convertir(12)).toEqual("XII")
      })

      test("devrait convertir 14 en XIV", () => {
        expect(convertir(14)).toEqual("XIV")
      })

      test("devrait convertir 15 en XV", () => {
        expect(convertir(15)).toEqual("XV")
      })

      test("devrait convertir 18 en XVIII", () => {
        expect(convertir(18)).toEqual("XVIII")
      })

      test("devrait convertir 19 en XIX", () => {
        expect(convertir(18)).toEqual("XVIII")
      })

    })

    describe("20", () => {
      test("devrait convertir 20 en XX", () => {
        expect(convertir(20)).toEqual("XX")
      })

      test("devrait convertir 23 en XXIII", () => {
        expect(convertir(23)).toEqual("XXIII")
      })

      test("devrait convertir 25 en XXV", () => {
        expect(convertir(25)).toEqual("XXV")
      })

      test("devrait convertir 29 en XXIX", () => {
        expect(convertir(29)).toEqual("XXIX")
      })
    })

    describe("30", () => {
      test("devrait convertir 31 en XX", () => {
        expect(convertir(31)).toEqual("XXXI")
      })

      test("devrait convertir 34 en XXIII", () => {
        expect(convertir(34)).toEqual("XXXIV")
      })

      test("devrait convertir 37 en XXV", () => {
        expect(convertir(37)).toEqual("XXXVII")
      })
    })

    describe("40", () => {
      test("devrait convertir 40 en XL", () => {
        expect(convertir(40)).toEqual("XL")
      })

      test("devrait convertir 44 en XLIV", () => {
        expect(convertir(44)).toEqual("XLIV")
      })

      test("devrait convertir 46 en XLIV", () => {
        expect(convertir(46)).toEqual("XLVI")
      })

      test("devrait convertir 49 en XLIV", () => {
        expect(convertir(49)).toEqual("XLIX")
      })
    })

    describe("50", () => {
      test("devrait convertir 50 en L", () => {
        expect(convertir(50)).toEqual("L")
      })

      test("devrait convertir 52 en XLIV", () => {
        expect(convertir(52)).toEqual("LII")
      })

      test("devrait convertir 54 en XLIV", () => {
        expect(convertir(54)).toEqual("LIV")
      })

      test("devrait convertir 57 en XLIV", () => {
        expect(convertir(57)).toEqual("LVII")
      })
    })

    describe("60", () => {
      test("devrait convertir 60 en LX", () => {
        expect(convertir(60)).toEqual("LX")
      })

      test("devrait convertir 66 en LXVI", () => {
        expect(convertir(66)).toEqual("LXVI")
      })
    })

    describe("70", () => {
      test("devrait convertir 70 en LXX", () => {
        expect(convertir(70)).toEqual("LXX")
      })

      test("devrait convertir 73 en LXXIII", () => {
        expect(convertir(73)).toEqual("LXXIII")
      })
    })

    describe("80", () => {
      test("devrait convertir 80 en LXXX", () => {
        expect(convertir(80)).toEqual("LXXX")
      })

      test("devrait convertir 89 en LXXIII", () => {
        expect(convertir(89)).toEqual("LXXXIX")
      })
    })

    describe("90", () => {
      test("devrait convertir 90 en XC", () => {
        expect(convertir(90)).toEqual("XC")
      })

      test("devrait convertir 92 en LXXIII", () => {
        expect(convertir(92)).toEqual("XCII")
      })
    })
  })

  describe("Centaines", () => {

    describe("100", () => {

      test("devrait convertir 100 en C", () => {
        expect(convertir(100)).toEqual("C")
      })

      test("devrait convertir 101 en CI", () => {
        expect(convertir(101)).toEqual("CI")
      })

      test("devrait convertir 141 en CI", () => {
        expect(convertir(141)).toEqual("CXLI")
      })

      test("devrait convertir 168 en CI", () => {
        expect(convertir(168)).toEqual("CLXVIII")
      })

      test("devrait convertir 194 en CI", () => {
        expect(convertir(194)).toEqual("CXCIV")
      })
    })

    describe("200", () => {

      test("devrait convertir 200 en CC", () => {
        expect(convertir(200)).toEqual("CC")
      })

      test("devrait convertir 222 en CCXXII", () => {
        expect(convertir(222)).toEqual("CCXXII")
      })

      test("devrait convertir 279 en CCLXXIX", () => {
        expect(convertir(279)).toEqual("CCLXXIX")
      })
    })

    describe("300", () => {

      test("devrait convertir 300 en CCC", () => {
        expect(convertir(300)).toEqual("CCC")
      })

      test("devrait convertir 351 en CCCLI", () => {
        expect(convertir(351)).toEqual("CCCLI")
      })

    })

    describe("400", () => {

      test("devrait convertir 400 en CD", () => {
        expect(convertir(400)).toEqual("CD")
      })

      test("devrait convertir 482 en CCCLI", () => {
        expect(convertir(482)).toEqual("CDLXXXII")
      })

    })
  })


})
