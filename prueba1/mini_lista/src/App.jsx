import './App.css'
import './components/FormularioTarea.jsx'
import FormularioTarea from './components/FormularioTarea.jsx'
import ListaTareas from './components/ListaTareas.jsx'
function App() {

  return (
    <>
      <div>
        <h1>Lista de tareas</h1>
        <FormularioTarea>
        </FormularioTarea>
        <ListaTareas> 
        </ListaTareas>
      </div>
    </>
  )
}

export default App
