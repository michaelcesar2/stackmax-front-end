'use client';

import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1f1f1f;
  margin-top: 120px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Title = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: white;
  letter-spacing: 1.5px;
`;

export const Link = styled.h3`
  font-size: 12px;
  font-weight: 400;
  color: white;
  letter-spacing: 1.5px;

  &:hover {
    cursor: pointer;
  }
`;
