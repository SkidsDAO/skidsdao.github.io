import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Helmet>
			<title>SkidsDAO</title>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
		</Helmet>
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
