import "./TaskForm.styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const TaskForm = () => {
  const initialValues = {
    title: "",
    status: "",
    priority: "",
    description: "",
  };

  const onSubmit = () => {
    alert();
  };

  const required = "Este campo es requerido";

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(6, "No tiene la longitud mínima")
      .required(required),
    status: Yup.string().required(required),
    priority: Yup.string().required(required),
  });

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const { handleChange, handleSubmit, errors } = formik;

  return (
    <secteion className="task-form">
      <h2>Crear Tarea</h2>
      <p>Crear Tarea</p>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <input name="title" onChange={handleChange} placeholder="Título" />
          </div>
          {errors.title && <div>{errors.title}</div>}
          <div>
            <select name="status" onChange={handleChange}>
              <option value="">Seleccionar un estado</option>
              <option value="NEW">Nueva</option>
              <option value="IN PROGRESS">En proceso</option>
              <option value="FINISHED">Teminada</option>
            </select>
          </div>
          {errors.status && <div>{errors.status}</div>}
          <div>
            <select name="priority" onChange={handleChange}>
              <option value="">Seleccionar una prioridad</option>
              <option value="LOW">Baja</option>
              <option value="MEDIUM">Media</option>
              <option value="HIGH">Alta</option>
            </select>
          </div>
          {errors.priority && <div>{errors.priority}</div>}
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
