import Reports from '../Reports';
import { render, cleanup } from '@testing-library/react';
// import 'jest-dom/extend-expect';
import { createMemoryHistory } from 'history';

import React from 'react';
import { Router } from 'react-router-dom';

afterEach(cleanup);
describe('reports component', () => {
  const history = createMemoryHistory();

  it('t renders no reports when there is no repor', () => {
    //   const { getByText } = render(<Reports />);
    const { getByText } = render(
      <Router history={history}>
        <Reports />
      </Router>,
    );
    expect(getByText(/no reports/i)).toBeInTheDocument();
  });
});
