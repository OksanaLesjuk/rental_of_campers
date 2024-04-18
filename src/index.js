import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { Provider } from 'react-redux';
// import { persistor, store } from "./redux/store";
// import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from 'styles';

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <App />
  </React.StrictMode>

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

