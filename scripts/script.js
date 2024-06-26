// Função para mostrar ou ocultar o botão de voltar ao topo conforme o scroll da página
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTopo").style.display = "block";
  } else {
    document.getElementById("btnTopo").style.display = "none";
  }
}

// Função para fazer o scroll suave ao topo da página
function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}

// enviando email com clique no botao
function enviarEmail() {
  var linkEmail = "mailto:matheustruji@gmail.com?subject=";
  window.open(linkEmail, "_blank");
}

function downloadPDF() {
  var pdfUrl = "/medias/curriculo.pdf"; 

  // Cria um link temporário
  var link = document.createElement("a");
  link.href = pdfUrl;

  // Define o atributo 'download' para forçar o download do arquivo com o nome especificado
  link.setAttribute("download", "curriculo-matheus.pdf"); // Substitua pelo nome do seu arquivo PDF

  // Adiciona o link ao documento para poder clicar nele
  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}
