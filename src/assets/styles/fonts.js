import styled from 'styled-components';

export const WelcomeTitle = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: ${(props) => (props.isLight ? '#727272' : '#242020')};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: left;
  line-height: 55px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    margin: 300px 0 0 0;
    font-size: ${({ theme }) => theme.fontSizeMobile.xl};
    line-height: 45px;
  }
`;

export const WelcomeSubtitle = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: left;
  line-height: 40px;
  padding: 0;
  margin: 0;
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizeMobile.xl};
  }
`;

export const Title = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 600;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizeMobile.xl};
  }
`;
export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  textalign: left;
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizeMobile.l};
  }
`;

export const MainText = styled.p`
  font-family: 'Raleway', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  margin: 20px 0;
  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSizeMobile.l};
    margin: 10px 0;
  }
`;
