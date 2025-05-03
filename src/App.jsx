import { Box } from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useUserSession } from './sessions/UserSession';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Navbar from './components/navbar';
import Report from './pages/Report';
import './app.css';
import CountryDetails from './pages/CountryDetails';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Footer from './components/Footer';

function App() {
  const { user, setUser, handleLogout } = useUserSession();
  const location = useLocation(); 
  const isLoginPage = location.pathname === '/login';

  return (
    <Box pt="60px" minH="100vh" display="flex" flexDirection="column">
      {!isLoginPage && <Navbar user={user} handleLogout={handleLogout} />}

      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Dashboard />} />
          <Route path="/pag2" element={<Report />} />
          <Route path="/country/:code" element={<CountryDetails />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/userProfile" element={user ? <UserProfile user={user} /> : <Login setUser={setUser} />} />
        </Routes>
      </Box>

      {!isLoginPage && <Footer />}
    </Box>
  );
}

export default App;
