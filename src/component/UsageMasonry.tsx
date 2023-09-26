import React, { useState } from 'react';
import { styled } from 'styled-components';
import {
  testSrc1,
  testSrc2,
  testSrc3,
  testSrc4,
  testSrc5,
  testSrc6,
  testSrc7,
} from '../imageSrcs';
import { MasonryLayout } from 'tkdrb15-layout-component';

const images = [
  testSrc1,
  testSrc2,
  testSrc3,
  testSrc4,
  testSrc5,
  testSrc6,
  testSrc7,
];

const defaultItems: React.ReactNode = [
  <img src={testSrc1} />,
  <img src={testSrc2} />,
  <img src={testSrc3} />,
];

const UsageMasonryUI = () => {
  const [srcItems, setSrcItems] = useState<React.ReactNode[]>([
    ...defaultItems,
  ]);

  const [columnGap, setColumnGap] = useState('12px');
  const [rowGap, setRowGap] = useState('15px');
  const [borderRadius, setBorderRadius] = useState('20px');
  const [width, setWidth] = useState('100%');
  const [itemWidth, setItemWidth] = useState('200px');
  const [column, setColumn] = useState<number | 'auto-fit'>('auto-fit');

  const addContainerItem = () => {
    const nextSrcIndex = srcItems.length % images.length;
    return setSrcItems((current) => [
      ...current,
      <img src={images[nextSrcIndex]} />,
    ]);
  };

  const handleChangeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWidth(e.target.value);
  };

  const handleChangeColumn = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'auto-fit') return setColumn('auto-fit');
    if (isNaN(Number(e.target.value))) return;

    setColumn(parseInt(e.target.value));
  };

  const handleChangeBorderRadius = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(e.target.value);
  };

  const handleChangeRowGap = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowGap(e.target.value);
  };

  const handleChangeColumnGap = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColumnGap(e.target.value);
  };

  const handleChangeItemWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemWidth(e.target.value);
  };

  return (
    <>
      <Style.UIContainerOuter>
        <Style.UIContainerInner>
          <Style.UIContainerInner>
            <MasonryLayout
              column={column}
              width={width}
              itemWidth={itemWidth}
              columnGap={columnGap}
              rowGap={rowGap}
              borderRadius={borderRadius}
            >
              {srcItems}
            </MasonryLayout>
          </Style.UIContainerInner>
        </Style.UIContainerInner>
      </Style.UIContainerOuter>
      <Style.ButtonWrapper>
        <Style.Button onClick={addContainerItem}>Add Item</Style.Button>
      </Style.ButtonWrapper>
      <Style.InputContainer>
        <Style.InputName typeof="select">column</Style.InputName>
        <select onChange={handleChangeColumn} value={column}>
          <option value="auto-fit">auto-fit</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="7">7</option>
        </select>
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>columnGap</Style.InputName>
        <Style.PropsInput onChange={handleChangeColumnGap} value={columnGap} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>rowGap</Style.InputName>
        <Style.PropsInput onChange={handleChangeRowGap} value={rowGap} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>width</Style.InputName>
        <Style.PropsInput onChange={handleChangeWidth} value={width} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>itemWidth</Style.InputName>
        <Style.PropsInput onChange={handleChangeItemWidth} value={itemWidth} />
      </Style.InputContainer>
      <Style.InputContainer>
        <Style.InputName>borderRadius</Style.InputName>
        <Style.PropsInput
          onChange={handleChangeBorderRadius}
          value={borderRadius}
        />
      </Style.InputContainer>
    </>
  );
};

export default UsageMasonryUI;

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

    height: 700px;
    padding: 30px;
    border-radius: 10px;
    border: 2px solid rgb(235, 235, 240);

    background-color: rgb(243, 243, 250);

    overflow: auto;
  `,

  UIContainerInner: styled.div`
    background-color: white;
    width: 100%;
  `,

  ButtonWrapper: styled.div`
    display: flex;
    justify-content: end;

    margin: 20px 0;
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
