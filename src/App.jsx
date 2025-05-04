// src/App.js
import { Box } from '@chakra-ui/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useUserSession } from './sessions/UserSession';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from './pages/Home';
import Report from './pages/Report';
import CountryDetails from './pages/CountryDetails';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Favorites from './pages/Favorites';
import { UserProvider } from './context/UserContext';


function App() {
  const { user, setUser, handleLogout } = useUserSession();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {!isLoginPage && <Navbar user={user} handleLogout={handleLogout} />}
      <Box flex="1">
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Report />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/country/:code" element={<CountryDetails />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </UserProvider>
      </Box>
      {!isLoginPage && <Footer />}
    </Box>
  );
}

export default App;
