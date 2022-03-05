import React from 'react';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import Posts from '../Posts';

const testId = 'testingPosts';

type PostsProps = React.ComponentProps<typeof Posts>;

const renderComponent = (props: PostsProps) => render(
  <Posts
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Posts', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
