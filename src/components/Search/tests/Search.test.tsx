import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);
    expect(screen.getByPlaceholderText(/Search/)).toBeInTheDocument();
  });
  it('будет вызываться столько раз, сколько пользователь раз нажмет клавиши', async () => {
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);
    await userEvent.type(screen.getByRole('textbox'), 'Mom');
    expect(onChange).toHaveBeenCalledTimes(3);
  });
});
