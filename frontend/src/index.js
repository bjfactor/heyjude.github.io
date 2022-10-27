import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from './Context/ChatProvider';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
    <BrowserRouter>
        <ChatProvider>
          <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </ChakraProvider>
        </ChatProvider>
    </BrowserRouter>

);
