import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  context('존재하지 않는 URL로 접근시', () => {
    it('404페이지를 노출한다', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/404']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByText(/404 Not Found/)).not.toBeNull();
    });
  });

  context('/about로 접근시', () => {
    it('About페이지를 노출한다', () => {
      const { getByText } = render((
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      ));
      expect(getByText(/About 페이지입니다/)).not.toBeNull();
    });
  });
});
