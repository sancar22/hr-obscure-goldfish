import { useEffect } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch('https://cuddly-space-couscous-pg46pgj999x374jj-3000.app.github.dev/')
    .then(res => res.json())
    .then(data => console.log(data, 'data here'))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Changing app.jsx to test changes
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
