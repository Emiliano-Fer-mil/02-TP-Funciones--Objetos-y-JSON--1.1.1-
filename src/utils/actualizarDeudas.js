//actualizarDeudas.js
import mpl from './mensajesParaLoguear.js'

/**
 * @callback loggerCallback
 * @param {string} error error message to display
 */

/**
 * realiza el apareo con actualizacion entre deudas y pagos, y loguea algunos eventos relevantes.
 * @param {Object[]} deudas las deudas originales
 * @param {Object[]} pagos los pagos a aplicar
 * @param {loggerCallback} logger funcion a la cual llamar en caso de necesitar loguear un evento
 * @returns {Object[]} las deudas actualizadas
 */
function actualizar(deudas, pagos, logger) {
    const arrayActualizado = []
    for (const element of pagos) {
        if (!deudas.some(deuda => deuda.dni === element.dni)) {
            mpl.armarMsgPagoSinDeudaAsociada(element)
            console.log(element)
        } else if (!deudas.some(deuda => deuda.nombre === element.nombre)) {
            const index = deudas.findIndex(deuda => deuda.dni === element.dni && deuda.nombre !== element.nombre)
            mpl.armarMsgPagoConDatosErroneos(deudas[index], element)
            console.log(deudas[index], element)
        } else {
            const deudaANetear = (deudas.findIndex(deuda => deuda.dni === element.dni))
            deudas[deudaANetear].debe -= element.pago

        }

    }
    for (const j of deudas) {
        if (j.debe < 0) {
            mpl.armarMsgPagoDeMas(j)
        } else if (j.debe > 0) {
            arrayActualizado.push(j)
        }
    }
    console.log("array actualizado: ", arrayActualizado)
    return arrayActualizado
}

export {
    actualizar
}
