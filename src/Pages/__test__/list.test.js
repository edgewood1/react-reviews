import React from 'react';
import {
  render, screen
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import List from '../List';

// eslint-disable-next-line no-undef
test('renders learn react link', async () => {
  render(<BrowserRouter><List /></BrowserRouter>);

  const items = await screen.findAllByText(/Everett Bender/i);
  // console.log(await screen.findAllByRole('button'))
  // eslint-disable-next-line no-undef
  expect(items).toHaveLength(1);
});
