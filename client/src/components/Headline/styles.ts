'use client';

import styled from 'styled-components';

export const Headline = styled.section`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  margin-bottom: 80px;
`;

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1280px;
  height: 400px;
  display: flex;
  justify-content: end;
  background-image: url('images/bill_gates.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
`;

export const Box = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  padding-top: 142px;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;
