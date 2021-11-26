import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('Should render', () => {
    renderTheme(<SectionContainer>Children</SectionContainer>);
    expect(screen.getByRole('Heading')).toBeInTheDocument;
  });
});
