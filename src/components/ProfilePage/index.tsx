import React from 'react';

import { Container,
         Banner,
         Avatar,
         ProfileData,
         LocationIcon,
         CakeIcon,
         Followage,
         EditBottom
        } from './styles';
import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      
      <ProfileData>
        <EditBottom outlined>editar perfil</EditBottom>
        <h1>Júlio terra</h1>
        <h2>@julioTerra</h2>

        <p>
          Full stack developer
        </p>

        <ul>
          <li>
            <LocationIcon />
            Rio de Janeiro, Brasil
          </li>
          <li>
            <CakeIcon />
            nascido(a) em 11 de outubro de 2003
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672</strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  )
}

export default ProfilePage;