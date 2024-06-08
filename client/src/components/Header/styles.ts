'use client';

import styled from 'styled-components';
import { keyframes } from 'styled-components';

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #383838;
  transition: 0.5s;
  background-color: #f8f8f8af;
  /* border-bottom: 1px solid #fe7309; */
  padding-bottom: 2px;
  backdrop-filter: blur(5px);
  z-index: 1;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25%;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  list-style: none;

  li {
    &:hover {
      transition: 0.5s;
      cursor: pointer;
      color: #383838;
    }
  }
`;

export const Button = styled.button`
  font-family: Poppins;
  transition: 0.5s;
  width: 270px;
  height: 55px;
  cursor: pointer;
  color: white;
  background-image: linear-gradient(90deg, #ff821f, #ff6f00, #ff8827, #ff7403);
  border: 1px solid transparent;
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease infinite;
  border-radius: 24px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    color: white;
    background-image: linear-gradient(
      90deg,
      #ff9204,
      #ff6f00,
      #ff9b4e,
      #ff9645
    );
    border: 1px solid transparent;
    background-size: 400% 400%;
    animation: ${gradientAnimation} 10s ease infinite;
  }
`;
