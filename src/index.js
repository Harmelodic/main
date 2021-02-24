import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';
import { initialiseStore } from './Store';

initialiseStore();

const appRoot = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot,
);
