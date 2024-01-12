import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import '../../Styles/index.css';
import { notification } from "antd";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
   
    if (value.length > 40) {
      notification.error({
        message:'The task cannot have more than 40 characters.'
      });
      return;
    }

    if (value) {
      addTodo(value);
      setValue('');
      notification.success({
        message:'New task created'
      });
    }
  };

  return (
      <div className="container">
        <Form className='custom-form'>
            <Input 
              className='task-input' 
              type="text" 
              placeholder="What is the task today?" 
              value={value} 
              onChange={(event) => setValue(event.target.value)}/>
          <Button className='add-task-button' 
            htmlType="submit">
            <PlusCircleFilled 
              className="button-add" 
              aria-hidden="true" 
              onClick={handleSubmit}/>
          </Button>
        </Form>
        <p style={{textAlign: 'end', marginRight: '10px'}}>{`${value.length}/40`}</p>
      </div>
  );
};
