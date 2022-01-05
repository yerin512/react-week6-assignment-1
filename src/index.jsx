import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">
          <h1>헤더</h1>
        </Link>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
