import './App.css';
import logo from './movie-film-svgrepo-com.svg';

function App() {
  return (
    <div className="app">
      <header className="main__header container">
          <img src={logo} className="main__logo" alt="main logo" />
          <h1>Filmo<span className="heading__color">flix</span></h1>
      </header>

      <div className="sub__title container">Checkout my favorite movies. Select a genre to get started</div>
      <div className="genre__button container">
        <button className="btn">Action</button>
        <button className="btn">Comedy</button>
        <button className="btn">Thriller</button>
        <button className="btn">Science Fiction</button>
      </div>
      <hr />
      <div className="content__section container">
        <div className="content__list content__one">
          <h3>Black Panther: Wakanda Forever</h3>
          <p><strong>IMDB Rating:</strong>  6.9</p>

        </div>
        <div className="content__list content__two">
          <h3>Avatar: The Way of Water</h3>
          <p><strong>IMDB Rating:</strong>  7.8</p>

        </div>

      </div>

      <footer className="footer__section container">
        <p>2023 © copyright, build with ❤ by <a href="https://github.com/codewithmanas">codewithmanas</a></p>
      </footer>


      </div>
  );
}

export default App;
