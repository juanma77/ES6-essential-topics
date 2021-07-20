// Se necesita el "require('path')"" ya que de forma contraria no es posible usar rutas relativas (Es requerido usar rutas absolutas).
const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'app'),
    output: {

        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'

    }



}