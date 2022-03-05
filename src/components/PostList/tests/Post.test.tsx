import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Post from '../PostList';

const testId = 'testingPost';

type PostProps = React.ComponentProps<typeof Post>;

const renderComponent = (props: PostProps) => render(
  <Post
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент PostList', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
  it('выводит сообщение', () => {
    const { getByText } = render(<Post episode_id={0} title="Pilot" season="" air_date="" characters={[]} episode="1" series="" />);
    expect(getByText('Pilot')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });
});
