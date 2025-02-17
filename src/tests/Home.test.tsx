import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/(root)/page';

test('Pages Router', () => {
  render(<Home />);

  const main = screen.getByText(/prostore homepage/i);

  expect(main).toBeInTheDocument();
});
