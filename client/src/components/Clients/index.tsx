'use client';

import * as S from './styles';
import Image from 'next/image';

const Header = () => {
  const imageSize = 40;

  const clients = [
    'erick',
    'lira',
    'carlos_gois',
    'carlos_toscano',
    'luis',
    'monaliza_albuquerque',
    'hb_floricultura',
    'pablo',
    'jailson',
  ];

  return (
    <S.Wrapper>
      <S.ImagesContainer size={imageSize}>
        {clients.map((client, index) => (
          <S.ImageWrapper key={index} size={imageSize} index={index}>
            <Image
              src={`/images/clients/${client}.webp`}
              alt={`Logo da QuickPage - ${client}`}
              layout="fill"
              objectFit="cover"
            />
          </S.ImageWrapper>
        ))}
      </S.ImagesContainer>
      <S.TextContainer>
        <S.Title>
          Inúmeros clientes <S.TextEffect>satisfeitos.</S.TextEffect>
        </S.Title>
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default Header;
