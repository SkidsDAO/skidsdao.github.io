import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { Helmet } from 'react-helmet'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import MarkdownPreview from './components/MarkdownPreview';
import Blog from './components/Blog';
import Article from './components/Article';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
		<Helmet>
			<title>SkidsDAO</title>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

      <meta property="og:title" content="SkidsDAO" />
      <meta property="og:url" content="https://skidsdao.github.io" />
      <meta property="og:description" content="Breaking your things since 2022." />
      <meta property="og:image" content="/assets/skidsdao_logo.png" />
      <meta property="og:type" content="website" /> 

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SkidsDAO" />
      <meta name="twitter:url" content="https://skidsdao.github.io" />
      <meta name="twitter:description" content="Breaking your things since 2022." />
      <meta name="twitter:image" content="/assets/skidsdao_logo.png" /> 

			<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
			<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
			<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
			<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
			<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
			<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
			<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
			<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
			<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/manifest.json"/>
			<meta name="msapplication-TileColor" content="#ffffff"/>
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
			<meta name="theme-color" content="#ffffff"/>
		</Helmet>
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
