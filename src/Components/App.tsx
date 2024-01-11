import { useSelector } from 'react-redux'

import { getCurrentPage } from '../Data/Selectors/Navigation'
import MainPage from './MainPage'
import { getCurrentUser, getAuthToken } from '../Data/Selectors/User'
import LoginPage from './Login'
import { Pages } from '../Data/Objects/State'


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
  }
  return (
    <div className='app'>
      { renderMainContent() }
    </div>
  )
}

