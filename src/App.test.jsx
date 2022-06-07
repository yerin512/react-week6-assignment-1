import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import HomePage from './pages/HomePage';

test('HomePage', () => {
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    restaurants: [],
  }));

  render(
    <HomePage />,
  );
});
