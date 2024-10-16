
import { ToastContainer } from 'react-toastify'
import './App.css'
import Footer from './Components/Layout/Footer/Footer'
import Header from './Components/Layout/Header/Header'
import Main from './Components/Layout/Main/Main'
import Menu from './Components/Layout/Menu/Menu'
import { useState } from 'react'
import { Theme } from './Models/Theme';

function App() {

  const [theme, setTheme] = useState<Theme>('light-mode');

  const channpgeTheme = () => {

    setTheme((theme === 'light-mode') ? 'dark-mode' : 'light-mode')


  }

  return (
    <div className={`App ${theme}`}>
      {/* <button className='sun' onClick={changeTheme}>
        {theme === 'light-mode' ? <span>🌚</span> : <span>🌝</span>}
      </button> */}
      <Header />
      <Menu />
      <Main />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
