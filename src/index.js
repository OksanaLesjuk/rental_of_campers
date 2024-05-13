import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import { ModalProvider } from '../src/context/ModalContext/ModalContext.jsx';
import { App } from './components/App.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(


  <Provider store={store}>
    <ModalProvider>
      <App />
    </ModalProvider>
  </Provider>



);

