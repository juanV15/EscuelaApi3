const db = require('../models/database/db');



db.EstudianteCurso.create({
    clave: 123,
    matricula: 1133679
 
}).then(() => {
    console.log('Estudiante creado');
}).catch(err => {
    console.log(err);
}).then(() => {
    console.log('Cerrando conexión');
    db.sequelize;
});