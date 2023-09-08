var http = require("http");

http.createServer(function(requisicao,resposta){
    // resposta.end("<h1>bem vindo ao meu site!</h1><br><h4>google.com</h4>");
    resposta.end("<body style=\"background-color:skyblue;\"><h1>Bem vindo ao meu site</h1><p>google.com</p></body>");

}).listen(3000);

console.log("Meu Servidor esta rodando!");