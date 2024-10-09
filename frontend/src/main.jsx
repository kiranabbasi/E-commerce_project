import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import ShopContextProvider from './Context/ShopContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // Using createRoot from react-dom/client

root.render(
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
);
