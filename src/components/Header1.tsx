import React, { FC, useRef } from 'react';

interface Header1Props {
  count: number;
}

const Header1: FC<Header1Props> = ({count}) => {
  const ref = useRef(0);
  ref.current++;
  console.log('Header1 render count = ' + ref.current);

  return (
    <div>
      <p>
        Count = {count}
      </p>
    </div>);
};

export default Header1;
