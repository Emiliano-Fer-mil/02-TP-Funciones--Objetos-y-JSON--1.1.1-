/**
 * ordena (in place) una coleccion de datos segun las claves provistas.
 * @param {Object[]} coleccion el array que quiero ordenar
 * @param {string[]} claves las claves por las que quiero ordenar, por orden de importancia
 */
function ordenar(coleccion, claves) {
}

/**
 * chequea si dos arrays tienen el mismo contenido, independientemente de su orden.
 * @param {Object[]} arr1 el primer array a comparar
 * @param {Object[]} arr2 el segundo array a comparar
 */
function mismosElementos(arr1, arr2) {
    for (const elem of arr1) {
        if (!arr2.includes(elem)) {
            return false
        }
    }
    for (const elem of arr2) {
        if (!arr1.includes(elem)) {
            return false
        }
    }
    if (arr1.length != arr2.length) {
        return false
    }
    return true
}

export {
    mismosElementos,
    ordenar
}