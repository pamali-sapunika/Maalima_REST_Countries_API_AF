import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Navbar from './components/navbar'
import Report from './pages/Report'
import "./app.css";
import CountryDetails from './pages/CountryDetails'

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
            <Route path="/country/:code" element={<CountryDetails />} />
          </Routes>
        </Box>
      </div>
    </>
  )
}

export default App
