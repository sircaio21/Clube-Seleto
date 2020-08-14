import React from 'react';
import Home from "./pages/Home"
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import Auth from "./components/Auth"
import "./mock";
import GuestRoute from "./routes/GuestRoute"
//import theme from "./theme"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup";
import createTheme from "./theme";
import { useSettings } from "./context/SettingsContext"

function App() {
  const { settings } = useSettings()
  return (

    <ThemeProvider theme={createTheme(settings)}>
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="//*" element={<Home />} />
            <GuestRoute path="/signin" element={<Signin />} />
            <GuestRoute path="/signup" element={<Signup />} />
          </Routes>
        </Auth>
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
