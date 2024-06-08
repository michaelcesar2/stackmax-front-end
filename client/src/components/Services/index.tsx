'use client';

import React, { useState } from 'react';
import * as S from './styles';
import Image from 'next/image';
import Button from '../Button';

const Services = () => {
  const imageSize = 55;
  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (buttonIndex: number) => {
    setActiveButton(buttonIndex === activeButton ? activeButton : buttonIndex);
  };

  const serviceData = [
    {
      buttonTitle: 'Landing page',
      imgSrc: '/images/services/landing_page.svg',
      title: 'Tenha agora mesmo sua Landing Page de alto padrão!',
      text: 'Através do conjunto de estratégias, nos trazemos mais chances de conversão de vendas para sua empresa através de anúncios patrocinados. A Estação Indoor é Agência de Marketing Digital especialista em gestão de tráfego pago com experiência de sobra para divulgar a sua marca de maneira eficaz.',
      buttonText: 'PRECISO DE UMA LANDING PAGE',
    },
    {
      buttonTitle: 'Site',
      imgSrc: '/images/services/site.svg',
      title: 'Desenvolvemos sites personalizados para sua empresa!',
      text: 'Através do conjunto de estratégias, nos trazemos mais chances de conversão de vendas para sua empresa através de anúncios patrocinados. A Estação Indoor é Agência de Marketing Digital especialista em gestão de tráfego pago com experiência de sobra para divulgar a sua marca de maneira eficaz.',
      buttonText: 'PRECISO DE UM SITE',
    },
    {
      buttonTitle: 'E-commerce',
      imgSrc: '/images/services/e-commerce.svg',
      title: 'Impulsione suas vendas com nosso e-commerce!',
      text: 'Através do conjunto de estratégias, nos trazemos mais chances de conversão de vendas para sua empresa através de anúncios patrocinados. A Estação Indoor é Agência de Marketing Digital especialista em gestão de tráfego pago com experiência de sobra para divulgar a sua marca de maneira eficaz.',
      buttonText: 'PRECISO DE UM E-COMMERCE',
    },
    {
      buttonTitle: 'Automações',
      imgSrc: '/images/services/auto.svg',
      title: 'Automatize seus processos e ganhe eficiência!',
      text: 'Através do conjunto de estratégias, nos trazemos mais chances de conversão de vendas para sua empresa através de anúncios patrocinados. A Estação Indoor é Agência de Marketing Digital especialista em gestão de tráfego pago com experiência de sobra para divulgar a sua marca de maneira eficaz.',
      buttonText: 'PRECISO DE UMA AUTOMAÇÃO',
    },
  ];

  const currentService = serviceData[activeButton];

  return (
    <S.Services>
      <S.TitleMain>Conheça os nossos serviços</S.TitleMain>
      <S.Wrapper>
        <S.BoxButtons>
          {serviceData.map((service, index) => (
            <S.Button
              key={index}
              isActive={activeButton === index}
              onClick={() => handleButtonClick(index)}
            >
              <Image
                src="/images/sites.webp"
                width={imageSize}
                height={imageSize}
                alt="Landing pages"
                style={{
                  filter:
                    activeButton === index ? 'brightness(0) invert(1)' : 'none',
                }}
              />
              <S.Title isActive={activeButton === index}>
                {service.buttonTitle}
              </S.Title>
            </S.Button>
          ))}
        </S.BoxButtons>
        <S.BoxContent>
          <Image
            src={currentService.imgSrc}
            width={500}
            height={500}
            alt="Imagem"
          />
          <S.BoxText>
            <S.TitleMain style={{ fontSize: '24px', fontWeight: '600' }}>
              {currentService.title}
            </S.TitleMain>
            <S.Text>{currentService.text}</S.Text>
            <Button text={currentService.buttonText}></Button>
          </S.BoxText>
        </S.BoxContent>
      </S.Wrapper>
    </S.Services>
  );
};

export default Services;
