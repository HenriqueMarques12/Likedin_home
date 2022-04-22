import React from 'react';
import {
    Container,
    Wrapper,
    LinkedInIcon,
    HomeIcon,
    NotificationIcon,
    CaretDownIcon,
    ProfileCircle,
    SearchInput
} from './styles';

const DesktopHeader: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <div className="left">
                    <LinkedInIcon />
                    <SearchInput placeholder='Pesquisar' />

                </div>
                <div className="right">
                    <nav>
                        <button className='active'>
                            <HomeIcon />
                            <span>Início</span>
                        </button>
                        <button>
                            <NotificationIcon />
                            <span>Notificações</span>
                        </button>
                        <button>
                            <ProfileCircle src="https://avatars.githubusercontent.com/u/49203799?v=4" />
                            <span>
                                Eu <CaretDownIcon />
                            </span>
                        </button>
                    </nav>
                </div>
            </Wrapper>
        </Container>
    );
}

export default DesktopHeader;