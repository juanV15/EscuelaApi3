
const db = require ('../models/database/db');

//busca estudiantes
async function findAll(){
    let estudiantes = await db.Estudiante.findAll();
    return estudiantes;
}

async function findByMatricula(matricula){
    let estudiante = await db.Estudiante.findAll({
        where: {
                 matricula: matricula
               }
    });
    return estudiante;
};

//borra estudiante por MATRICULA
async function eraseMatricula(matricula) {
    let estudiante = await db.Estudiante.destroy({
        where: {
            matricula: matricula
        }
    });
    return estudiante;
};

async function putEstudiante (body){

    console.log(body.matricula);

    let estudiante= await db.Estudiante.update({

       
        
        apellidoPaterno: body.apellidoPaterno,
        apellidoMaterno: body.apellidoMaterno,
        nombres: body.nombres,
        semestreIngreso:body.semestreIngreso,
        creditosCursados:body.creditosCursados
        
        },
        { where:
                {
                
                    matricula: body.matricula

                   
                }
        });
    
    return estudiante;
}

async function addEstudiante(body){
            
    let estudiante= await db.Estudiante.create({

        matricula: body.matricula,
        apellidoPaterno: body.apellidoPaterno,
        apellidoMaterno: body.apellidoMaterno,
        nombres: body.nombres,
        semestreIngreso:body.semestreIngreso,
        creditosCursados:body.creditosCursados
    });

    return estudiante;

}
async function savePatch (body){

    if(body.apellidoPaterno!=undefined)
    {
         estudiante=await db.Estudiante.update(
            {
                apellidoPaterno: body.apellidoPaterno
            },
            { where:
                    {
                        matricula: body.matricula
                    }
            });
    }

    if(body.apellidoMaterno!=undefined)
    {
         estudiante=await db.Estudiante.update(
            {
                apellidoMaterno: body.apellidoMaterno
            },
            { where:
                    {
                        matricula: body.matricula
                    }
            });
    }

    if(body.nombre!=undefined)
    {
         estudiante=await db.Estudiante.update(
            {
                nombre: body.nombre
            },
            { where:
                    {
                        matricula: body.matricula
                    }
            });
    }
    if(body.semestreIngreso!=undefined){
        estudiante=await db.Estudiante.update(
            {
                semestreIngreso: body.semestreIngreso
            },
            { where:
                    {
                        matricula: body.matricula
                    }
            });
    }
    if(body.creditosCursados!=undefined)
    {
        estudiante=await db.Estudiante.update(
            {
                creditosCursados: body.creditosCursados
            },
            { where:
                    {
                        matricula: body.matricula
                    }
            });
    }
    return estudiante;
}

async function agregarCurso(matricula,clave){

    console.log(matricula);
    let estudianteCurso= await db.EstudianteCurso.create({
        clave: clave,
        matricula: matricula,

    });
        return estudianteCurso;
}
 

//exporta los métodos
exports.findAll = findAll;
exports.findByMatricula = findByMatricula;
exports.eraseMatricula = eraseMatricula;
exports.addEstudiante=addEstudiante;
exports.putEstudiante=putEstudiante;
exports.savePatch=savePatch;
exports.agregarCurso=agregarCurso;