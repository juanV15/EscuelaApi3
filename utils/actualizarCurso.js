const db = require('../models/database/db');
db.Curso.update({
nombre: 'Quimica'
}, {
where: {
nombre: 'IA'

}
}).then((res) => {
console.log('Registros actualizados:',res);
}).catch(err => {
console.log(err);
}).then(() => {
console.log('Cerrando conexión');

});