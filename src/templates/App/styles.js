import Styled, { css } from 'styled-components';

export const Wrapper = Styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.mainBg};
  `}
`;
