import React from 'react';
import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';
import StickyBox from 'react-sticky-box';


import {Container, SearchWrapper, SearchInput, SearchIcon, Body
        } from './styles';

const SideBar: React.FC = () => {
  return (
      <Container>
          <SearchWrapper>
              <SearchInput placeholder="Buscar no twitter"/>
              <SearchIcon />
          </SearchWrapper>
        <StickyBox>
          <Body>
              <List
              title="Talvez você curta"
              elements={[
                    <FollowSugestion 
                    name="Luiz batanero"
                    nickname="@luizbatanero"
                    />,
                    <FollowSugestion 
                    name="luke morales"
                    nickname="@lukemorales"
                    />,
                    <FollowSugestion 
                    name="Camila magalhães"
                    nickname="@Camilamagalhães"
                    />
              ]}
               />
               <List
              title="Talvez você curta"
              elements={[
                    <News />, <News />, <News />
              ]}
               />
                <List
              title="Talvez você curta"
              elements={[
                    <News />, <News />, <News />
              ]}
               />
                <List
              title="Talvez você curta"
              elements={[
                    <News />, <News />, <News />
              ]}
               />
                <List
              title="Talvez você curta"
              elements={[
                    <News />, <News />, <News />
              ]}
               />
          </Body>
          </StickyBox>
      </Container>
  )
}

export default SideBar;