import React from 'react';
import Home from "./pages/Home"
import { ThemeProvider } from '@material-ui/styles';
import Signin from "./pages/Signin"
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom'
import { Provider } from "react-redux";

import "./mock";
import GuestRoute from "./routes/GuestRoute"
import theme from "./theme"
import store from "./store"
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <GuestRoute path="/signin" element={<Signin />} />
            <Route path="*" element={<h1>ERROR 404</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>

  );
}

export default App;
