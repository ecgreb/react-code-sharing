import { FC, ReactNode, useRef } from 'react';

interface Header3Props {
  render: () => ReactNode;
}

const Header3: FC<Header3Props> = ({ render }) => {
  const ref = useRef(0);
  ref.current++;
  console.log('Header3 render count = ' + ref.current);

  return (
    <div>
      {render()}
    </div>
  );
};

export default Header3;
