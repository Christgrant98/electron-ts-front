import { useSelector } from 'react-redux'

import { getCurrentPage } from '../Data/Selectors/Navigation'
import { getCurrentUser, getAuthToken } from '../Data/Selectors/User'
import LoginPage from './Login'
import { Pages } from '../Data/Objects/State'
import { Layout } from 'antd'
import TodoPage from './TodoPage'
const { Content, Footer } = Layout;

export default function App() {
  const currentPage = useSelector(getCurrentPage)
  const currentUser = useSelector(getCurrentUser)
  const authToken = useSelector(getAuthToken)

  const renderMainContent = () => {
    const content = (
      <TodoPage/>
    );
    if(currentPage === Pages.LOGIN || !currentUser || !authToken ){
      return <LoginPage/>
    }
    return content;
  }

  return (
    <Layout style={{ minHeight: "100vh", alignContent: "center", background:"none" }}>
      <Content>
        <div className='app'>
          { renderMainContent() }
        </div>
      </Content>
      <Footer style={{ color: "#808080BF", fontSize: "13.5px", background:"none", justifyContent: "start"}}> 
        Electron App ©2024 ⚛ Created by Christian Garcerant
      </Footer>
    </Layout>
  )
}

