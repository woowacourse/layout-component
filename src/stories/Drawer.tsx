import styled from 'styled-components'
import React from 'react'
import { Drawer as DrawerPat } from 'react-layout-component-pat'
import { useState } from 'react'

interface DrawerProps {
  direction: 'right' | 'left' | 'top' | 'bottom'
}

const Drawer = ({ direction = 'right' }: DrawerProps) => {
  const [isShow, setIsShow] = useState(false)
  const openSheet = () => setIsShow(true)
  const closeSheet = () => setIsShow(false)
  return (
    <DrawerWrapper>
      <DrawerPat direction={direction} isShow={isShow} closeDrawer={closeSheet}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
      </DrawerPat>
      <Button onClick={openSheet}>버튼</Button>
    </DrawerWrapper>
  )
}

const DrawerWrapper = styled.div`
  width: 800px;
  height: 500px;
`

const Button = styled.button`
  position: fixed;
  margin: 0 auto;
  top: 40%;
  left: 0;
  right: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #08f931;
`

export default Drawer
