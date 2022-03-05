import React from 'react';
import { render } from '@testing-library/react';

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
});
