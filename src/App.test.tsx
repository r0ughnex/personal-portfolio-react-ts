import { render } from '@testing-library/react';

import App from './App';

describe("'App' in '/src", () => {
  describe("Tests for the component  '<App />'", () => {
    test('it should render without crashing', () => {
      render(<App />);
      expect(true).toEqual(true);
    });
  });
});
