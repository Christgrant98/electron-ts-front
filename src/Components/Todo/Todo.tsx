import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getRandomPastelColor } from "../../Styles/RandomColors";

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  const todoStyle = { backgroundColor: getRandomPastelColor() };

  return (
    <div className="Todo" style={todoStyle}>
      <p className={task.completed ? "completed" : "incompleted"} 
        onClick={() => toggleComplete(task.id)}>
        {task.task}
      </p>
      <div>
        <EditOutlined className="todo-button" onClick={() => editTodo(task.id)} />
        <DeleteOutlined className="todo-button" onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
