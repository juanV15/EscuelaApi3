const db = require('../models/database/db');
db.Curso.findAll({
	where: {
        clave: 1133,
		creditos: 8
		
	}
}).
then((res) => {

	res.forEach( rec => {
		console.log(rec.dataValues);
	})
	db.sequelize;
});