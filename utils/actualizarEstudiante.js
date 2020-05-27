const db = require('../models/database/db');
db.Estudiante.update({
nombres: 'cacas'
}, {
where: {
nombres: 'Jose'

}
}).then((res) => {
console.log('Registros actualizados:',res);
}).catch(err => {
console.log(err);
}).then(() => {
console.log('Cerrando conexión');

});