// ==============
// Puerto
// ===============
process.env.PORT = process.env.PORT || 3001;


// ==============
// Entorno
// ===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

// ==============
// Base de datos
// ===============
let urlDB;

if(process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
}else {
    urlDB = 'mongodb+srv://root:PTlb7THnqtSKu5Wp@cluster0.ks3k2.mongodb.net/cafe'
}


process.env.urlDB = urlDB;
