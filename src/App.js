import logo from "./logo-shecodes.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="container text-center">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword={" "} />
        </main>
        <footer className="App-footer">
          <small>
            This app was coded by{" "}
            <a href="https://melodious-selkie-9ed524.netlify.app/">
              Alexandra Jaap
            </a>{" "}
            and is{" "}
            <a href="https://github.com/AlexandraJaap/dictionary-project">
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
