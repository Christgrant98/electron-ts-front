
import { Button } from 'antd';
import "../Styles/index.css";

export const CustomButton = ({ buttonText }) => {
  const customStyles = {
    width: '100%', 
    color: '#ffffff',
    backgroundColor: '#002ec7',
    fontSize: '15px',
  };

  return (
    <Button type="primary" style={customStyles} htmlType='submit' block>
      {buttonText}
    </Button>
  );
};

