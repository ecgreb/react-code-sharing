import { FC, ReactNode, useRef } from 'react';

interface Header3Props {
  count: number;
  render: (count: number) => ReactNode;
}

const Header3: FC<Header3Props> = ({ count, render }) => {
  const ref = useRef(0);
  ref.current++;
  console.log('Header3 render count = ' + ref.current);

  return (
    <div>
      {render(count)}
    </div>
  );
};

export default Header3;
