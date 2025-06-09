import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './App';
import Interior from './components/Interior';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="interior" element={<Interior />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
