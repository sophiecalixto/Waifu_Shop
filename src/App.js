import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Rotas from "./routes";
import Header from "./components/Header";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter>
       <Header/>
       <Rotas />
       <GlobalStyle/>
     </BrowserRouter>
    </Provider>
  );
}

export default App;
