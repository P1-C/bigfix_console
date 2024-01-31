import { Box } from "@mui/material";
import Header from "./components/Header";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import SideNav from "./components/SideNav";
import Settings from "./components/Settings";


function App() {
 
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
      <main>
        <Box display="flex" flexDirection={"row"} height='90vh' >
          <Box width={150}  >
            <SideNav />
          </Box>
          <Box flex={1} px={3} >
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      </main>
      {/* <footer>
      <Footer />
      </footer> */}
    </BrowserRouter>
  );
}

export default App;
