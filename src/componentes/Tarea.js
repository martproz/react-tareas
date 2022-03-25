//75) viene de ListaDeTareas.js. En function Tarea, ademas de "texto" y "completada", necesitaremos un "ID"
//76) agregamos completarTarea y eliminarTarea
//77) Estos son los 5 props que tomará el componente: function Tarea( {id, texto, completada, completarTarea, eliminarTarea} ) {
//78) completarTarea y eliminarTarea se llamarán como función en caso de que ocurra un envento, para que se marque una tarea como completada si se hace click sobre el div que contiene el texto
//79) vamos al div de "tarea-texto" y creamos un onClick, que necesitará una función anónima
//80) cuando se haga click en el onClick -div que contiene el texto- se llama a completarTarea, pero necesitará un ID para saber qué tarea marcar como completada
//81) Este onClick guardará la lista de tareas en ListaDeTareas.js, "tareas" de la    const [tareas,setTareas] = useState([]);
//82) Ese valor se actualizará si hacemos click en completarTarea
//83) hacemos lo mismo sobre EliminarTarea, si se hace click sobre el ícono
//84) vamos a ListaDeTareas.js

// 13) Viene de App.js
//29) viene de App.js: importamos el CSS de tarea, sin nombre, sólo con dirección
import React from 'react';
import '../hojas-de-estilo/Tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

//30) vamos a App.js, a pasar el texto del componente
/*33) importamos react icons: https://react-icons.github.io/react-icons/ npm install react-icons --save 
En package.json estará el paquete instalado.
En la web, vamos a Ant Design Icons
import { FaBeer } from 'react-icons/fa';  --esta línea se pega en import de arriba y se modifica el nombre del ícono entre llaves
Las últimas dos letras salen del adress de Ant Design: https://react-icons.github.io/react-icons/icons?name=ai
Estos elementos son componentes de React, por lo que se definiará como tal dentro del div tarea icono
*/

//14) definimos el componente funcional
//15) creamos un div con el contenedor principal y otro con el contenedor del texto de la tarea
//16) el texto se toma como un prop entre llaves
//17) se agrega ese prop dentro de Tarea
//18) otro div bajo {texto} que contendrá el ícono
//19) exportamos al final Tarea.js p/pdr mostrarla
//20) creamos carpeta hojas de estilo y le damos estilo a la tarea
//36) pasamos un 2do prop p/la tarea: completada
/*37) En lugar de aplicar una clase fija "tarea-contenedor", agregaremos entre llaves un operador ternario:
  Si completada es true, entonces se asignará tarea-contenedor completada.
  Si completada falsa (dsps de los 2 puntos, se asigna tarea-contenedor)
  Vamos a Tareas.css
*/
function Tarea( {id, texto, completada, completarTarea, eliminarTarea} ) {
    return (
      <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor' }>
        <div className="tarea-texto"
        onClick= {() => completarTarea (id)}
        >
          {texto}
        </div>
        <div className='tarea-contenedor-iconos'
        onClick= {() => eliminarTarea (id)}
        >
{/* 34) Asignamos la clase tarea-icono al componente del ícono directamente. No es una clase propiamente dicha sino que es un PROP */}
{/* 35) Cambiamos el nombre del contenedor a tarea-contenedor-iconos */}
          <AiOutlineCloseCircle className='tarea-icono' /> 
        </div>
      </div>
    );

}

export default Tarea;