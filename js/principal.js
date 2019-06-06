/*document.getElementsByClassName('aiai');
var c = document.getElementsByClassName('aiai');
var i =3;
function printar (element) {
	letra=element[0].innerText.split('');
	
	console.log(letra);
	for (i=0; i<letra.length;i++){
			console.log(letra[i]);
    		x.innerText+=letra;
    		setInterval(function(){console.log("oi");},1000);
}
}
printar(c);
*/
$(function(){
	$('p').hide();
});
var c = document.getElementsByClassName('aiai');
var i =0;
var letra=c[0].innerText.split('');
/*for (var i = 0; i <letra.length; i++) {
	
	console.log(letra[i]);*/
	
	function writer(){
		setTimeout(function(){
			console.log(letra[8]);
		},1000*i);
		i++
	}
for (var i = 0; i <letra.length; i++) {
	
	writer();
	console.log(letra[i]);
	/*console.log(letra[i])

	while(i<letra.length){
			writer();
			i++;*/
	}
	;



/*$(function(){
	$('p').hide().each(letra, function(index, value) {
  			console.log(letra[index]);
  		}});*/

