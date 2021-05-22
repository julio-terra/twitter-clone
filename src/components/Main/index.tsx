import React from 'react';
import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailICon  } from './styles';


const Main: React.FC = () => {
  return(
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Júlio terra</strong>
          <span>602 tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <BellIcon />
        <EmailICon />
      </BottomMenu> 

      </Container>
  )
}

export default Main;