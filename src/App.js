import logo from './movie-film-svgrepo-com.svg';
import logoSocial from './github-svgrepo-com.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Filmoflix</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          A Movies Recommendation App.
        </p>
        <small>releasing soon.</small>
      </header>
      <p>connect with me.</p><a href="https://github.com/codewithmanas"><img src={logoSocial} className="Social-logo" alt="Social-logo" /></a>
    </div>
  );
}

export default App;
