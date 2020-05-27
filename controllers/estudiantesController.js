const estudiantesModel=require('../models/estudiantesModel');
const cursosModel=require('../models/cursosModel');

//muestra estudiantes
function getAllEstudiante(req,res){
     estudiantesModel.findAll().then((estudiantes)=>{
          res.status(200).json(estudiantes);
     }).catch(err=>{
          res.status(400).json(err);
     });
}

// //muestra estudiante por MATRICULA
function getEstudianteMatricula(req, res){
     estudiantesModel.findByMatricula(req.params.matricula).then((estudiante) => {
          res.status(200).json(estudiante);
     }).catch(err => {
          res.status(500).json({error: "No encontrado"});
     });
}

//borra estudiante por MATRICULA
function deleteEstudianteMatricula(req,res) {
     if(estudiantesModel.eraseMatricula(req.params.matricula)){
          res.status(200).json({msg:`matricula: ${req.params.matricula} deleted succesfully`})
     } else {
          res.status(500). json({error:`could not delete matricula: ${req.params.matricula}`})
     }
};

//crea estudiante POST
function  createEstudiante (req, res){
     console.log("Entro");//para ver si entra al código
     console.log(req.body);//para ver cuerpo de la petición
     let r = estudiantesModel.addEstudiante(req.body);
     if (r) {
          res.status(200).json({msg:`matricula: ${req.params.matricula} creada`})
     } else {
          res.status(500).json({error: "No se pudo crear"});
     }
}

function  put (req, res){
     console.log("Entrodsfsdfssd");//para ver si entra al código
   
     let r = estudiantesModel.putEstudiante(req.body);
     if (r) {
          res.send(String(r));
     } else {
          res.status(500).json({error: "No se pudo crear"});
     }
}


// //actualiza estudiante PATCH
function patch (req, res){
     console.log("Entro");//para ver si entra al código
     let r =  estudiantesModel.savePatch(req.body);
     if(r){
          res.send(String(r));
     }else{
          res.status(500).json({error: "No existe"});
     }
}

function addACurso(req,res){
     console.log("sdfsfdsf");
     if(estudiantesModel.findByMatricula(req.bod.matricula) && cursosModel.findByClave(req.body.findByClave)){
     if(estudiantesModel.agregarCurso(req.body.matricula,req.body.findByClave)){

          res.status(200).json(req.body);
     }else{
          res.status(400).json({error: 'Existente'});
     }
}else{
     res.status(400).json({error: 'No encontrado'});
}

}


exports.getAllEstudiante = getAllEstudiante;
//exports.getEstudianteId = getEstudianteId;
exports.getEstudianteMatricula = getEstudianteMatricula;
exports.deleteEstudianteMatricula= deleteEstudianteMatricula;
 exports.patch = patch;
 exports.createEstudiante = createEstudiante;
 exports.put= put;
exports.addACurso = addACurso;

 