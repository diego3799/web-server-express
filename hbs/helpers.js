const hbs = require('hbs')

hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((pal, i) => {
        palabras[i] = pal.charAt(0).toUpperCase() + pal.slice(1);
    })
    return palabras.join(' ');
})