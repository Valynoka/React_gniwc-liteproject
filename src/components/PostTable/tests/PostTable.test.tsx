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
  it('выводит сообщение', () => {
    const { getByText } = render(<PostTable episode_id={0} title="Pilot" season="" air_date="" characters={[]} episode="1" series="" />);
    expect(getByText('Pilot')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
  });
});
