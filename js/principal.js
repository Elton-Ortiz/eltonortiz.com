//Função para a criação de topicos de atribuição meus conhecimentos.
function criarAtibuto( nomeAtributo, pontos, background) {  
    var atributo = document.getElementById('grid-container');
    var pontoAtribuido = '';
    for (var i = 0; i < pontos; i++) {
        pontoAtribuido += '<span class="ponto atribuido"> </span>';
    };
    var ponto = '';
    for (var j = 0; j < (10 - pontos); j++) {
        ponto += '<span class="ponto"> </span>';
    };
   
        if(background == ''){
            atributo.innerHTML +=
        '<div class="grid-iten-4"> <h3>' + nomeAtributo + '</h3>' + 
        '<div>'  + pontoAtribuido + ponto + '</div>  </div>';
        }else{
            atributo.innerHTML +=
        '<div class="grid-iten-4" "><img src="'+background+'"> <h3>' + nomeAtributo + '</h3>' + 
        '<div>'  + pontoAtribuido + ponto + '</div>  </div>';
        }
    };
//---------------------------------------------------------------------------------------------
//função para criação de um titulo.
function criarTitulo( titulo) {  
    var atributo = document.getElementById('grid-container');  
        atributo.innerHTML +='<div class="grid-iten-3"><h2>' + titulo + '</h2></div>';
         };
//-----------------------------------------------------------------------------------------------
//Função para a criação de topicos de atribuição criados por mim.
function criarAtibuto1( nomeAtributo) {  
    var atributo = document.getElementById('grid-container');  
        atributo.innerHTML +='<div class="grid-iten-4" > <h3>' + nomeAtributo + '</h3></div>';
};
//-------------------------------------------------------------------------------------------------------
// chamada de função para criacão da seção Meus Conhecimentos
criarTitulo('Meus Conhecimentos');

criarAtibuto( 'HTML', 8,'');
criarAtibuto( 'CSS', 7,'');
criarAtibuto( 'JavaScript', 5,'');
criarAtibuto( 'Git/GitHub', 7,'');
criarAtibuto( 'Java', 4,'');
criarAtibuto( 'MySQL', 4,'');
criarAtibuto( 'Leitura', 7,'');
criarAtibuto( 'Escrita', 7,'');
criarAtibuto('Conversação', 4,'');
//-------------------------------------------------------------------------------------------------
// chamada de função para criacão da seção Criados Por Mim
criarTitulo('Criados Por Mim');

criarAtibuto1('Jogo da Forca');
criarAtibuto1('Pedra Papel Tesoura');
criarAtibuto1('Jogo da Velha');

//-----------------------------------------------------------------------------------------------------
document.getElementById('hamburguer-icon').onclick = function(){
   document.getElementById('menu-deslizante').style.visibility= 'visible';
    };
document.getElementById('fechar').onclick = function(){
    document.getElementById('menu-deslizante').style.visibility= 'hidden';
};
    
 