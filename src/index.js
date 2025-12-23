import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import { ThemeProvider } from "./contexts/ThemeContext";
import axios from 'axios';
import API_CONFIG from './config/api.config';

// Configure global axios defaults
axios.defaults.baseURL = API_CONFIG.BASE_URL;
console.log('🚀 Admin Axios baseURL set to:', axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
