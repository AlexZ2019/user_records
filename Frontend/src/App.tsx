import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import modules from './modules';
import { IRoute } from './modules/common/interfaces/moduleInterfaces';

function App() {
  return (
    <div className="App">
      <Routes>
        {modules.routes.map((r: IRoute, index: number) => {
          return <Route key={index} path={r.path} element={r.page} />
        })
        }
      </Routes>
    </div>
  );
}

export default App;
