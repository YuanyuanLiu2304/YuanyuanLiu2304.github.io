import { useState, ChangeEvent } from "react";

interface Task {
  id: number;
  name: string;
  isEdit: boolean;
}

export function TaskList() {
  let [newTask, setNewTask] = useState("");
  let [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "attend a yoga class", isEdit: false },
    { id: 2, name: "pay bills for the month", isEdit: false },
    { id: 3, name: "buy groceries for the week", isEdit: false },
  ]);

  let task = {
    id: 0,
    name: "",
    isEdit: false,
  };

  function inputTask(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleTask() {
    task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      name: newTask,
      isEdit: false,
    };

    setNewTask("");
    return newTask !== "" && setTasks([...tasks, task]);
  }

  function handleEdit(taskId: number) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isEdit: !task.isEdit } : task
      )
    );
  }

  function handleUpdate(taskId: number, newTaskName: string) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newTaskName } : task
      )
    );
  }

  function handleDelete(taskId: number) {
    const todoList = tasks.filter((t) => t.id !== taskId);
    setTasks(todoList);
  }

  return (
    <div className="TaskList">
      <div className="title_container bg-secondary ">
        <h1>To Do List</h1>
        <p>TaskList App &nbsp; | &nbsp; React &nbsp; Bootstrap</p>
        <div className="alert alert-primary mt-5 fs-5">
          This project is a simple "to-do list" application that features a
          clean and responsive design built with React and Bootstrap. It allows
          users to add, edit, and delete tasks, tasks are displayed in a list,
          where users can mark them as completed or delete them if they are no
          longer needed.
        </div>
      </div>
      <div className="tasks_container text-start col-sm-10 col-md-6 col-lg-5 mx-auto mt-5 py-5">
        <h2 className=" fw-semibold mb-4">Add your task here</h2>
        <div className="tasks_wrapper">
          <div className="d-flex">
            <input
              type="text"
              className="form-control-lg w-75"
              placeholder="Add task..."
              value={newTask}
              onChange={inputTask}
            />
            <button
              className="btn btn-primary btn-lg fs-5 ms-3 fw-medium w-25"
              onClick={handleTask}
            >
              Add
            </button>
          </div>

          <div className="tasks m-auto">
            <ul className="list mt-4 ps-0">
              {tasks.map((task) => {
                return (
                  <li
                    key={task.id}
                    className="list-item list-unstyled fw-normal mt-3"
                  >
                    <div className="row align-items-center">
                      <div className="col-1">
                        <input
                          className="form-check-input form-check-input-sm fs-4"
                          type="checkbox"
                          id={`task-${task.id}`}
                        />
                      </div>
                      <div className="col-7">
                        <label
                          className="form-check-label fs-4 fw-medium w-100"
                          htmlFor={`task-${task.id}`}
                        >
                          {task.isEdit ? (
                            <input
                              className="w-100"
                              value={task.name}
                              onChange={(
                                event: ChangeEvent<HTMLInputElement>
                              ) => handleUpdate(task.id, event.target.value)}
                            />
                          ) : (
                            <span className="text-black ps-0">{task.name}</span>
                          )}
                        </label>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn btn-sm fs-6 btn-warning fw-semibold"
                          onClick={() => handleEdit(task.id)}
                        >
                          {task.isEdit ? "Save" : "Edit"}
                        </button>
                      </div>
                      <div className="col-2">
                        <button
                          className="btn btn-sm fs-6 btn-danger fw-semibold"
                          onClick={() => handleDelete(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
