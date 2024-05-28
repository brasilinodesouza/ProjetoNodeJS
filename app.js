//importar modulo express
const express = require('express');

//importar modulo express-handlebars
const {engine} = require('express-handlebars')

//importar modulo mysql
const mysql = require('mysql2');

//app
const app = express();

//Adicionar bootstrap
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// ADicionar CSS
app.use('/css', express.static('./CSS'));

//configuracao do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// manipulação de dados via rota

app.use(express.json());
app.use(express.urlencoded({extended:false}));



//configuracao de conexao
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'172531',
    database:'projeto'
});

//teste de conexao
conexao.connect(function(erro){
    if(erro) throw erro;
    console.log('Conexao efetuada com sucesso!');
});

//rota principal
app.get('/', function(req, res){
    res.render('formulario');
});

//rota de cadastro

app.post('/cadastrar', function(req, res){
console.log(req.body);
    res.end();

});

//servidor
app.listen(8080);

