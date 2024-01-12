import {useState} from 'react'
import "../../Styles/index.css"
import { Button, Form, Input } from 'antd';
import { EditFilled } from '@ant-design/icons';
import { notification } from "antd";

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    const {Item} = Form

    const handleSubmit = () => {
      if (value.length > 40) {
        notification.error({
          message:'The task cannot have more than 40 characters.'
        });
        return;
      }
        if (value) {
          editTodo(value, task.id);
          notification.success({
            message: "Task description has been updated",
          });

        } else {
          notification.error({
            message: "this cannot be empty",
          });
          
        }
      };

  return (
        <div style={{marginBottom: "20px"}}> 
            <Form className='custom-form'>
              <Item
              rules={[{ required: true, message: 'This cannot be empty' }]}>
                <Input 
                  className='task-input' 
                  type="text" 
                  placeholder="Update this task" 
                  value={value} 
                  onChange={(event) => setValue(event.target.value)}/>
              </Item>
            <Button className='add-task-button' 
              htmlType="submit">
              <EditFilled
                className="button-add" 
                aria-hidden="true" 
                onClick={handleSubmit}/>
            </Button>
          </Form>
        <p style={{textAlign: 'end', marginRight: '10px'}}>{`${value.length}/40`}</p>
        </div>
    )
}