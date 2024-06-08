'use client';

import styled from 'styled-components';

export const AboutUs = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 24px;
  padding-left: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;

  display: flex;
  flex-direction: row;
  gap: 80px;
  margin-bottom: 120px;
`;

export const BoxLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  gap: 8px;
`;

export const BoxRight = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
  gap: 24px;
`;

export const ResumeBox = styled.aside`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  gap: 32px;
`;

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 55%;
  padding-right: 16px;
  border-right: solid 2px #dcdde4;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #383838;
  letter-spacing: 1px;
`;

export const SubTitle = styled.h3`
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
