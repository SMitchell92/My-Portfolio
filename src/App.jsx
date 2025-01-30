import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import "./App.css";

function App() {

    return (
    <>
      <NavTabs />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
