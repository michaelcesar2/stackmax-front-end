import styled from 'styled-components';

export const Assessments = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 24px;
  padding-left: 24px;
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const BoxLeft = styled.div`
  display: flex;
  width: 55%;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

export const BoxRight = styled.div`
  display: flex;
  justify-content: center;
  width: 40%;
  height: 300px;
  flex-direction: column;
  gap: 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 600;
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

export const SubTitle = styled.h3`
  color: #383838;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
`;
