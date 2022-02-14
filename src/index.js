import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from "./theme";
import { UserProvider } from "./contexts/UserContext";
import Fonts from "./theme/Fonts";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <Fonts />
        <UserProvider>
            <App />
        </UserProvider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
