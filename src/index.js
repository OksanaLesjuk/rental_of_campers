import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from '../src/components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { ModalProvider } from 'context/ModalContext/ModalContext';
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from 'styles';

ReactDOM.render(document.getElementById('root')).render(


  <Provider store={store}>
    <ModalProvider>
      <App />
    </ModalProvider>
  </Provider>

  // <Provider
  // // store={store}
  // >

  //   <ThemeProvider
  //   //  theme={theme}
  //   >
  //     <PersistGate loading={null}
  //     // persistor={persistor}
  //     >
  //       <BrowserRouter basename="/rental_of_campers">
  //         <App />
  //       </BrowserRouter>
  //     </PersistGate>
  //   </ThemeProvider >



  // </Provider>

);

