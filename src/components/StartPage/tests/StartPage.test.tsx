import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import StartPage from '../StartPage';

const testId = 'testingStartPage';

type StartPageProps = React.ComponentProps<typeof StartPage>;

const renderComponent = (props: StartPageProps = {}) => render(
  <StartPage
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент StartPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(
      <BrowserRouter>
        <StartPage />
      </BrowserRouter>,
    );
    expect(getByText('Мы рады Вам!')).toBeInTheDocument();
    expect(getByText('И у нас для вас есть')).toBeInTheDocument();
  });
});
