//index.js (RUTAS)
const express = require ('express');
const router = express.Router();

const estudiantesController=require('../controllers/estudiantesController');
const cursosController=require('../controllers/cursoController');

router.use(express.json());

router.get('/estudiantes',estudiantesController.getAllEstudiante);//Obtiene todos los estudiantes
router.get('/estudiantes/:matricula',estudiantesController.getEstudianteMatricula);//Obtiene estudiante por MATRICULA
router.delete('/estudiantes/:matricula',estudiantesController.deleteEstudianteMatricula);//Borra estudiante por ID
router.post('/estudiantes',estudiantesController.createEstudiante);//Crea estudiante
router.put('/estudiantes/:matricula',estudiantesController.put);//actualiza estudiante por ID
router.patch('/estudiantes/:matricula',estudiantesController.patch);//actualiza estudiante por ID

router.get('/cursos',cursosController.getAllCursos);//Obtiene cursos
router.get('/cursos/:clave',cursosController.getCursoClave);//Obtiene curso por Clave
router.delete('/cursos/:clave',cursosController.deleteCursoClave);//Borra curso por ID
router.post('/cursos',cursosController.createCurso);//Crea estudiante
router.put('/cursos/:clave',cursosController.put);//actualiza estudiante por ID
router.patch('/cursos/:clave',cursosController.patch);//actualiza estudiante por ID


router.post('/estudiantes/cursos',estudiantesController.addACurso);//Crea estudiante

//exporta el express
module.exports = router;

