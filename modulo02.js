var modulo02 = function(initialValue){
	// atributos
	var contador = initialValue;

	// metodo privado
	var ooo = function(){

	}

	// metodos publicos
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