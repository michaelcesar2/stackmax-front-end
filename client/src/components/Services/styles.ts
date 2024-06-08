'use client';

import styled from 'styled-components';

interface ButtonProps {
  isActive: boolean;
}

export const Services = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 40px;
  gap: 40px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.div<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.3s;
  padding: 30px;
  width: 18%;
  border-radius: 8px;
  gap: 16px;
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#383838')};
  background-color: ${({ isActive }) => (isActive ? '#FF6F00' : '#f0f0f0')};
  cursor: pointer;
`;

export const BoxButtons = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

export const BoxContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 40px;
  transition: opacity 1s ease;
`;

export const BoxText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

interface TitleProps {
  isActive: boolean;
}

export const TitleMain = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #383838;
`;

export const Title = styled.h1<TitleProps>`
  font-size: 16px;
  font-weight: 700;
  color: ${({ isActive }) => (isActive ? '#FFFFFF' : '#383838')};
`;

export const TextEffect = styled.span`
  font-size: 28px;
  font-weight: 700;
  color: #ff6f00;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #383838;
  font-weight: 400;
`;
