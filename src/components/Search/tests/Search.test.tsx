import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '../Search';

const testId = 'testingSearch';

type SearchProps = React.ComponentProps<typeof Search>;

const renderComponent = (props: SearchProps) => render(
  <Search
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Search', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('имеет корректный placeholder', () => {
    render(<Search search="" />);
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });
});
