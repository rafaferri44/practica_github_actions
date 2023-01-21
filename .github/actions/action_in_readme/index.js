const path = require('path');
const fs = require("fs");

const readme = path.resolve('./README.md')
const resultado = process.env.resultado;
let URL_good = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png'
let URL_bad = 'https://openclipart.org/image/800px/161515'
let URL = resultado == 'success' ? URL_good : URL_bad;

fs.readFile(readme, 'utf8', function (err, data) {
    if (err) throw err;
    let new_readme = data.search(URL_good) !== -1 ? data.replace(URL_good, URL) : data.replace(URL_bad, URL)
    fs.writeFile(readme, new_readme, function (err) {
        if (err) throw err;
        console.log('Archivo actualizado');
    })
});