import styled from "styled-components";

export const FooterStyled = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
color: white;
background-color: ${({ theme }) => theme.colors.darkGrey};
`