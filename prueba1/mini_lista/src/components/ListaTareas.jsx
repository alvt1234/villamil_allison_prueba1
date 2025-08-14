import { useState } from "react";
import FormularioTarea from "./FormularioTarea";

function ListaTareas() {
    const [tarea, setTarea] = useState([]);

    const agregarTarea = (e) => {
        e.preventDefault();
        if (tarea.trim() === "") return;
        setTarea([...tarea, tarea]);
    }

    return (
        <div>
            <form onSubmit={agregarTarea}>
                <li>
                    {tarea.map((t, index) => (
                        <FormularioTarea key={index}>setTarea{t}
                        </FormularioTarea>
                    ))}
                </li>
            </form>

        </div>
    )
}

export default ListaTareas;