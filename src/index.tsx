import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./styles/index.css";
import Header from './components/Header';

ReactDOM.render(
    <BrowserRouter>
      <Header />
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);