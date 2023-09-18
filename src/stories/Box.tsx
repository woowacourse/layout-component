import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

const Box = ({ children }: PropsWithChildren) => {
  return <Layout>{children}</Layout>;
};

export default Box;

const Layout = styled.div`
  height: 100vh;
  background-color: black;
`;
