// Se necesita el "require('path')"" ya que de forma contraria no es posible usar rutas relativas (Es requerido usar rutas absolutas).
const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'app'),
    output: {

        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'

    },
    devServer: {

        port: 3000,
        contentBase: path.resolve(__dirname, 'build')

    },
    /* Los módulos son para albegar en conjunto cierta funcionalidad de la aplicación, en el mismo lugar. */
    /* El "$" significa el final de la línea. */
    /* El "use : [...] es para escribir los cargadores de librerías en específico". */
    module: {

        rules: [

            {

                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            }

        ]


    }




}