import { Box, Button } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { useUserSession } from './services/UserSession';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navbar';
import Report from './pages/Report';
import './app.css';
import CountryDetails from './pages/CountryDetails';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';

function App() {
  const { user, setUser, handleLogout } = useUserSession();

  return (
    <>
      <div>
        <Box minH={"70vh"}>
          <Navbar user={user} handleLogout={handleLogout} />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Dashboard />} />
            <Route path='/pag2' element={<Report />} />
            <Route path="/country/:code" element={<CountryDetails />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/userProfile" element={user ? <UserProfile user={user} /> : <Login setUser={setUser} />} />
          </Routes>
        </Box>

        {/* Move Login/Logout Button Outside Routes
        {user ? (
          <Button onClick={handleLogout} ml={4}>Logout</Button>
        ) : (
          <Button onClick={() => window.location.href = '/login'} ml={4}>Login</Button>
        )} */}
      </div>
    </>
  );
}

export default App;
