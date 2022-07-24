import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MarkdownPreview from './components/MarkdownPreview';
import Blog from './components/Blog';
import Article from './components/Article';
import NotFound from './components/NotFound';
import ScanLines from './components/ScanLines';
import { GlobalStyle } from './constants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<ScanLines />
		<GlobalStyle />
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/preview" element={<MarkdownPreview />} />
				<Route exact path="/blog" element={<Blog />} />
				<Route exact path="/blog/:id/:uri" element={<Article />} />
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
