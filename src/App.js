import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <h1 data-testid="main-heading">Brent Portfolio Playwright Example</h1>
      <p data-testid="intro-paragraph">
        This is a simple React web page for testing via Playwright.
      </p>
      <Form />
      <Calculator />
    </div>
  );
}

export default App;
