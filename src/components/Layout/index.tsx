import React, { useEffect, useState } from 'react';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';

import { Container } from './styles';
import AdBanner from '../AdBanner';

const Layout = () => {
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);

    }, [])
    return (
        <Container>
            <MobileHeader />
            <DesktopHeader />

            <span>
                {!isloading && <AdBanner />}
            </span>

            <main>
                <LeftColumn isLoading={isloading} />
                <MiddleColumn isLoading={isloading} />
                <RightColumn isLoading={isloading} />
            </main>
        </Container>
    );
}

export default Layout;