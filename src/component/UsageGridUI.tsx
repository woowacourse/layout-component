import React, { useState } from 'react';
import { styled } from 'styled-components';
import { Grid } from 'tkdrb15-layout-component';
const defaultItems: readonly string[] = ['Item1', 'Item2', 'Item3'];

const UsageGridUI = () => {
  const [uiItems, setUiItems] = useState<string[]>([...defaultItems]);

  const [cols, setCols] = useState('3');
  const [rows, setRows] = useState('5');
  const [gap, setGap] = useState('10px');

  const addContainerItem = () => {
    return setUiItems((current) => [...current, `Item${current.length + 1}`]);
  };

  const handleChangeCols = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;

    setCols(e.target.value);
  };

  const handleChangeRows = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return;

    setRows(e.target.value);
  };

  const handleChangeGap = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGap(e.target.value);
  };

  return (
    <>
      <Style.UIContainerOuter>
        <Style.UIContainerInner>
          <Style.UIContainerInner>
            <Grid cols={Number(cols)} rows={Number(rows)} gap={gap}>
              {uiItems.map((item) => (
                <Style.Item key={item}>{item}</Style.Item>
              ))}
            </Grid>
          </Style.UIContainerInner>
        </Style.UIContainerInner>
        <Style.ButtonWrapper>
          <Style.Button onClick={addContainerItem}>Add Item</Style.Button>
        </Style.ButtonWrapper>
      </Style.UIContainerOuter>
      <Style.InputContainer>
        <Style.InputName>cols</Style.InputName>
        <Style.PropsInput onChange={handleChangeCols} value={cols} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>rows</Style.InputName>
        <Style.PropsInput onChange={handleChangeRows} value={rows} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>gap</Style.InputName>
        <Style.PropsInput onChange={handleChangeGap} value={gap} />
      </Style.InputContainer>
    </>
  );
};

export default UsageGridUI;

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
