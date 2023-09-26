import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  description: string;
}

const IntroductionUI = ({
  children,
  name,
  description,
}: React.PropsWithChildren<Props>) => {
  return (
    <Style.IntroductionContainer>
      <Style.Name>{name}</Style.Name>
      <Style.Description>{description}</Style.Description>
      {children}
    </Style.IntroductionContainer>
  );
};

export default IntroductionUI;

const Style = {
  IntroductionContainer: styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    margin-bottom: 70px;
  `,

  Name: styled.div`
    font-size: 2.25rem;
    font-weight: 700;
  `,

  Description: styled.div`
    font-size: 1.25rem;

    margin-bottom: 30px;
  `,
};
