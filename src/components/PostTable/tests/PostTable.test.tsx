import React from 'react';
import { render } from '@testing-library/react';

import PostTable from '../PostTable';

const testId = 'testingPostTable';

type PostTableProps = React.ComponentProps<typeof PostTable>;

const renderComponent = (props: PostTableProps) => render(
  <PostTable
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент PostTable', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
