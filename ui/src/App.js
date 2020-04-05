import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import AppLogo from './components/AppLogo';
import EntryTable from './components/EntryTable';

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <SearchBar />
        <AppLogo />
      </header>

      <main className="app-body">
        <EntryTable />
      </main>
    </div>
  );
}

export default App;
