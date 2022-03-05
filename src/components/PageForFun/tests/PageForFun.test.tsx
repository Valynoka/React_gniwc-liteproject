import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import PageForFun from '../PageForFun';

const testId = 'testingPageForFun';

type PageForFunProps = React.ComponentProps<typeof PageForFun>;

const renderComponent = (props: PageForFunProps) => render(
  <Router>
    <PageForFun
      data-testid={testId}
      {...props}
    />,
  </Router>,
);

describe('Компонент PageForFun', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(
      <Router>
        <PageForFun message="" image="" />
      </Router>,
    );
    expect(getByText('Собакены всегда приносят в нашу жизнь радость))')).toBeInTheDocument();
  });
});
