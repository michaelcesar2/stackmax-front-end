import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styles';

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => <S.Button>{text}</S.Button>;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
