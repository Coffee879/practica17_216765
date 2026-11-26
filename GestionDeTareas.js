// =====================================
// Sistema de Gestión de Tareas
// =====================================

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  for (let i = 0; i < lista.length; i++) {//  se recorre el arreglo para leer el nombre y el estado, y con el if se comprueba el estado del boolean si es true manda completada, en caso contrario manda pendiente
    console.log( lista[i].nombre);

    if (lista[i].completada == true) {
      console.log("estado: completada");
    }
    
    else  
      {
      console.log("estado: pendiente");
    }
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista)  => {
  return lista.filter(function(tarea) {// con el filter se recorre el arreglo despues se verefica cada tarea por separada y con el if se verfica el estado para regresar solo las true
    if (tarea.completada == true) {
      return true;
    }
  });
};

/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  return lista.filter(function(tarea) {// con el filter se recorre el arreglo despues se verefica cada tarea por separada y con el if se verfica el estado para regresar solo las false
    if (tarea.completada == false) {
      return true;
    }
  });
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {// con map se recorre el arreglo y se obtiene el nombre de cada tarea por separado para regresar un nuevo arreglo que contenga solamente los nombres
  return lista.map(function(tarea) {
    return tarea.nombre;
  });
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/

function contarTareas(lista) {
  let tareas = lista.length;// se guarda el valor de la longitud del arreglo en una vatiable para luego regresarlo
  return tareas;
}



// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    let completadas = obtenerCompletadas(this.tareas);
    console.log(completadas);
  },

  mostrarPendientes: function() {
    let pendientes = obtenerPendientes(this.tareas);
    console.log(pendientes);
  }
};



// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
if (tareas.length == 0) { // se checa la longitud del arreglo para confirmar si esta vacio o no
  console.log("no hay tareas");
} else {
  let totalCompletadas = obtenerCompletadas(tareas);  // se llama a la funcion obtenerCompletadas para guardar en una variable las tareas que ya estan terminadas


  if (totalCompletadas.length == tareas.length) { // se compara la cantidad de tareas completadas con el total de tareas para saber si todas ya fueron terminadas

    console.log("Todas las tareas completadas");
  }
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/


const opcion = 1;

switch (opcion) {
  case 1:
    sistema.mostrarTareas();
    break;

  case 2:
    sistema.mostrarCompletadas();
    break;

  case 3:
    sistema.mostrarPendientes();
    break;

  default:
    console.log("opbcion invalida");
}




// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/
// TODO 9: Pruebas

console.log("mostrar tareas:");
mostrarTareas(tareas);

console.log("numero de tareas:");
console.log(contarTareas(tareas));

console.log("tareas completas:");
console.log(obtenerCompletadas(tareas));

console.log("Tareas pendientes:");
console.log(obtenerPendientes(tareas));

console.log("Nombres de las tareas:");
console.log(obtenerNombres(tareas));