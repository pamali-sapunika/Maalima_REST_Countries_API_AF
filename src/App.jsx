import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar'
import Report from './pages/Report'
import "./app.css";

function App() {

  return (
    <>
      <div>
        <Box minH={"70vh"}>
          <Navbar>

          </Navbar>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Dashboard />} />
            <Route path='/pag2' element={<Report />} />
          </Routes>
        </Box>
      </div>
    </>
  )
}

export default App
