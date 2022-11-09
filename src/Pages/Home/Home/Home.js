import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';
import HomeSection from '../HomeSection/HomeSection';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            
            <Banner></Banner>
            <Services></Services>
            <HomeSection></HomeSection>
        </div>
    );
};

export default Home;