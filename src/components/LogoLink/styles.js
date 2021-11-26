import Styled, { css } from 'styled-components';

export const Container = Styled.a`
  ${() => css`
    display: flex;
    text-decoration: none;
    align-items: center;
    color: inherit;

    > img {
      max-height: 2.5rem;
    }
  `}
`;
