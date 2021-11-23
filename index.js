const express = require(`express`);

const server = express();

server.use(express.json());

const livros = [`Doze regras para a vida`, `Storynomics`, `Cant hurt me`]

// retorna um livro

server.get('/livros/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json(livros[index]);
});

// retornar todos os livros
server.get('/livros', (req,res) => {
    return res.json(livros);
})

//criar um novo livro
server.post('/livros', (req, res) => {
    const { name } = req.body;
    livros.push(name);

    return res.json(livros);
})

// atualizar livros
server.put('/livros/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    livros[index] = name;

    return res.json(livros);
})

// excluir livros

server.delete('/livros/:index', (req, res) => {
    const { index } = req.params;

    livros.splice(index, 1);
    return res.json({ message: "O livro foi deletado"});

})

server.listen(3000);