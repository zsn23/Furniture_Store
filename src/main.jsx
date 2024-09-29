import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import { store } from './redux/sttore.js';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './Pages/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);
