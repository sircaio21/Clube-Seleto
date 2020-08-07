import React from 'react';
import Home from "./pages/Home"
import { ThemeProvider } from '@material-ui/styles';
import Signin from "./pages/Signin"
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Provider } from "react-redux";
import Auth from "./components/Auth"
import "./mock";
import GuestRoute from "./routes/GuestRoute"
import theme from "./theme"
import store from "./store"
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Auth>
            <Routes>
              <Route path="//*" element={<Home />} />
              <GuestRoute path="/signin" element={<Signin />} />
            </Routes>
          </Auth>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
