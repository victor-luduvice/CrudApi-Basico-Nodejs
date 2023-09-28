import express, { json } from 'express';
const server = express();
server.use(json());

const cursos = ['FullStack' , 'desenvolvimento de games' , 'youtube']

//Retornar um Curso!
server.get('/curso/:index' , (req, res) => {
    const{ index } = req.params

    return res.json(cursos[index]);
});

//Retornar Todos os Cursos!
server.get('/cursos' , (req, res) =>{
    return res.json(cursos);
});

//Criar um Novo Curso!
server.post('/cursosEditar' , (req) => {
    const { name } = req.body;
    cursos.push(name);
});

//Atualizar um Curso!
server.put('/cursosAtua/:index' , (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[ cursos ] = name;
    return res.json(cursos);
});

//Deletar um Curso!
server.delete('/cursoDel/:index' , (req, res) =>{
    const { index } = req.params;

    cursos.splice(index, 1);
    return res.json({message:"O Curso foi Deletado"});

});
server.listen(8081);
console.log(" server is running!")
//http:localhost:8081