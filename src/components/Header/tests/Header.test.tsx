import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header';

const testId = 'testingHeader';

type HeaderProps = React.ComponentProps<typeof Header>;

const renderComponent = (props: HeaderProps) => render(
  <Router>
    <Header
      data-testid={testId}
      {...props}
    />,
  </Router>,
);

describe('Компонент Header', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(getByText('Главная')).toBeInTheDocument();
    expect(getByText('О сериале')).toBeInTheDocument();
  });
});
