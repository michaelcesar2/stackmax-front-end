import * as S from './styles';
import Image from 'next/image';

const Logo = () => (
  <S.Wrapper>
    <Image
      src="images/logo.svg"
      alt="Logo da QuickPage"
      width={50}
      height={45}
    />
  </S.Wrapper>
);

export default Logo;
