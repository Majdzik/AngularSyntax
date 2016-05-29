var path = require('path');

module.exports = {
    context: path.join(__dirname, 'App'),
    entry: './main.js',
    output: {
        path: path.join(__dirname+'/wwwroot', 'Built'),
        filename: '[name].bundle.js'
    }
};