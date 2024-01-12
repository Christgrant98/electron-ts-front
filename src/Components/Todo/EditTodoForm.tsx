import {Fragment, useState} from 'react'
import "../../Styles/index.css"
import { Button, Form, Input } from 'antd';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = () => {
        editTodo(value, task.id);
      };
  return (
      <Fragment>
        <Form onFinish={handleSubmit} className="todo-form">
          <Input type="text" value={value} onChange={(event) => setValue(event.target.value)} className="todo-Input" placeholder='Update task' />
          <Button htmlType="submit" className='todo-btn'>+</Button>
        </Form>
      </Fragment>
    )
}