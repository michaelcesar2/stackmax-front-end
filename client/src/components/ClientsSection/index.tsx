import React from 'react';
import * as S from './styles';
import Image from 'next/image';

const ClientsSection = () => {
  return (
    <S.ClientsSection>
      <S.Wrapper>
        <Image
          src="/images/message.png"
          width={140}
          height={140}
          alt="Imagem de uma mensagem"
        />
        <S.Box>
          <p style={{ fontSize: '14px', color: 'white' }}>
            {'"'}A melhor entrou em minha vida há 1 ano, em um momento de muito
            desafio profissional e eu consegui fazer a escolha mais precisa,
            estava necessitando encontrar verdadeiros parceiros. E acertei em
            cheio. As entregas e os resultados são sempre maravilhosos e atendem
            exatamente as minhas necessidades, sempre com muita competência,
            organização, e muita responsabilidade. A nossa parceria é brilhante,
            cada dia mais orgulhosa do trabalho e das pessoas que fazem parte
            dessa empresa tão competente.{'"'}
          </p>

          <p style={{ fontSize: '16px', color: 'white', fontWeight: '600' }}>
            Michael César | CEO{' '}
          </p>
        </S.Box>
      </S.Wrapper>
    </S.ClientsSection>
  );
};

export default ClientsSection;
