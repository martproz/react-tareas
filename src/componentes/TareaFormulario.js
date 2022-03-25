//42) viene de Tarea.css
//43) importamos React
//44) Creamos function TareaFormulario
//45) agregamos props en paréntesis, sin sintaxis de desestructuración
//46) el componente principal será un elemento del formulario, <form>
/*47) asignamos una clase al formulario, "tarea formulario; una clase al input, "tarea-input" y una clase al botón debajo del input,
"tarea-boton"*/
//48) Exportamos al componente TareaFormulario 
//49) Vamos a hojas estilo, TareaFormulario.css
//52) viene de TareaFormulario.css. Importamos.
//53) vamos a App.js
//89) viene de ListaDeTareas.js. Creamos una nueva const dentro de funct TareaFormulario: const manejarEnvio
//90) const manejarEnvio se llamará cuando se haga click sobre tarea-boton
//91) recibirá como argumento un evento que se mandará automáticamente cuando ocurra ese envío. Ese valor nos permitirá que la página se vuelva a cargar cuando se envíe el formulario 
//92) crearemos tareaNueva dentro de const manejarEnvio
//93) tareaNueva tendrá por ahora un id fijo
//94) p/el texto, crearemos una nueva const dentro de function TareaFormulario(props) {, const manejarCambio
//95) importamos un hook, {useState}
//96) creamos una nueva const [input, setInput]. Tendrá como valor inicial una cadena de caracteres vacía, porque inicialmente el usuario no ha ingresado ningún valor. 
//97) tendremos que actualizar el input de "const [input, setInput] = useState('');"" al valor que escribió el usuario
//98) Para probar que está funcionando 
// const manejarCambio = e => {
//   console.log('Escribiendo...')
// }

//99) Asignamos en      texto: 'Hola' una cadena de caracteres para que no haya error.
//100) agregamos en className='tarea-input' un onChange. Cuando ocurra un cambio se llamará al valor entre las llaves, manejarCambio
//101) dentro de "const manejarCambio = e => {"" escribimos "setInput()"
//102) leemos de dcha a izquierda valor, target, evento: nos permitirá extraer el valor del campo de texto que ingresó el usuario.
//103) Con "console.log(e.target.value)" dentro de "const manejarCambio = e => {" mostramos qué hace el evento R Re Rea: cada vez que hicimos un cambio al campo de texto se mostró el msj actualizado
//104) vamos a <form className='tarea-formulario'> y creamos un eventListener: onSubmit={manejarEnvio}>
//105) e.preventDefault();  dentro de  const manejarEnvio = e => {  p/q toda la app no se vuelva a cargar.
//106) bajo preventDefault, console.log("Enviando fomrulario...")
//107) pantalla click en Agregar tarea, consola enviando formulario...

//108) borramos el console.log. Tenemos que crear el objeto que representará la tarea nueva. 
//Tendrá un ID y un texto. Texto ya no será fijo, sino que será "input"
//El cambio actualizará el valor de input en "const [input, setInput] = useState('');"

//109) Ese cambio irá a  texto: input  de  const manejarEnvio = e => {
//110) agregamos bajo texto input "completada: false"
//111) necesitamos generar un ID con paquete UUID, https://www.npmjs.com/package/uuid
//111bis) npm install uuid
//112) importamos paquete uuid
//113) dentro de "const manejarEnvio = e => {", id: uuidv4(),
//114)       
    //completada: false
    //}
    // console.log(tareaNueva); --vamos a pantalla, consola

//115) mostrará un objeto que deberemos pasar al componente ListaDeTareas.
//Borramos console.log(tareaNueva);

//116)       completada: false
    // }
    // props.onSubmit(tareaNueva);

//117) este onSubmit llama "const tareaNueva = {" que está justo arriba
//118) Vamos a ListaDeTareas.js

import React, {useState} from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
      setInput(e.target.value)
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
  };

  return (
    <form className='tarea-formulario'
    onSubmit={manejarEnvio}>
        <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
        onChange={manejarCambio}
        />
        <button className='tarea-boton'>
          Agregar Tarea
        </button>
    </form>
  )
} 

export default TareaFormulario;