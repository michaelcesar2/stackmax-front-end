'use client';

import styled from 'styled-components';

export const Button = styled.button`
  font-family: Poppins;
  max-width: 380px;
  padding: 30px 70px 30px 70px;
  transition: 0.5s;
  font-weight: 600;
  font-size: 14px;
  color: white;
  background-image: linear-gradient(90deg, #ff821f, #ff6f00, #ff8827, #ff7403);
  background-size: 400% 208%;
  animation: gradientAnimation 5s linear infinite alternate;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 32px;
  margin-top: 16px;

  @keyframes gradientAnimation {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  &:hover {
    background-image: linear-gradient(
      90deg,
      #ff9204,
      #ff6f00,
      #ff9b4e,
      #ff9645
    );
    transform: scale(1.01);
    animation: gradientAnimation 5s linear infinite alternate;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    color: white;
    cursor: pointer;
  }
`;
