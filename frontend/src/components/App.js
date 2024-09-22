import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import Chat from './Chat.jsx';
import LoginPage from './LoginPage.jsx';
import NotFound from './NotFound.jsx';

const App = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Home</Link>
      {' '}
      |
      <Link to="/login">Login</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
