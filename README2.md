- **Quiénes son los principales usuarios de producto.**
  Los principales usuarios son Adultos en una red de espias internacionales.

- **Cuáles son los objetivos de estos usuarios en relación con tu producto.**
  Los objetivos principales son comunicarse en codigo, asi que la pagina facilita crear el codigo y a la vez decodificar uno que ya tenga en mano.

- **Cómo crees que el producto que estás creando está resolviendo sus problemas.**
  Creo que resolvera los problemas, ya que la idea es la comunicacion secreta entre estas partes.

  El primer prototipo de mi pagina esta a mano, una forma muy sencilla de identificar que quiero usar unas 4 vistas.
  -Una donde se le pide el Password (que ya con anterioridad debe tener).
  -Una donde elige si quiere codificar o Decodificar un mensaje.
  -La pagina que codifica un mensaje con su boton de vuelta a la pagina anterior.
  -La pagina que de codifica un mensaje con su boton de vuelta a la pagina anterior.

  <img src="https://i.ibb.co/Qvbs1ZK/prototipo-Cipher.jpg" alt="prototipo-Cipher" border="0">

Seguido a esto, decidi hacer la maqueta en Figma para tener una idea de lo que queria, igual que ver la paleta de colores a utilizar, al ser una tematica de espias, los colores oscuros seran predominantes.

Busque fondos de pantalla uno para la principal y otro para las otras vistas.

Luego de unos dias asi quedo el diseño de lo que queria en figma

<a href="https://www.figma.com/file/gJEbHnOuf6mK0O7IqS9Pur/Untitled?node-id=0%3A1">Link a Esquema en Figma</a>

Ese es el Diseño final, ya que tuvo varios cambios a medida que empece a probar el codigo y veia lo que me era funcional y que no.

Utilice un webkid animacion para realizar el cintillo informativo, jugue con los tiempos para que pasara mas rapido o lento, en un loop infinito.

Luego en el segundo Sprint la prioridad fue el codigo en JS, que funcionara el codificar y decodificar un mensaje.

No lograba por nada del mundo que apareciera ninguna funcion, ni la mas sencilla, ahi me di cuenta que no la estaba llamando bien, tuve que preguntar y necesitaba un Window event para llamar lo que estaba en el archivo de cipher.js.
Luego vi tutoriales y busque en google, muchas formas de entender el cifrado cesar.

Yo utilice un string del alfabeto y y de ahi una formula "((shift % 26) + 26) % 26" que me parecio mucho mas facil de entender que las del ASCII, lo malo es que esa no me permite por ahora colocar lo de los caracteres especiales, pero mas a futuro voy a investigarlo.
Para que el mensaje codificado se decodificara de nuevo hice lo mismo que antes pero en vez de "+" lo que hice fue "-", asi iba al inverso.

Al tener lo requerido del cifrado, me dirigi a la pagina de inicio donde yo queria que se entrara solo con Password ya que sentia que le daba mas confidencialidad a mi usuario. Como no se todavia manejar nada de base de datos o algo, solo hice una funcion donde si el valor que escribiera en mi Password era igual al de la variable donde coloque el password que queria era correcto, me iba dejar ingresar a la siguente pagina y si era incorrecto me daria un Alerta.
