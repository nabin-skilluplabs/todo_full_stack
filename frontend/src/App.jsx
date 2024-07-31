import { useState } from "react";
import ToDoRow from "./components/ToDoRow";


function ToDoApp() {
  const [toDos, setToDos] = useState([
    {
        "id": "affc3d84-e579-4087-9048-35ded72962c1",
        "title": "Write a article about building a todo app",
        "isCompleted": true
    },
    {
        "id": "e689448c-0351-421f-8889-a0685341d26a",
        "title": "Publish the article",
        "isCompleted": false
    }
]);

  return (
    <div className="bg-white w-1/4 rounded-md p-4">
      <h2 className="text-2xl font-bold text-center m-b4">To Do App</h2>
      <div className="flex flex-col">
        {
          toDos.map(todo => (
            <ToDoRow todo={todo} />
          ))
        }
      </div>
    </div>
  );
}

export default ToDoApp
