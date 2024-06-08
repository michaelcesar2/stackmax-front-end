import React from 'react';
import * as S from './styles';
import Button from '../Button';
import Image from 'next/image';
import Clients from '../Clients';

const HomePage = () => {
  return (
    <S.HomePage>
      <S.Wrapper>
        <S.BoxLeft>
          <S.Title>
            Transforme <S.TextEffect>cliques</S.TextEffect> em
            <S.TextEffect> vendas</S.TextEffect> com
            <S.TextEffect> Landing Pages</S.TextEffect> e
            <S.TextEffect> Automações </S.TextEffect>de Alto Padrão
          </S.Title>
          <S.Text>
            Tenha agora uma Landing Page ou Site personalizado para o seu
            negócio usando tecnologias de alto padrão e garantindo mais vendas!
          </S.Text>
          <Button text="ENTRAR EM CONTATO"></Button>
          <Clients></Clients>
        </S.BoxLeft>
        <S.BoxRight>
          <div
            style={{ minWidth: '100%', display: 'flex', justifyContent: 'end' }}
          >
            <Image
              src="/images/bg.webp"
              alt="Cartoon coding"
              width={0}
              height={0}
              layout="responsive"
            />
          </div>
        </S.BoxRight>
      </S.Wrapper>
    </S.HomePage>
  );
};

export default HomePage;
