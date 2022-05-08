// __tests__/fetch.test.js

import { render, screen } from '@testing-library/react';
import List from '../List';
import {BrowserRouter} from 'react-router-dom';
test('renders learn react link', async () => {
  render(<BrowserRouter><List></List></BrowserRouter>); 
  
  const items = await screen.findAllByText(/Everett Bender/i);
  // console.log(await screen.findAllByRole('button'))
  expect(items).toHaveLength(1);
});