import "../../Styles/index.css"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <EditOutlined onClick={() => editTodo(task.id)}/>
        <DeleteOutlined onClick={()=> deleteTodo(task.id)}/>
        </div>
    </div>
  )
}