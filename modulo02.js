var modulo02 = function(initialValue){
	var contador = initialValue;

	return {
		contar: function(){
			contador++;
		},
		escrever: function(){
			console.log(contador);
		}
	}
}

module.exports = modulo02;