import './App.css';
// 5) dsps del import, el nombre c/lq nos referiremos a la imagen entre 2 y 3
// 6) Vamos a App.css
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png'
//27) viene de Tarea.css: importamos el componente Tarea
import Tarea from './componentes/Tarea';
//28) abajo del h1 Mis Tareas crearemos la tarea con el componente importado. Vamos a Tarea.js
//54) viene de TareaFormulario.js. Importamos el componente TareaFormulario
import ListaDeTareas from './componentes/ListaDeTareas';
//55) eliminamos  <Tarea texto='Aprender React' />
//56) Abajo de MisTareas creamos el componente <TareaFormulario>
//57) Eliminamos         <TareaFormulario />
//58) Creamos componente ListaDeTareas.js y vamos allí
//67) Eliminamos import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
//1 aplicacion tareas será la clase del contenedor principal
    <div className='aplicacion-tareas'>
      {/*2) luego tendremos el log de FCC */}
      <div className='freecodecamp-logo-contenedor'>
        <img src={freeCodeCampLogo} 
        // 3) dejamos un espacio al final de los elementos de cierre automático
        className='freecodecamp-logo' />
        {/* 4) click dcho en src, new folder, imagenes e importar */}
      </div>
      {/*11) viene de app.css/ Creamos el div que contendrá el componente lista de tareas
      12) Vamos a src, creamos carpeta componentes, Tarea.js
      Volvemos a App.css p/asignarle estilo a este contenedor*/}
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        {/* 31) agregamos el texto p/la tarea expecífica */}
        {/* 32) Vamos a Tarea.js */}
        {/* 56) texto arriba */}
        {/* 66) viene de App.js */}
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
