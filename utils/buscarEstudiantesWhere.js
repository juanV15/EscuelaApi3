const db = require('../models/database/db');
db.Estudiante.findAll({
	where: {
		semestreIngreso: '2019',
		matricula: 15
	}
}).
then((res) => {
	res.forEach( rec => {
		console.log(rec.dataValues);
	})
	db.sequelize;
});