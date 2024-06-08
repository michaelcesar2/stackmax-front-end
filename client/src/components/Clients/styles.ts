import styled from 'styled-components';

interface WrapperProps {
  size: number;
}

interface ImageWrapperProps {
  size: number;
  index: number;
}

export const Wrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ImagesContainer = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  position: relative;
  height: ${(props) => props.size}px;
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  border-radius: 50%;

  position: absolute;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  overflow: hidden;
  left: ${(props) => props.index * (props.size * 0.6)}px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const TextContainer = styled.div`
  font-size: 14px;
  flex-grow: 1;
  & p {
    color: #383838;
  }
`;

export const Title = styled.p`
  font-size: 15px;
  font-weight: 600;
  background: linear-gradient(to bottom, #383838, #383838);
  line-height: 116%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextEffect = styled.span`
  font-size: 15px;
  font-weight: 500;
  background: linear-gradient(to top, #383838, #383838);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
