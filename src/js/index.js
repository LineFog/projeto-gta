 /*
 
 Objtivo 1 - quando o usuario clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataformas
      Passo 1- pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuario clicar em cima dele
      
     Passo 2 - pegar o elemento do conteudo que precisa ser mostrado

     Passo 3 - pegar o clique do usuario no js

     Passo 4 - quando o usuario clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteudo apareça


 Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuario clicar encima do botão, o conteúdo deve ser escondido
 
  Passo 1- Verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente

 */

 const botao = document.querySelector(".btn-plataforma");
 const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

 botao.addEventListener("click", () =>{  
  elementoPlataformas.classList.toggle("ativo"); 
 });


