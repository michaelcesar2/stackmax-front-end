'use client';

import * as S from './styles';
import Image from 'next/image';

const Assessments = () => {
  const wh = 50;

  return (
    <S.Assessments>
      <S.Wrapper>
        <S.BoxLeft>
          <S.SubTitle>Qualidade e Segurança</S.SubTitle>
          <S.Title>Confie em quem é de confiança</S.Title>
          <S.Text>
            Desperte novas possibilidades com nosso site integrado da Liveweb.
            Adicione botões diretos para WhatsApp e e-mail, simplificando a
            comunicação. Compartilhe áudios, vídeos e conteúdo do seu canal do
            YouTube para engajar seu público. Integre com Gmail e Outlook para
            uma gestão eficiente. Transforme sua presença online em uma
            experiência interativa e dinâmica.
          </S.Text>
        </S.BoxLeft>
        <S.BoxRight>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <S.Title>Michael César</S.Title>
            <S.TextEffect style={{ fontSize: '16px', fontWeight: '500' }}>
              Web Developer and UI/UX Design
            </S.TextEffect>
          </div>
          <S.Text style={{ fontWeight: '400' }}>
            Acredito que “NADA GRANDE É FEITO SOZINHO”, especialista em aumentar
            a percepção de valor de empresas, produtos ou serviços através de um
            visual mais profissional e marcante.
          </S.Text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Image
              src="/images/clients/michael.webp"
              width={wh}
              height={wh}
              alt="Michael"
            />
            <S.Text
              style={{ fontWeight: '400', fontSize: '12px', width: '50%' }}
            >
              Tudo é criado duas vezes. Primeiro na mente, depois na realidade.
              🧠
            </S.Text>
          </div>
        </S.BoxRight>
      </S.Wrapper>
    </S.Assessments>
  );
};

export default Assessments;
