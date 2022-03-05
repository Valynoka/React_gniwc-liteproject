import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import InfoPage from '../InfoPage';

const testId = 'testingInfoPage';

type InfoPageProps = React.ComponentProps<typeof InfoPage>;

const renderComponent = (props: InfoPageProps) => render(
  <InfoPage
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент InfoPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
