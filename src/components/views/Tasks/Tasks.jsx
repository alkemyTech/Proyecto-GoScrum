import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Tasks.styles.css";
import { useResize } from "../../../hooks/useResize";
import { Header } from "../../Header/Header";
import { Card } from "../../../components/Card/Card";
import { TaskForm } from "../../TaskForm/TaskForm";

const { REACT_APP_API_ENDPOINT: API_ENDPOINT } = process.env;

export const Tasks = () => {
  const [list, setList] = useState(null);
  const { loading, setLoading } = useState(false);
  const { isPhone } = useResize();

  useEffect(() => {
    setLoading(true);
    fetch(`${API_ENDPOINT}task`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setList(data.result);
        setLoading(false);
      });
  }, []);

  const limitString = (str) => {
    if (str.length > 170)
      return { string: str.slice(0, 167).concat("..."), addButton: true };
    return { string: str, addButton: false };
  };

  const renderAllCards = () => {
    return list?.map((data) => <Card key={data._id} data={data} />);
  };

  const renderNewCards = () => {
    return list
      ?.filter((data) => data.status === "NEW")
      .map((data) => <Card key={data._id} data={data} />);
  };

  const renderInProgressCards = () => {
    return list
      ?.filter((data) => data.status === "IN PROGRESS")
      .map((data) => <Card key={data._id} data={data} />);
  };

  const renderFinishedCars = () => {
    return list
      ?.filter((data) => data.status === "FINISHED")
      .map((data) => <Card key={data._id} data={data} />);
  };

  return (
    <>
      <Header />
      <main id="tasks">
        <TaskForm />
        <div className="wrapper_list">
          <div className="list_header">
            <h2>Mis Tareas</h2>
          </div>
          {isPhone ? (
            !list?.length ? (
              <div>No hay tareas creadas</div>
            ) : loading ? (
              <Skeleton />
            ) : (
              <div className="list phone">{renderAllCards()}</div>
            )
          ) : (
            <div className="list_group">
              {!list?.length ? (
                <div>No hay tareas creadas</div>
              ) : loading ? (
                <Skeleton />
              ) : (
                <>
                  <div className="list">
                    <h3>Nuevas</h3>
                    {renderNewCards()}
                  </div>
                  <div className="list">
                    <h3>En progreso</h3>
                    {renderInProgressCards()}
                  </div>
                  <div className="list">
                    <h3>Finalizadas</h3>
                    {renderFinishedCars()}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};
