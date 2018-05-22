window.onload = function () {

	var btn = document.getElementById("button-change");
    var txt = document.getElementById("paragraph");
    var btnDos = document.getElementById("magic");
    var txtDos = document.getElementById("text");

	btn.addEventListener('click', function() {
		
        txt.innerHTML = '<h2>Git & Gtihub TE AMAMOS</h2>';

	
} )

    btnDos.addEventListener('click', function(){

    // es una manera de desaparecer las cosas: txtDos.innerHTML ='';

    // otra manera es creando ina lista de clase aqui en js y en css con display none

    txtDos.classList.add('disappear');
    //debo recordar que cierro la llave y la funcion }) si no lo hago bota error
})

}	