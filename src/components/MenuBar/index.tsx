import React from 'react';

import { Container,
         Topside,
         Logo,
         MenuButton,
         HomeIcon,
         BellIcon,
         EmailIcon,
         FavoriteIcon,
         ProfileIcon,
         Botside,
         Avatar,
         ProfileData,
         ExitIcon
    } from './styles';
import Button from '../Button'

const MenuBar: React.FC = () => {
  return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon/>
                    <span>notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton>
                    <ProfileIcon />
                    <span>Pefil</span>
                </MenuButton>

                <Button>
                    <span>twettar</span>
                </Button>
            </Topside>
            <Botside>
                <Avatar />
                <ProfileData>
                    <strong>Júlio terra</strong>
                    <span>@julio</span>
                </ProfileData>
                <ExitIcon />
            </Botside>
        </Container>
  )
}

export default MenuBar;