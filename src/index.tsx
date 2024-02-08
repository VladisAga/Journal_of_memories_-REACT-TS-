import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserContext, UserContextProvider } from './context/user.context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const RootComponent = () => {
  

  return (
    // <React.StrictMode>
    <UserContextProvider>
      <App />
    </UserContextProvider>
    // </React.StrictMode>
  );
};

root.render(<RootComponent />);
