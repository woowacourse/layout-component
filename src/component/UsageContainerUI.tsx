import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Container } from 'tkdrb15-layout-component';

const defaultItems: readonly string[] = ['Item1', 'Item2', 'Item3'];

const UsageContainerUI = () => {
  const [uiItems, setUiItems] = useState<string[]>([...defaultItems]);

  const [maxWidth, setMaxWidth] = useState('150px');
  const [minWidth, setMinWidth] = useState('100px');

  const addContainerItem = () => {
    return setUiItems((current) => [...current, `Item${current.length + 1}`]);
  };

  const handleChangeMaxWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxWidth(e.target.value);
  };

  const handleChangeMinWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinWidth(e.target.value);
  };

  return (
    <>
      <Style.UIContainerOuter>
        <Style.UIContainerInner>
          <Container maxWidth={maxWidth} minWidth={minWidth}>
            {uiItems.map((item) => (
              <Style.Item key={item}>{item}</Style.Item>
            ))}
          </Container>
        </Style.UIContainerInner>
        <Style.ButtonWrapper>
          <Style.Button onClick={addContainerItem}>Add Item</Style.Button>
        </Style.ButtonWrapper>
      </Style.UIContainerOuter>
      <Style.InputContainer>
        <Style.InputName>maxWidth</Style.InputName>
        <Style.PropsInput onChange={handleChangeMaxWidth} value={maxWidth} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>minWidth</Style.InputName>
        <Style.PropsInput onChange={handleChangeMinWidth} value={minWidth} />
      </Style.InputContainer>
    </>
  );
};

export default UsageContainerUI;

const Style = {
  Item: styled.div`
    text-align: center;

    border-radius: 3px;
    padding: 5px 10px;

    background-color: rgb(225, 235, 255);
  `,

  UIContainerOuter: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 300px;
    padding: 30px;
    border-radius: 10px;
    border: 2px solid rgb(235, 235, 240);

    background-color: rgb(243, 243, 250);
  `,

  UIContainerInner: styled.div`
    background-color: white;
  `,

  ButtonWrapper: styled.div`
    position: absolute;
    bottom: 20px;
    right: 30px;
  `,

  Button: styled.div`
    text-align: center;

    width: 130px;
    padding: 8px;
    border-radius: 5px;

    background-color: #1976d2;

    color: white;
    font-size: 1.15rem;
    font-weight: 500;

    cursor: pointer;
  `,

  InputContainer: styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    margin-top: 7px;

    font-size: 1rem;
    font-weight: 700;
    color: rgb(100, 100, 110);
  `,

  InputName: styled.div`
    width: 100px;
  `,

  PropsInput: styled.input`
    width: 300px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid rgb(155, 155, 170);

    font-size: 1rem;
  `,
};
