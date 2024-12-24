const BancoArquivo= [
    { name: "Arquivo 1", image: "https://via.placeholder.com/100" }
];

const categoryDatabase = [
    { id: 1, name: "Brinquedo" }

];

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal_arquivo");
    const botaoAdicionar = document.getElementById("botao_add_arquivos");
    const botaoCancelar = document.getElementById("cancelar_modal");
  
    // Abre o modal ao clicar no botão de adicionar
    botaoAdicionar.addEventListener("click", () => {
      modal.showModal();
    });  
  
    // Fecha o modal ao clicar no botão de cancelar
    botaoCancelar.addEventListener("click", () => {
      modal.close();
    });
  });

