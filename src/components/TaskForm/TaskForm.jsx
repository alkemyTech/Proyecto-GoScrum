import "./TaskForm.styles.css";
import { useFormik } from "formik";

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    importance: "",
    description: "",
  };

  const onSubmit = () => {
    alert("Formulario enviado");
  };

  const formik = useFormik({ initialValues, onSubmit });

  const { handleSubmit, handleChange } = formik;

  return (
    <secteion className="task-form">
      <h2>Crear Tarea</h2>
      <p>Crear Tarea</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input name="title" onChange={handleChange} placeholder="Título" />
          </div>
          <div>
            <select name="status" onChange={handleChange}>
              <option value="">Seleccionar un estado</option>
              <option value="NEW">Nueva</option>
              <option value="IN PROGRESS">En proceso</option>
              <option value="FINISHED">Teminada</option>
            </select>
          </div>
          <div>
            <select name="importance" onChange={handleChange}>
              <option value="">Seleccionar una prioridad</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
        </div>
        <div>
          <textarea
            name="description"
            onChange={handleChange}
            placeholder="Descripción"
          />
        </div>
        <div></div>
        <button type="submit">Crear</button>
      </form>
    </secteion>
  );
};
