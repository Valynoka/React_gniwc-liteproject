import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import StartPage from '../StartPage';

const testId = 'testingStartPage';

type StartPageProps = React.ComponentProps<typeof StartPage>;

const renderComponent = (props: StartPageProps = {}) => render(
  <Router>
    <StartPage
      data-testid={testId}
      {...props}
    />
  </Router>,
);

describe('Компонент StartPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(
      <Router>
        <StartPage />
      </Router>,
    );
    expect(getByText('Мы рады Вам!')).toBeInTheDocument();
  });
});
