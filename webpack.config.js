const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'),
        filename: '[name].js'
    },
    module:{
        rules:[{
            test: /.js$/,
            use:[{
                loader:path.resolve(__dirname,'./loaders/replaceLoader.js')
            }]
        }]
    }
}