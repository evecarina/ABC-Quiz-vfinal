
  var imagenes=['assets/img/murcielago.png',
  'assets/img/pajaro.png',
  'assets/img/jaguar.png',
  'assets/img/pulpo.png','assets/img/gallo.gif'];

  var cuestionario=['¿Qué animal es el más venenoso del mundo?','¿Cuál es el animal conocido en el refranero por ser víctima de la curiosidad?',
  '¿Qué animal tiene 3 corazones?','¿A qué animal le pesa la lengua 2500Kg?','¿Qué único animal tiene las 5 vocales en su nombre?'];

  var A=[['Gato','Perro','León'],['Pulpo','Elefante','Leopardo'],['Ballena azul','Oso hormiguero','Elefante'],['Murcielago','Elefante','Ballena']];


  var btnCuestionario= document.getElementsByTagName('button');
  for (var i = 0; i < btnCuestionario.length; i++) {
     btnCuestionario[i].addEventListener('click',preguntas);

  }
  function preguntas(){
    //capturar los valores de las opcion del usuario
    var x=event.target.textContent;
    console.log(x);

    var respuesta = $( "input[type=button]:click").val();
    console.log(respuesta);
    // mostrar-respuesta
    $("#mostrar-respuesta").append('<p>'+cuestionario[i]);
    $("#mostrar-respuesta").append('<p>'+x+'</p>');

    $("#img-header").attr("src",imagenes[i]);
    $('#pregunta').empty()
        // colocando una nueva pregunta
    $('#pregunta').append('<p>'+cuestionario[i]+'</p>');
        // colocando respuesta a los botonoes
    $('#opcion1').empty()
    $('#opcion2').empty()
    $('#opcion3').empty()

    $('#opcion1').append( '<p>'+A[j][0]+'</p> ');
    $('#opcion2').append('<span class="letter">'+'B'+'</span>'+A[j][1]);
    $('#opcion3').append('<span class="letter">'+'C'+'</span>'+A[j][2]);



  }



var i=0
var j=0;
var x;
function click(){ i++; j++;
  if (i==5){
    document.getElementById("container").style.display="none";
    document.getElementById("final").style.display="block";
    }
  }



//
