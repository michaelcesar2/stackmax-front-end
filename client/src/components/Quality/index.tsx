import * as S from './styles';
import Image from 'next/image';

const Quality = () => (
  <S.Wrapper>
    <S.TextBox>
      <S.Title style={{ fontSize: '32px' }}>
        Desenvolvemos{' '}
        <S.TitleEffect style={{ fontSize: '32px' }}>soluções </S.TitleEffect>
        que trazem{' '}
        <S.TitleEffect style={{ fontSize: '32px' }}>resultados</S.TitleEffect>
      </S.Title>
      <S.SubTitle style={{ color: '#646464' }}>
        Nossa equipe é especializada em conectar o seu negócio com o digital,
        sempre focada em desenvolver soluções de alta conversão, performance e
        usabilidade.
      </S.SubTitle>
    </S.TextBox>
    <S.Container>
      <S.Box>
        <S.BoxImage>
          <Image
            src="/images/performance.webp"
            alt="Logo da QuickPage"
            width={40}
            height={40}
          />
        </S.BoxImage>

        <S.Title>
          UI/<S.TitleEffect>UX</S.TitleEffect>
        </S.Title>
        <S.Text style={{ color: '#646464' }}>
          Web design focado na experiência do Usuário.
        </S.Text>
      </S.Box>
      <S.Box>
        <S.BoxImage>
          <Image
            src="/images/rocket.webp"
            alt="Logo da QuickPage"
            width={40}
            height={40}
          />
        </S.BoxImage>

        <S.Title>Performance</S.Title>
        <S.Text style={{ color: '#646464' }}>
          Sites otimizados para gerar grandes resultados
        </S.Text>
      </S.Box>
      <S.Box>
        <S.BoxImage>
          <Image
            src="/images/mouse.webp"
            alt="Logo da QuickPage"
            width={40}
            height={40}
          />
        </S.BoxImage>

        <S.Title>Tecnologia</S.Title>
        <S.Text style={{ color: '#646464' }}>
          Modernidade e tecnologias sempre atualizadas
        </S.Text>
      </S.Box>
      <S.Box>
        <S.BoxImage>
          <Image
            src="/images/mouse_top.webp"
            alt="Logo da QuickPage"
            width={40}
            height={40}
          />
        </S.BoxImage>

        <S.Title>Flexibilidade</S.Title>
        <S.Text style={{ color: '#646464' }}>
          Seu site em constante aprimoramento.
        </S.Text>
      </S.Box>
    </S.Container>
  </S.Wrapper>
);

export default Quality;
