import React from 'react';
import * as S from './styles';
import Button from '../Button';
import Image from 'next/image';

const Consultancy = () => {
  const width = 20;
  const height = 20;

  return (
    <S.Consultancy>
      <S.Wrapper>
        <S.BoxLeft>
          <S.Title style={{ fontSize: '18px', fontWeight: '500' }}>
            Agende uma{' '}
            <S.TextEffect style={{ fontSize: '18px', fontWeight: '500' }}>
              consultoria gratuita
            </S.TextEffect>
          </S.Title>
          <S.Title>
            Atendimento<S.TextEffect> personalizado </S.TextEffect>e
            <S.TextEffect> humanizado </S.TextEffect>para
            <S.TextEffect> entender </S.TextEffect>suas
            <S.TextEffect> necessidades</S.TextEffect>
          </S.Title>
          <S.Text style={{ marginBottom: '16px' }}>
            Tenha agora uma Landing Page ou Site personalizado para o seu
            negócio usando tecnologias de alto padrão e garantindo mais vendas!
          </S.Text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1px',
            }}
          >
            <Image
              src="/images/whatsapp.png"
              width={width}
              height={height}
              alt="whatsapp"
            />
            <S.Text style={{ fontWeight: '500', fontSize: '14px' }}>
              Whatsapp
            </S.Text>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1px',
            }}
          >
            <Image
              src="/images/call.png"
              width={width}
              height={height}
              alt="whatsapp"
            />
            <S.Text style={{ fontWeight: '500', fontSize: '14px' }}>
              Ligação
            </S.Text>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1px',
            }}
          >
            <Image
              src="/images/video_call.png"
              width={width}
              height={height}
              alt="whatsapp"
            />
            <S.Text style={{ fontWeight: '500', fontSize: '14px' }}>
              Chamada de vídeo
            </S.Text>
          </div>
          <Button text="AGENDAR CONSULTORIA"></Button>
        </S.BoxLeft>
        <S.BoxRight>
          <div
            style={{ minWidth: '100%', display: 'flex', justifyContent: 'end' }}
          >
            <Image
              src="/images/call.webp"
              alt="Cartoon coding"
              width={width}
              height={height}
              layout="responsive"
            />
          </div>
        </S.BoxRight>
      </S.Wrapper>
    </S.Consultancy>
  );
};

export default Consultancy;
