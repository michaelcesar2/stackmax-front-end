'use client';

import * as S from './styles';
import Image from 'next/image';
const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.WrapperBox>
          <Image
            src="/images/logo.svg"
            alt="Logo da QuickPage"
            width={35}
            height={30}
          />
          <S.Title>Stackmax | © Todos os direitos reservados, 2024.</S.Title>
        </S.WrapperBox>

        <S.WrapperBox>
          <S.Link>(84) 9 9920-8445</S.Link>
          <p style={{ fontSize: '14px', color: 'white', fontWeight: '100' }}>
            |
          </p>
          <S.Link>contato@stackmax.com.br</S.Link>
        </S.WrapperBox>

        <S.WrapperBox>
          <S.Link>Termos de Uso</S.Link>
          <p style={{ fontSize: '14px', color: 'white', fontWeight: '100' }}>
            |
          </p>
          <S.Link>Políticas de Privacidade</S.Link>
        </S.WrapperBox>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
