'use client';

import React, { useState, useEffect } from 'react';
import * as S from './styles';
import Logo from '../Logo';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <S.Header style={{ height: visible ? '90px' : '60px' }}>
      <S.Wrapper>
        <Logo />
        <S.Ul>
          <li>Serviços</li>
          <li>Sobre</li>
          <li>Trabalhos</li>
          <li>Clientes</li>
          <S.Button style={{ height: visible ? '55px' : '40px' }}>
            <p>ENTRAR EM CONTATO</p>
          </S.Button>
        </S.Ul>
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
