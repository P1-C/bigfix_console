import {Box} from "@mui/material";
import Header from "./components/Header";
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import SideNav from "./components/SideNav";
import Settings from "./components/Settings";
import Actions from "./components/Actions";
import Main from "./components/Main";
import useUserStore from "./stores/userStore";
import NotificationPage from "./pages/NotificationPage";
import Fixlet from "./components/Fixlet";
//import {useState} from 'react';
import Notifier from "./components/Notifier";
import BaselineData from "./components/BaselineData";
import Baseline from "./components/Baseline";

function App() {

  const {isUserLoggedIn} = useUserStore();


  return (
    <BrowserRouter>
      {!isUserLoggedIn ? <Main /> :
        <>
          <header>
            <Header />
          </header>
          <main>
            <Box display="flex" flexDirection={"row"} height='88vh' overflow='hidden'>
              <Box width={150}  >
                <SideNav />
              </Box>
              <Box flex={1} px={3} >
                <Routes>
                  <Route path="/" element={<Welcome />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/notifications" element={<NotificationPage />} />
                  <Route path="/actions" element={<Actions />} />
                  <Route path="/fixlets" element={<Fixlet />} />
                  <Route path="/create-baselines" element={<Baseline />} />
                  <Route path='/baselines' element={<BaselineData />} />
                </Routes>
              </Box>
            </Box>
          </main>
          <footer>
            <Notifier />
            <Footer />
          </footer>
        </>
      }
    </BrowserRouter>
  );
};


export default App;
