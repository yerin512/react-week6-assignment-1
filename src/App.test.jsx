import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import restaurantDetail from '../fixtures/restaurantDetail';

describe('App', () => {
  beforeEach(() => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      regions: [],
      categories: [],
      restaurants: [],
      restaurantDetail,
    }));
  });

  function renderApp({ path }) {
    return render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>,
    );
  }

  context('with path /', () => {
    it('renders HomePage', () => {
      const { container } = renderApp({ path: '/' });

      expect(container).toHaveTextContent('Home');
    });
  });

  context('with path /about', () => {
    it('renders AboutPage', () => {
      const { container } = renderApp({ path: '/about' });

      expect(container).toHaveTextContent('About');
    });
  });

  context('with path /restaurants', () => {
    it('renders RestaurantsPage', () => {
      const { container } = renderApp({ path: '/restaurants' });

      expect(container).toHaveTextContent('Restaurants');
    });
  });

  context('with path /restaurants/1', () => {
    it('renders RestaurantDetailPage', () => {
      const { container } = renderApp({ path: '/restaurants/1' });

      expect(container).toHaveTextContent('주소');
      expect(container).toHaveTextContent('메뉴');
    });
  });

  context('with invalid path', () => {
    it('renders NotFoundPage', () => {
      const { container } = renderApp({ path: '/blahblah' });

      expect(container).toHaveTextContent('404 Not Found');
    });
  });
});
