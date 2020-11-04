$(document).ready(function() {
				$("#inicio").click(function(event) {
					$("#capa").load('index.html #capa');
				});
				$("#registro").click(function(event) {
					$("#capa").load('registro.html #contenidoRegistro');
				});
});