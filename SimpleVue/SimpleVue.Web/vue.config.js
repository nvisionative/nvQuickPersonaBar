const path = require('path');

module.exports = {
    // disable hashes in filenames
    filenameHashing: false,
    //outputDir: path.resolve(__dirname, '../admin/personaBar/vue-dist/'),
    css: {
        extract: {
            filename: 'SimpleVue-bundle.min.css'
        },
    },
    configureWebpack: (config) => {
        //
        config.output.filename = 'SimpleVue-bundle.min.js'
        // No need for splitting
        config.optimization = {
            splitChunks: false
        }
    }
}