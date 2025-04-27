//apareoConActualizaciones.js
import * as fs from 'fs/promises'
import { actualizar } from './actualizarDeudas.js'
/**
 * recibe las rutas del archivo de deudas original, archivo de pagos, archivo de deudas con las actualizaciones, y archivo de log para registrar errores o advertencias.
 * @param {string} rutaDeudasOld
 * @param {string} rutaPagos
 * @param {string} rutaDeudasNew
 * @param {string} rutaLog
 */
async function actualizarArchivosDeudas(rutaDeudasOld, rutaPagos, rutaDeudasNew, rutaLog) {
    try {
        const deudas = await fs.readFile(rutaDeudasOld, 'utf-8')
        const arrayDeudas = JSON.parse(deudas)
        const pagos = await fs.readFile(rutaPagos, 'utf-8')
        const arrayPagos = JSON.parse(pagos)
    
    

    
        const arrayDeudaNueva = JSON.stringify(actualizar(arrayDeudas, arrayPagos))
        await fs.writeFile(rutaDeudasNew, arrayDeudaNueva)
        console.log("ahi la tenés, putazo!!")
    } catch (error) {
        console.log(`error al ESCRIBIR ARCHIVOS : ${error}`)
    }
}

export default {
    actualizarArchivosDeudas
}
