import React from 'react';
import Main  from '../Main'

import { Container, Wrapper } from './styles';

const Layouts: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar />
        <Main />
        <SideBar /> */}
        <Main />
      </Wrapper>
    </Container>
  )
}

export default Layouts;