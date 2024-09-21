import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Home from './home.js';
import LoginForm from './login.js';
import NotFound from './notFound.js';

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      {' '}
      |
      <Link to="/login">Login</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
