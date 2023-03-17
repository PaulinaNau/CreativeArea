import React from 'react';
import { TextWrapper, ButtontWrapper } from 'assets/styles/wrappers';
import { WelcomeSubtitle, WelcomeTitle, MainText } from 'assets/styles/fonts';
import HomeImg from 'components/atoms/HomeImg/HomeImg';
import { Button } from 'components/atoms/Button/Button';
import 'assets/styles/styles.css';

const HomeContent = () => (
  <>
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center ps-3">
          <TextWrapper>
            <div>
              <WelcomeTitle>Spójność wizualna marki</WelcomeTitle>
              <WelcomeSubtitle>to krok do sukcesu</WelcomeSubtitle>
              <MainText>Pokażę piękną stronę Twojego biznesu</MainText>
              <ButtontWrapper><Button>Zobacz realizacje</Button></ButtontWrapper>
            </div>
          </TextWrapper>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center my-3 my-md-0">
          <div className="imgStyled">
            <HomeImg></HomeImg>
            <div className="imgText">Przejdź do portfolio</div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomeContent;
