
function guardar(){
var elemento={
id: $("#id").val(),
brand: $("#brand").val(),
rooms: $("#rooms").val(),
category_id: $("#category_id").val(),
name: $("#name").val()
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento,
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:'POST',
      
      success:function(response) {
        console.log(response);
		  limpiarFormulario();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	complete: function (jqXHR, textStatus) {
            alert('Petición realizada ' + jqXHR.status);
            limpiarFormulario();
        }
  });

}

function consultar(){

  $.ajax({
      dataType: 'json',
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:'GET',
	  
	  
      success:function(response) {
		  
        var misItems=response.items;
		  $("#miResultado").append("<tr> + <th >ID<th>CABAÑA<th>CUARTOS<th>CATEGORIA<th>NOMBRE</th></tr>");

        for(i=0;i<misItems.length;i++){
         
		$("#miResultado").append("<tr>");
		$("#miResultado").append("<td>"+misItems[i].id+"</td>");
          $("#miResultado").append("<td>"+misItems[i].brand+"</td>");
          $("#miResultado").append("<td>"+misItems[i].rooms+"</td>");
          $("#miResultado").append("<td>"+misItems[i].category_id+"</td>");
			$("#miResultado").append("<td>"+misItems[i].name+"</td>");
          $("#miResultado").append('<td><button onclick="eliminar('+misItems[i].id+')">Borrar</button></td>');
          $("#miResultado").append('<td><button onclick="obtenerItemEspecifico('+misItems[i].id+')">Cargar</button></td>');
          $("#miResultado").append("</tr>");
        }
		  

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	 
  });

}


function eliminar(idElemento){
var elemento={
  id:idElemento
};


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
	
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
}


function obtenerItemEspecifico(idItem){
	
  $.ajax({
      dataType: 'json',
	  
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin/"+idItem,
      type:'GET',
      success:function(response) {
        
        var item=response.items[0];

        $("#id").val(item.id);
        $("#brand").val(item.brand);
        $("#rooms").val(item.rooms);
        $("#category_id").val(item.category_id);
		$("#name").val(item.name);
		  console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function actualizar(){
var elemento={
id: $("#id").val(),
brand: $("#brand").val(),
rooms: $("#rooms").val(),
category_id: $("#category_id").val(),
name: $("#name").val()
  }


var dataToSend=JSON.stringify(elemento);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/cabin/cabin",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
		  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	complete: function (jqXHR, textStatus) {
            alert('Petición realizada ' + jqXHR.status);
            limpiarFormulario1();
        }
  });

}

function limpiarFormulario() {
	
	
        $("#id").val("");
        $("#brand").val("");
        $("#rooms").val("");
        $("#category_id").val("");
		$("#name").val("");
	    $("#miResultado").val("");
	
}


function guardar1(){
var elemento1={
id: $("#idC").val(),
name: $("#nameC").val(),
email: $("#email").val(),
age: $("#age").val(),
	
  }


var dataToSend=JSON.stringify(elemento1);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento1,
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
      type:'POST',
      
      success:function(response) {
        console.log(response);
		  limpiarFormulario();
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	complete: function (jqXHR, textStatus) {
            alert('Petición realizada ' + jqXHR.status);
            limpiarFormulario1();
        }
  });

}

function consultar1(){

  $.ajax({
      dataType: 'json',
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
      type:'GET',
	  
	  
      success:function(response) {
		  
        var misItems1=response.items;
		  $("#miResultado1").append("<tr> + <th >ID<th>NOMBRE<th>EMAIL<th>EDAD</th></tr>");

        for(i=0;i<misItems1.length;i++){
         
		$("#miResultado1").append("<tr>");
		$("#miResultado1").append("<td>"+misItems1[i].id+"</td>");
        $("#miResultado1").append("<td>"+misItems1[i].name+"</td>");
        $("#miResultado1").append("<td>"+misItems1[i].email+"</td>");
        $("#miResultado1").append("<td>"+misItems1[i].age+"</td>");
		$("#miResultado1").append('<td><button onclick="eliminar1('+misItems1[i].id+')">Borrar</button></td>');
		$("#miResultado1").append('<td><button onclick="obtenerItemEspecifico1('+misItems1[i].id+')">Cargar</button></td>');
        $("#miResultado1").append("</tr>");
        }
		  

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	 
  });

}

function eliminar1(idElemento1){
var elemento1={
  id:idElemento1
};


var dataToSend=JSON.stringify(elemento1);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
	
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
}

function actualizar1(){
var elemento1={
id: $("#idC").val(),
name: $("#nameC").val(),
email: $("#email").val(),
age: $("#age").val(),
	
}


var dataToSend=JSON.stringify(elemento1);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
		  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	complete: function (jqXHR, textStatus) {
            alert('Petición realizada ' + jqXHR.status);
            limpiarFormulario1();
        }
  });

}

function obtenerItemEspecifico1(idItem){
	
  $.ajax({
      dataType: 'json',
	  
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client/"+idItem,
      type:'GET',
      success:function(response) {
        
        var item1=response.items[0];
		  

        $("#idC").val(item1.id);
        $("#nameC").val(item1.name);
        $("#email").val(item1.email);
        $("#age").val(item1.age);
		  console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function limpiarFormulario1() {
	
	
    $("#idC").val("");
	$("#nameC").val("");
    $("#email").val("");
    $("#age").val("");
    $("#miResultado1").val("");
	
}

function guardar2(){
var elemento2={
id: $("#idM").val(),
messagetext: $("#messagetext").val(),
	
  }


var dataToSend=JSON.stringify(elemento2);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:elemento2,
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
      type:'POST',
      
      success:function(response) {
        console.log(response);
		  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	complete: function (jqXHR, textStatus) {
            alert('Petición realizada ' + jqXHR.status);
            limpiarFormulario2();
        }
  });

}

function consultar2(){

  $.ajax({
      dataType: 'json',
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
      type:'GET',
	  
	  
      success:function(response) {
		  
        var misItems2=response.items;
		  $("#miResultado2").append("<tr> + <th >ID<th>MENSAJE</th></tr>");

        for(i=0;i<misItems2.length;i++){
         
		$("#miResultado2").append("<tr>");
		$("#miResultado2").append("<td>"+misItems2[i].id+"</td>");
        $("#miResultado2").append("<td>"+misItems2[i].messagetext+"</td>");
		$("#miResultado2").append('<td><button onclick="eliminar2('+misItems2[i].id+')">Borrar</button></td>');
		$("#miResultado2").append('<td><button onclick="obtenerItemEspecifico2('+misItems2[i].id+')">Cargar</button></td>');
        $("#miResultado2").append("</tr>");
        }
		  

      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	 
  });

}

function eliminar2(idElemento2){
var elemento2={
  id:idElemento2
};


var dataToSend=JSON.stringify(elemento2);
//JSON= JavaScript Object Notation
$.ajax({
      dataType:'json',
      data:dataToSend,
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
      type:'DELETE',
      contentType:'application/json',
      success:function(response) {
        console.log(response);
	
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });
}

function actualizar2(){
var elemento1={
id: $("#idM").val(),
messagetext: $("#messagetext").val(),
	
}


var dataToSend=JSON.stringify(elemento1);
//JSON= JavaScript Object Notation
$.ajax({
      dataType: 'json',
      data:dataToSend,
      contentType:'application/json',
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message",
      type:'PUT',
      
      success:function(response) {
        console.log(response);
		  
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      },
	complete: function (jqXHR, textStatus) {
            alert('Petición realizada ' + jqXHR.status);
            limpiarFormulario2();
        }
  });

}

function obtenerItemEspecifico2(idItem){
	
  $.ajax({
      dataType: 'json',
	  
      url:"https://gb660696777d267-prueba.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/"+idItem,
      type:'GET',
      success:function(response) {
        
        var item2=response.items[0];

        $("#idM").val(item2.id);
        $("#messagetext").val(item2.messagetext);
        
		  console.log(response);
      },
      
      error: function(jqXHR, textStatus, errorThrown) {
            
      }
  });

}

function limpiarFormulario2() {
	
	
    $("#idM").val("");
	$("#messagetext").val("");
    $("#miResultado2").val("");
	
}

function soloLectura() {
    $("#id").prop("readonly", false);
}








