import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Error from '../Error';

const testId = 'testingError';

type ErrorProps = React.ComponentProps<typeof Error>;

const renderComponent = (props: ErrorProps = {}) => render(
  <Error
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Error', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(<Error />);
    expect(getByText('Упс! Загрузка не удалась.')).toBeInTheDocument();
  });
});
