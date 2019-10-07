import React from 'react';
import api from './services/api';
import Main from './pages/main/index';
import Header from './pages/main/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
