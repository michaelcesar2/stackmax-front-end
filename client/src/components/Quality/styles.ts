'use client';

import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  padding-right: 24px;
  gap: 80px;
  margin-bottom: 120px;
`;

export const Container = styled.aside`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  justify-content: space-between;
  gap: 5%;
  flex-direction: row;
  margin: 0 0 32px 0px;
`;

export const Box = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
`;

export const BoxImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff6f00;
  width: 35%;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 24px;
`;

export const TextBox = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #383838;
  letter-spacing: 1px;
`;

export const SubTitle = styled.h3`
  width: 80%;
  text-align: center;
  color: #383838;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const TitleEffect = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #ff6f00;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #383838;
  letter-spacing: 1px;
`;
