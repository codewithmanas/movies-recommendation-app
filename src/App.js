import './App.css';
import logo from './movie-film-svgrepo-com.svg';
import { useState } from "react";

function App() {
  const [inputMovie, setMovie] = useState("");

  function eventClickHandler(event){
    let movieGenre = event.target.innerText;
    switch(movieGenre){
      case "Action":
        // console.log("Action");
        let movie = "Black Panther: Wakanda Forever";
        setMovie(movie);
        break;
      case "Comedy":
        console.log("Comedy");
        break;
      case "Thriller":
        console.log("Thriller");
        break;
      case "Science Fiction":
        console.log("Science Fiction");
        break;
      default:
        return event;

    }
    
  }

  return (
    <div className="app">
      <header className="main__header container">
          <img src={logo} className="main__logo" alt="main logo" />
          <h1>Filmo<span className="heading__color">flix</span></h1>
      </header>

      <div className="sub__title container">Checkout my favorite movies. Select a genre to get started</div>
      <div className="genre__button container">
        <button className="btn" onClick={eventClickHandler}>Action</button>
        <button className="btn" onClick={eventClickHandler}>Comedy</button>
        <button className="btn" onClick={eventClickHandler}>Thriller</button>
        <button className="btn" onClick={eventClickHandler}>Science Fiction</button>
      </div>
      <hr />
      <div className="content__section container">
        <div className="content__list content__one">
          {/* <h3>Black Panther: Wakanda Forever</h3> */}
          <h3>{setMovie}</h3>
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
