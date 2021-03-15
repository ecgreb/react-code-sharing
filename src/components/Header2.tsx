import { FC, ReactNode, useRef } from 'react';

interface Header2Props {
  children: ReactNode;
}

const Header2: FC<Header2Props> = ({ children }) => {
  const ref = useRef(0);
  ref.current++;
  console.log('Header2 render count = ' + ref.current);

  return (
    <div>
      {children}
    </div>);
};

export default Header2;
