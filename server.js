// Importamos o módulo Express para o nosso arquivo.
const express = require('express');
const translateText = require('./utils/translator');
const bodyParser = require('body-parser');


// Criamos uma instância do Express. Esta instância nos permite definir rotas, configurar middleware, entre outras coisas.
const app = express();

// Indique ao Express onde encontrar arquivos estáticos, como seu JavaScript, CSS, imagens, etc.
// Ajuste 'caminho_para_sua_pasta_scripts' para o nome real da sua pasta.
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use(bodyParser.json());

// Definimos a porta onde o nosso servidor irá rodar. Neste caso, escolhemos a porta 3000, mas você pode escolher outra se preferir.
const PORT = 3000;



app.post('/translate', async (req, res) => {
  try {
      const textToTranslate = req.body.text;
      const translatedText = await translateText(textToTranslate);
      res.json({ translation: translatedText });
  } catch (error) {
      console.error(error); // Log do erro para diagnóstico
      res.status(500).send('An error occurred while processing your request.');
  }
});

// Aqui, definimos uma rota. Esta rota é a rota raiz ("/") do nosso servidor.
app.get('/', (req, res) => {
  res.sendFile(__dirname + "\\pages\\index.html");
});

app.get('/tradutor',(req, res) => {
    res.sendFile(__dirname + '\\pages\\tradutor.html');
});

// Finalmente, dizemos ao nosso servidor para começar a escutar na porta que definimos anteriormente.
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
