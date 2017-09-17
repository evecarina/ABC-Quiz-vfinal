
  var imagenes=['assets/img/vaca.png',
  'assets/img/pajaro.png',
  'assets/img/jaguar.png',
  'https://ihatetomatoes.net/react-tutorials/abc-quiz/images/car.svg',
  'fonts/truck.svg'];

  var cuestionario=['¿Cuál es el animal conocido en el refranero por ser víctima de la curiosidad?',
  '¿Qué animal tiene 3 corazones?','¿A qué animal le pesa la lengua 2500Kg?','¿Qué único animal tiene las 5 vocales en su nombre?'];

  var A=[['Gato','Perro','León'],['Pulpo','Elefante','Leopardo'],['Ballena azul','Oso hormiguero','Elefante'],['Murcielago','Elefante','Ballena']];


  var btnCuestionario= document.getElementsByTagName('button');
  for (var i = 0; i < btnCuestionario.length; i++) {
     btnCuestionario[i].addEventListener('click',preguntas);
  }

  function preguntas(){
    // $("#img-header").empty()

        $("#img-header").attr("src",imagenes[i]);
        $('#pregunta').empty()
        // colocando una nueva pregunta
        $('#pregunta').append('<p>'+cuestionario[i]+'</p>');
        // colocando respuesta a los botonoes
        $('#opcion1').empty()
        $('#opcion2').empty()
        $('#opcion3').empty()

        $('#opcion1').append('<span class="letter">'+'A'+'</span>'+A[i][0]);
        $('#opcion2').append('<span class="letter">'+'A'+'</span>'+A[i][1]);
        $('#opcion3').append('<span class="letter">'+'A'+'</span>'+A[i][2]);
       }

  var i=0
  function click(){ i++ }
