/*59) viene de App.js. Importamos react. Creamos el
componente ListaDeTareas (function)*/
//60) fragmentos son las llaves vacías, cuando no queremos agregar otro contenedor
//61) Agregamos el componente TareaFormulario dentro del contenedor sin nombre y abajo un div 
//62) En el DIV bajo TareaFormulario crearemos una lista de componentes
//63) export default ListaDeTareas;
//64) agregamos hoja de estilo ListaDeTareas
//65) vamos a App.js y creamos el comp ListaDeTareas dentro de MisTareas
//68) viene de App.js. Importamos un hook dentro de import React, useState
// 85) Viene de Tarea.js. Definimos una función: const agregarTarea. Decimos "tarea agregada" y después mostramos el contenido de la tarea.

// 86) ¿Qué debe ocurrir p/q se agregue una tarea? Cuando se haga click sobre el componente de esta página TareaFormulario, queremos que
// function ListaDeTareas () { lo sepa y que se agregue esa tarea
// const agregarTarea = tarea => {
//   console.log("Tarea agregada");
//   console.log(tarea);

// al estado 

// const [tareas,setTareas] = useState([]); --TareaFormulario, hijo, actualizará el estado del padre, const tareas,setTareas

// 87) import Tarea from './Tarea';

//88) Vamos a TareaFormulario.js

//119) viene de TareaFormulario.js

//120) vamos hasta   return (
    // <>
    // <TareaFormulario /> y creamos un onSubmit

//121) creamos un prop que se llama onSubmit y que llama a la función agregarTarea

//122)   Deberíamos ver el msj Tarea agregada
// const agregarTarea = tarea => {
  //   console.log("Tarea agregada");
  //   console.log(tarea);
  // }

//123) vamos  a TareaFormulario

//124) después a const tareaNueva

//125) en TareaFormulario.js, props.onSubmit(tareaNueva); 

//126) mandamos la función al formulario y el formulario pasa por props y después la regresa a ListaDeTareas

//127) borramos los console.log de const agregarTarea = tarea => { y agregamos un condicional

//128)     if (tarea.texto.trim()) {} 
//Como tarea es objeto, verificamos que su propiedad texto no sea una cadena vacía

//129) para quitar cualquier espacio, al principio o final del texto, tarea.texto = tarea.texto.trim();

//130) tomamos el estado actual de las tareas y agregamos la tarea nueva con const tareasActualizadas = []

//131) el array contendrá primero la tarea nueva y todas las anteriores, con operador spread, las convertimos en tareas individuales

//132) setTareas(tareasActualizadas);

//133) Vamos a tareas.map( (tarea) =>  y pasamos key={tarea.id}, para que React sepa el orden

//134)   const agregarTarea = tarea => {
    //console.log(tarea);

//135) Vamos a Tarea.css    

import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas () {

// 69) creamos el array: "tareas" es el estado que queremos mantener y setTareas es lo que actualizará ese estado
/*70) llamamos al hook useState dsps del = 
Entre paréntesis pasamos un array vacío, pq ese será el valor inicial
*/

  const [tareas,setTareas] = useState([]);

  const agregarTarea = tarea => {
    console.log(tarea);

    if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
      }   
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !==id); 
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
    {/* 71) renderizaremos una lista de componentes entre llaves */}
      {
      /* 72) tomamos el array tareas, que definimos arriba como estado y luego llamamos a la función map, 
      que tomará cada una de las tareas y las pasará como argumento para la función y realizará lo que 
      nosotros especifiquemos con esa tarea. En este caso, queremos crear un componente tarea p/cada una
      de las tareas del arreglo.
      Cada tarea se representará como un OBJETO en el ARRAY
      Para cada una crearemos un componente de React
      Cada tarea tendrá un texto específico
      Para representar a cada tarea, usaremos un OBJETO de JS
      Es decir, tendremos un array de objetos, donde cada objeto definirá las características de cada tarea
      Todos esos objetos estarán en el mismo arreglo
      Debido a map, los objetos se tomarán uno por uno y se pasarán a((tarea) como un argumento
      y luego se creará un componente de React:
      <Tarea 
         texto {tarea.texto}*/
      // 73) vamos a Tarea.js
      
      //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
        tareas.map( (tarea) => 
          <Tarea 
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        )
      }
      </div>
    </>
  );
}

export default ListaDeTareas;