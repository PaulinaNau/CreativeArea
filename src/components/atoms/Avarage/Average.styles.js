import styled from 'styled-components';
import { theme } from 'assets/styles/themes';

export const StyledAverage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
    return theme.colors.grey;
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: bold;
`;