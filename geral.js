//************************
// inserindo modelo-DS
//************************
var css = document.createElement("link");
css.setAttribute("rel", "stylesheet");
css.setAttribute("type", "text/css");
css.setAttribute("href", "css/estilo.css");
document.getElementsByTagName("head")[0].appendChild(css);

document.body.classList.add("modelo-DS");

var text = '{ "inicial" : [' +
'{ "0":"Aulas"},' +
'{ "segundoCartao":"2"},' +
'{ "terceiroCartao":"3"},' +
'{ "quartoCartao":"4"} ]}';
    
document.getElementsByClassName(".cartao.primeiro").innerHTML = JSON.parse(text).inicial[0];
