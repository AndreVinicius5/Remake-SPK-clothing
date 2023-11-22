if (window.location.pathname.endsWith("index.html")) {
  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval(function(){
    nextImage();
  }, 5000);

  function nextImage() {
    count ++;
    if (count > 4) {
      count = 1;
    }
    document.getElementById("radio" + count).checked = true;
  }
}

// Corrige os espaços e acentos
function displayFileName(fileNameId) {
    const fileNameElement = document.getElementById(fileNameId);
    if (fileNameElement) {
    const imagePath = fileNameElement.previousElementSibling.src;
    const fileNameWithExtension = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    
    
    const decodedFileName = decodeURI(fileNameWithExtension.replace(/\.[^/.]+$/, ''));
    
    fileNameElement.textContent = decodedFileName;
}
}

// Chamar a função para exibir o nome do arquivo para cada item
displayFileName('fileName1');
displayFileName('fileName2');
displayFileName('fileName3');
displayFileName('fileName4');
displayFileName('fileName5');
displayFileName('fileName6');
displayFileName('fileName7');
displayFileName('fileName8');
displayFileName('fileName9');
displayFileName('fileName10');
displayFileName('fileName12');
displayFileName('fileName13');
displayFileName('fileName14');
displayFileName('fileName15');

 document.addEventListener("DOMContentLoaded", function() {
//troca o nome no topo da pagina
function setHeaderTitle() {
  // Obtém o elemento h1 com o id destaques1
  const h1Element = document.querySelector('#destaques1 h1');

  // Verifica se o elemento h1 foi encontrado
  if (h1Element) {
    // Define o conteúdo do h1 para "moletom"
    h1Element.textContent = "Moletons";
  }
}
})


document.addEventListener("DOMContentLoaded", function() {
  // Verifica se a página atual é "moletom.html"
  if (window.location.pathname.endsWith("moletom.html")) {
      // Obtém a referência para a imagem pelo ID
      var imagemProduto = document.getElementById("imagemProduto1");
      var imagemProduto = document.getElementById("imagemProduto2");
      var imagemProduto = document.getElementById("imagemProduto3");
      var imagemProduto = document.getElementById("imagemProduto4");
      var imagemProduto = document.getElementById("imagemProduto5");
      var imagemProduto = document.getElementById("imagemProduto6");
      var imagemProduto = document.getElementById("imagemProduto7");
      var imagemProduto = document.getElementById("imagemProduto8");
      var imagemProduto = document.getElementById("imagemProduto9");
      var imagemProduto = document.getElementById("imagemProduto10");
      var imagemProduto = document.getElementById("imagemProduto11");
      var imagemProduto = document.getElementById("imagemProduto12");
      var imagemProduto = document.getElementById("imagemProduto13");
      var imagemProduto = document.getElementById("imagemProduto14");
      var imagemProduto = document.getElementById("imagemProduto15");

      // Verifica se o elemento foi encontrado antes de tentar alterar o atributo src
      if (imagemProduto) {
          // Altera o caminho da imagem
          imagemProduto1.src =  "moletom/Moletom SPK CHAMBER.png";
          imagemProduto2.src = "moletom/Moletom SPK N1 BLACK.png";
          imagemProduto3.src = "moletom/Moletom SPK N1 WHITE.png";
          imagemProduto4.src = "moletom/Moletom SPK POP.png";
          imagemProduto5.src = "moletom/Moletom SPK New Pop.png";
          imagemProduto6.src = "moletom/Moletom SPK Shadow.png";
          imagemProduto7.src = "moletom/Moletom SPIKE Smooth Wave.png";

      } else {
          console.error("Elemento com ID 'imagemProduto' não encontrado na página.");
      }
  }
});

document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname.endsWith("moletom.html")) {
    // Itera sobre os elementos com IDs de item8 até item15
    for (var i = 8; i <= 15; i++) {
        // Constrói o ID dinamicamente
        var idItem = "item" + i;

        // Obtém a referência para o elemento pelo ID
        var elemento = document.getElementById(idItem);

        // Verifica se o elemento foi encontrado antes de tentar alterar o estilo
        if (elemento) {
            // Oculta o elemento
            elemento.style.display = "none";
        } else {
            console.error("Elemento com ID '" + idItem + "' não encontrado na página.");
        }
    }
  }
});


document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname.endsWith("moletom.html")) {
  for (var i = 8; i <= 15; i++) {
      var idItem = "item" + i;
      var elemento = document.getElementById(idItem);
      if (elemento) {
          elemento.style.display = "none";
      } else {
          console.error("Elemento com ID '" + idItem + "' não encontrado na página.");
      }
  }
}
});



document.addEventListener("DOMContentLoaded", function() {
  // Array de caminhos para as imagens
  var caminhosDasImagens = [
      "moletom/Moletom SPK CHAMBER.png",
      "moletom/Moletom SPK N1 BLACK.png",
      "moletom/Moletom SPK N1 WHITE.PNG",
      "moletom/Moletom SPK POP.png",
      "moletom/Moletom SPK  New POP.png"
  ];

  // Itera sobre os elementos com classe "itemX"
  for (var i = 1; i <= 15; i++) {
      // Constrói o ID do item dinamicamente
      var idItem = "item" + i;

      // Obtém a referência para o elemento pelo ID
      var elemento = document.getElementById(idItem);

      // Verifica se o elemento foi encontrado antes de tentar alterar o conteúdo
      if (elemento) {
          // Obtém o caminho correspondente ao índice i
          var caminhoDaImagem = caminhosDasImagens[i - 1];

          // Extrai o nome do arquivo do caminho
          var nomeDoArquivo = caminhoDaImagem.split('/').pop().split('.')[0];

          // Obtém a referência para o elemento h3 dentro do elemento #itemX
          var h3Element = elemento.querySelector('h3');

          // Verifica se o elemento h3 foi encontrado antes de tentar alterar o conteúdo
          if (h3Element) {
              // Define o conteúdo do h3 como o nome do arquivo
              h3Element.textContent = nomeDoArquivo;
          } else {
              console.error("Elemento h3 não encontrado dentro de '" + idItem + "'.");
          }
      } else {
          console.error("Elemento com ID '" + idItem + "' não encontrado na página.");
      }
  }
});


window.onload = function() {
  if (window.location.href.indexOf('moletom.html') > -1) {
    document.querySelector('#titulo').innerText = 'Moletom';
  }
}
