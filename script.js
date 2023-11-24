if (window.location.pathname.endsWith("index.html")) {
  let count = 1;
  document.getElementById("radio1").checked = true;

  setInterval(function(){
    nextImage();
  }, 5000);

  function nextImage() {
    count ++;
    if (count > 5) {
      count = 1;
    }
    document.getElementById("radio" + count).checked = true;
  }
}


function displayFileName(fileNameId) {
    const fileNameElement = document.getElementById(fileNameId);
    if (fileNameElement) {
    const imagePath = fileNameElement.previousElementSibling.src;
    const fileNameWithExtension = imagePath.substring(imagePath.lastIndexOf('/') + 1);
    
    
    const decodedFileName = decodeURI(fileNameWithExtension.replace(/\.[^/.]+$/, ''));
    
    fileNameElement.textContent = decodedFileName;
}
}


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

function setHeaderTitle() {
 
  const h1Element = document.querySelector('#destaques1 h1');

  
  if (h1Element) {
  
    h1Element.textContent = "Moletons";
  }
}
})


document.addEventListener("DOMContentLoaded", function() {

  if (window.location.pathname.endsWith("moletom.html")) {
    
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

      
      if (imagemProduto) {
         
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
  
  var caminhosDasImagens = [
      "moletom/Moletom SPK CHAMBER.png",
      "moletom/Moletom SPK N1 BLACK.png",
      "moletom/Moletom SPK N1 WHITE.PNG",
      "moletom/Moletom SPK POP.png",
      "moletom/Moletom SPK  New POP.png"
  ];

  
  for (var i = 1; i <= 15; i++) {
     
      var idItem = "item" + i;

      
      var elemento = document.getElementById(idItem);

      
      if (elemento) {
       
          var caminhoDaImagem = caminhosDasImagens[i - 1];

       
          var nomeDoArquivo = caminhoDaImagem.split('/').pop().split('.')[0];

         
          var h3Element = elemento.querySelector('h3');

         
          if (h3Element) {
             
              h3Element.textContent = nomeDoArquivo;
          } else {
              console.error("Elemento h3 não encontrado dentro de '" + idItem + "'.");
          }
      } else {
          console.error("Elemento com ID '" + idItem + "' não encontrado na página.");
      }
  }
});
