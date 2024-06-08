import React from 'react';
import * as S from './styles';

const Headline = () => {
  return (
    <S.Headline>
      <S.Wrapper>
        <S.Box>
          <p style={{ fontSize: '18px', color: 'white' }}>
            {'"'}Em alguns anos vão existir dois tipos de empresas. As que fazem
            negócios pela internet e as que estão fora dos negócios.
            {'"'}
          </p>

          <p style={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>
            Bill Gates | CEO da Microsoft e multibilionário{' '}
          </p>
        </S.Box>
      </S.Wrapper>
    </S.Headline>
  );
};

export default Headline;
