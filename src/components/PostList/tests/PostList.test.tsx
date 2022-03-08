import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PostList from '../PostList';

const testId = 'testingPost';

type PostListProps = React.ComponentProps<typeof PostList>;

const renderComponent = (props: PostListProps) => render(
  <PostList
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент PostList', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
