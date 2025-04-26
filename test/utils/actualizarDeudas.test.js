import assert from 'assert'
import { actualizar } from '../../src/utils/actualizarDeudas.js'

describe('apareoConActualizacion', function () {
  describe('actualizarDeudas', function () {
    describe('si no se reciben deudas ni pagos', function () {
      it('devuelve una coleccion vacia', function () {
        const deudas = []
        const pagos = []
        const logger = () => { }
        const resultado = actualizar(deudas, pagos, logger)
        assert.deepStrictEqual(resultado, [])
      })
    })
  })
})