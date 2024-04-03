import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Home from './components/Home.jsx'



function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />

    </div>
  )
}

export default App