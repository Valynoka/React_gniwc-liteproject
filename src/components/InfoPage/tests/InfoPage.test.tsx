import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import InfoPage from '../InfoPage';

const testId = 'testingInfoPage';

type InfoPageProps = React.ComponentProps<typeof InfoPage>;

const renderComponent = (props: InfoPageProps) => render(
  <Router>
    <InfoPage
      data-testid={testId}
      {...props}
    />,
  </Router>,
);

describe('Компонент InfoPage', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(
      <Router>
        <InfoPage />
      </Router>,
    );
    expect(getByText('Список')).toBeInTheDocument();
  });
});
