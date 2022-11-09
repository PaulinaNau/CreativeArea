import React from 'react';
import Navigation from 'components/organisms/Navigation/Natigation';
import { MainWrapper } from './MainTemplates.styles';

const MainTemplate = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <Navigation />
        {children}
      </MainWrapper>
    </>
  );
};

export default MainTemplate;
