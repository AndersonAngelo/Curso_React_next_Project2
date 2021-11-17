import P from 'prop-types';
import * as Styled from './style';

export const TextComponent = ({ children }) => {
  return (
    <Styled.Container>
      <div>{children}</div>
    </Styled.Container>
  );
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
