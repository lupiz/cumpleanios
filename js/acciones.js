//JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
	$('btncomenzar').on('tap',function(){
		navigator.vibrate(1000);
	});
	$('btncontinuar').on('tap',function(){
		navigator.vibrate(1000);
	});
	$('btncalcular').on('tap',function(){
		navigator.vibrate(1000);
	});
	$('btninicio').on('tap',function(){
		navigator.vibrate(1000);
	});
	$('btnatras').on('tap',function(){
		navigator.vibrate(1000);
	});
	
	var nombre;
	var dia;
	var mes;
	var anio;
	
	$(document).ready(function(e) {
	
  $('#btncontinuar').click (function (e){
	  nombre = $('#txtnombre').val();
	  });
	  
	  $('#btncalcular').click(function (e){
		  
	  dia = $('#txtdia').val();	   
	  mes = $('#txtmes').val();      
	  anio = $('#txtanio').val();
	  
	  var fecha_actual = new Date();
	 
	  var fecha_proximo_cumple = new Date (fecha_actual.getFullYear(), mes - 1, dia);
	  
	  fecha_actual = new Date(fecha_actual.getFullYear(), fecha_actual.getMonth(), fecha_actual.getDate());
	 
	  var fecha_nacimiento = new Date(anio, mes-1, dia);
	  var edad=fecha_actual.getFullYear()-anio;
	
	  if (fecha_proximo_cumple <= fecha_actual)
	  {
		  fecha_proximo_cumple = new Date (fecha_proximo_cumple.getFullYear() +1, fecha_proximo_cumple.getMonth(), fecha_proximo_cumple.getDate());
	  }
	  else
	  {
		  edad=edad-1;
	  }
		  
	  var dias_faltantes = (fecha_proximo_cumple - fecha_actual) /1000/60/60/24;
	  
	  
	  dias_faltantes=Math.round(dias_faltantes);
	  
	  
	  
	  
	 
	  $('#nombre').text(nombre);
	  
	  $('#dias').text('FALTAN' + dias_faltantes);
		  $('#cumple').text('DIAS PARA TU CUMPLE');
	  
	  if (dias_faltantes <7)
	  {
		  $('#felicidades').show();
	  }
		else
		{
			$('#felicidades').hide()
		}
		  
		  $('#edad').text('TIENES' + edad + 'AÑOS HOY');
	  
	          
		    
  });
  $('#btn_inicio').click(function(e)
  {
	  $('#txtnombre').val('')
	   $('#txtdia').val('')
	    $('#txtmes').val('')
		 $('#txtanio').val('')
  });
  
//}); 
});
});