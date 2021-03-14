import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider as BlogProvider } from './Context/BlogContext';
import { Provider as ThemeProvider } from './Context/ThemeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
