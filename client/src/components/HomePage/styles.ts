'use client';

import styled from 'styled-components';

export const HomePage = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
`;

export const BoxLeft = styled.aside`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;

export const BoxRight = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #383838;
`;

export const TextEffect = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #ff6f00;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #383838;
  font-weight: 600;
`;
