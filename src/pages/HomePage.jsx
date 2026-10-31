import { useState } from "react";

export default function HomePage() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [],
  );
  const [editId, setEditId] = useState(null);

  // submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editId !== null) {
      updateTodo();
    } else {
      addTodo();
    }
  };

  // create

  const addTodo = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: task,
    };

    const updatesTodos = [...todos, newTodo];

    setTodos(updatesTodos);
    localStorage.setItem("todos", JSON.stringify(updatesTodos));
    setTask("");
  };
  
  // edit

  const editTodo = (todo) => {
    setTask(todo.title);
    setEditId(todo.id);
  };

  //update

  const updateTodo = () => {
    if (task.trim() === "") return;

    const updatedTodo = todos.map((todo) => {
     return todo.id === editId ? { ...todo, title: task } : todo;
    });

    setTodos(updatedTodo);
    localStorage.setItem("todos", JSON.stringify(updatedTodo));
    setTask("");
    setEditId(null);
  };

  // delete

  const deleteTodo = (id) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
    localStorage.setItem("todos", JSON.stringify(deletedTodos));
  };


  return (
    <>
      <div className="container">
        <h1 className="text-center text-blue-950 text-5xl">TODO LIST</h1>
        <form onSubmit={handleSubmit} className="mt-10 p-10">
          <div className="flex items-center gap-x-[20px] w-[600px] mx-auto">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="outline-none border border-4 border-blue-700 w-full px-4 py-3 rounded-xl"
              type="text"
              placeholder="Task kiriting..."
            />
            <button 
              className="bg-blue-500 text-white w-[150px] h-[54px] rounded-xl cursor-pointer hover:bg-blue-600"
            >
              {
                editId !== null ? "Save" : "Add"
              }
            </button>
          </div>
        </form>

        <div className="flex items-center justify-center flex-wrap gap-3">
          {todos.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[200px] h-[100px] border border-[3px] border-[black] text-center"
              >
                <h2>UserID: {item.id}</h2>
                <p>Name: {item.title}</p>

                <button
                  onClick={() => deleteTodo(item.id)}
                  className="bg-red-500 px-2 py-1 text-white rounded-md mt-1"
                >
                  Delete
                </button>

                <button
                  onClick={() => editTodo(item)}
                  className="bg-green-500 px-2 py-1 text-white rounded-md ml-2 mt-1"
                >
                  Edit
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

