import logo from './movie-film-svgrepo-com.svg';
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
      <a href="https://www.flaticon.com/free-icons/cinema" title="cinema icons">Cinema icons created by Freepik - Flaticon</a>
    </div>
  );
}

export default App;
