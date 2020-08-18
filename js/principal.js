//-----------------------------------------------------------------------------------------------------
alert("Este site esta passando por uma reforma acompanhe as mudanças no eltonortizsite.netlify.app");

document.getElementById('hamburguer-icon').onclick = function(){
   document.getElementById('menu-deslizante').style.visibility= 'visible';
    };
document.getElementById('fechar').onclick = function(){
    document.getElementById('menu-deslizante').style.visibility= 'hidden';
};
