import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import LoginPage from './components/pages/LoginPage';
import BazaWiedzy from './components/BazaWiedzy/BazaWiedzy';
import Header from './components/Landing/Header/Header';

import GlobalStyle from './GlobalStyles';
import { ThemeProvider } from 'styled-components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: 'baza-wiedzy',
    element: <BazaWiedzy />,
  },
]);

const theme = {
  gray: '#585858',
  brightGreen: '#73C9A5',
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
