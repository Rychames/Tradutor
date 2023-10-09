// Importamos o módulo Express para o nosso arquivo.
const express = require('express');

// Criamos uma instância do Express. Esta instância nos permite definir rotas, configurar middleware, entre outras coisas.
const app = express();

// Definimos a porta onde o nosso servidor irá rodar. Neste caso, escolhemos a porta 3000, mas você pode escolher outra se preferir.
const PORT = 3000;

// Aqui, definimos uma rota. Esta rota é a rota raiz ("/") do nosso servidor.
// Quando alguém acessar "http://localhost:3000/" no navegador, esta função será executada.
app.get('/', (req, res) => {
  // A função recebe dois argumentos: req (request ou requisição) e res (response ou resposta).
  // req contém informações sobre a requisição feita ao servidor.
  // res é um objeto que nos permite enviar respostas de volta ao cliente.

  // Neste caso, estamos enviando uma página de login de volta ao cliente.
  res.sendFile(__dirname + "\\pages\\index.html");
});


app.get('/tradutor',(req, res) => {
    res.sendFile(__dirname + '\\pages\\tradutor.html');
});

// Finalmente, dizemos ao nosso servidor para começar a escutar na porta que definimos anteriormente.
// A função de callback é executada uma vez que o servidor esteja rodando e escutando naquela porta.
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
