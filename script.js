var categorias = [
  "Açougue",
  "Bebidas",
  "Cereais",
  "Congelados",
  "Doces",
  "Enlatados",
  "Farinaceos",
  "Frios",
  "Higiene",
  "Hortifruti",
  "Laticinios",
  "Limpeza",
  "Molhos",
  "Padaria"
];

var lista = [];
var produto = "";
var quantidade = "";
var categoria = "";
var divCategorias = "";

divCategorias +=
  "Categoria: <select name='categoriasSelect' id='categoriasSelect'>";

for (var item in categorias) {
  divCategorias +=
    "<option value='" +
    categorias[item] +
    "'>" +
    categorias[item] +
    "</option>";
}

divCategorias += "</select>";
document.getElementById("divCategorias").innerHTML = divCategorias;

function addItem() {
  produto = document.getElementById("item").value;
  quantidade = document.getElementById("quantidade").value;
  categoria = document.getElementById("categoriasSelect").value;

  var objetoProduto = {
    produto: produto,
    quantidade: quantidade,
    categoria: categoria
  };

  lista.push(objetoProduto);

  document.getElementById("item").value = "";
  document.getElementById("quantidade").value = "";
  funcao1()
}

function exibirLista() {
  var htmlCode = "<h3>Lista de Compras Final:</h3>";

  var categoriasSelecionadas = [];

  for (var k in lista) {
    if (!categoriasSelecionadas.includes(lista[k].categoria))
      categoriasSelecionadas.push(lista[k].categoria);
  }

  for (var i in categoriasSelecionadas) {
    htmlCode += "<ul>" + categoriasSelecionadas[i] + ":</ul>";
    for (var j in lista) {
      if (lista[j].categoria == categoriasSelecionadas[i]) {
        htmlCode +=
          "<li>" + lista[j].produto + ": " + lista[j].quantidade + "</li>";
      }
    }
  }
  limparContent();

  document.getElementById("content").innerHTML = htmlCode;
}
function limparContent() {
  document.getElementById("content").innerHTML = "";
}
