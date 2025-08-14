import { useState } from "react";
import ListaTareas from "./ListaTareas";

function FormularioTarea() {
  const [tarea, setTarea] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (tarea.trim()) {
      console.log("Tarea enviada:", tarea);
      setTarea("");
    }
  };

  return (
    <dev>   
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
        placeholder="Escribe una tarea"
      />
      <button type="submit">
        Agregar
      </button>
    </form>
    </dev>
  );
}

export default FormularioTarea;