import React from 'react';
import { render } from '@testing-library/react';

import PageForFun from '../PageForFun';

const testId = 'testingPageForFun';

type PageForFunProps = React.ComponentProps<typeof PageForFun>;

const renderComponent = (props: PageForFunProps) => render(
  <PageForFun
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент PageForFun', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
