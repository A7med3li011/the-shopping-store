import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"

import './index.css';

import reportWebVitals from './reportWebVitals';
import CarttContextprovider from './Context/Cartt';
import TokenContextProvider from './Context/token';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import App from './Components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let myClient = new QueryClient()
root.render(
  <>
  <TokenContextProvider>
    <CarttContextprovider>
      <QueryClientProvider client={myClient}>
        <App />
      </QueryClientProvider>
    </CarttContextprovider>
  </TokenContextProvider>
  <Toaster />
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
