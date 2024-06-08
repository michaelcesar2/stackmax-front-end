import styled from 'styled-components';

export const AssessmentsSlide = styled.section`
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 40px;
`;

export const WrapperBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperBlocks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const Block = styled.article`
  display: flex;
  height: 300px;
  justify-content: space-between;
  flex-direction: column;
  padding: 40px 24px 40px 24px;
  border-radius: 8px;
  /* border: solid 1px #383838; */
  background-color: #ff6f00;
`;

export const WrapperClient = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 16px;
`;

export const StarsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: white;
  line-height: 116%;
`;

export const SecondaryTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  color: white;
`;

export const Text = styled.p`
  font-size: 15px;
  font-weight: 300;
  color: white;
  line-height: 116%;
`;

export const TextEffect = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;
