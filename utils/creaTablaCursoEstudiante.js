const Sequelize = require('sequelize');
const sequelize = new Sequelize(
	'escolar',
	'backenduser',
	'j0129sep15',
	{
		host: 'localhost',
		dialect: 'mysql'
	});

const EstudianteCurso = sequelize.define('estudianteCurso',{
	clave: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: true
	} ,
	matricula: {
		type: Sequelize.INTEGER,
		allowNull: false,
		unique: true
	} 
	
});
EstudianteCurso.sync({ force: true});