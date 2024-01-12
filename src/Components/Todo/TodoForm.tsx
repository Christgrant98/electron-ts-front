import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';
import '../../Styles/index.css';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div className="containerx">
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
    </div>
  );
};
