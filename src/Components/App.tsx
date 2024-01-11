import { useSelector } from 'react-redux'

import { getCurrentPage } from '../Data/Selectors/Navigation'
import MainPage from './MainPage'
import { getCurrentUser, getAuthToken } from '../Data/Selectors/User'
import LoginPage from './Login'
import { Pages } from '../Data/Objects/State'
import { Layout } from 'antd'
const { Content, Footer } = Layout;

export default function App() {
  const currentPage = useSelector(getCurrentPage)
  const currentUser = useSelector(getCurrentUser)
  const authToken = useSelector(getAuthToken)

  const renderMainContent = () => {
    const content = (
      <MainPage/>
    );
    if(currentPage === Pages.LOGIN || !currentUser || !authToken ){
      return <LoginPage/>
    }
    return content;
  }

  return (
    <Layout style={{ minHeight: "100vh", alignContent: "center" }}>
      <Content>
        <div className='app'>
          { renderMainContent() }
        </div>
      </Content>
      <Footer style={{ textAlign: "center", color: "#808080BF", fontSize: "12px" }}> 
        Electron App ©2024 Created by Christian Garcerant
      </Footer>
    </Layout>
  )
}

