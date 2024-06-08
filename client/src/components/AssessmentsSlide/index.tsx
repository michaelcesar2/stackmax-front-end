'use client';

import { useState, useEffect } from 'react';
import * as S from './styles';
import Image from 'next/image';
import { Variants, motion, AnimatePresence } from 'framer-motion';

const assessmentsData = [
  {
    text: 'Excelente trabalho com muito profissionalismo e um suporte maravilhoso! As páginas de vendas ficaram lindas e gerando muitas vendas.',
    clientImage: '/images/clients/hb_floricultura.webp',
    clientName: 'Arthur Campello',
    clientTitle: 'HB Floricultura',
  },
  {
    text: 'Excelente trabalho com muito profissionalismo e um suporte maravilhoso! As páginas de vendas ficaram lindas e gerando muitas vendas.',
    clientImage: '/images/clients/luis.webp',
    clientName: 'Luis Henrique',
    clientTitle: 'Spazio',
  },
  {
    text: 'Excelente trabalho com muito profissionalismo e um suporte maravilhoso! As páginas de vendas ficaram lindas e gerando muitas vendas.',
    clientImage: '/images/clients/monaliza_albuquerque.webp',
    clientName: 'Monaliza Albuquerque',
    clientTitle: 'Studio Monaliza A.',
  },
  {
    text: 'Excelente trabalho com muito profissionalismo e um suporte maravilhoso! As páginas de vendas ficaram lindas e gerando muitas vendas.',
    clientImage: '/images/clients/lira.webp',
    clientName: 'Pablo Lira',
    clientTitle: 'MRTS Mídia Digital',
  },
  {
    text: 'Excelente trabalho com muito profissionalismo e um suporte maravilhoso! As páginas de vendas ficaram lindas e gerando muitas vendas.',
    clientImage: '/images/clients/jailson.webp',
    clientName: 'Jailson',
    clientTitle: 'Construtora J. Queiroz',
  },
  {
    text: 'Excelente trabalho com muito profissionalismo e um suporte maravilhoso! As páginas de vendas ficaram lindas e gerando muitas vendas.',
    clientImage: '/images/clients/erick.webp',
    clientName: 'Erick Queiroz',
    clientTitle: 'Estudantiario',
  },
];

const AssessmentsSlide = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handlePrevClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const lastIndex = assessmentsData.length - 1;
      if (startIndex === 0) {
        setDirection(-1);
        setStartIndex(lastIndex);
      } else {
        setDirection(-1);
        setStartIndex(startIndex - 1);
      }
    }
  };

  const handleNextClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      const lastIndex = assessmentsData.length - 1;
      if (startIndex === lastIndex) {
        setDirection(1);
        setStartIndex(0);
      } else {
        setDirection(1);
        setStartIndex(startIndex + 1);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [startIndex]);

  const variants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '32%' : '-32%',
      opacity: 1,
      position: 'absolute',
    }),
    center: {
      x: 0,
      opacity: 1,
      position: 'relative',
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '32%' : '-32%',
      opacity: 0,
      position: 'absolute',
    }),
  };

  return (
    <S.AssessmentsSlide>
      <S.Wrapper>
        <S.WrapperBox>
          <div
            style={{
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={startIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  width: '100%',
                  gap: '8px',
                  justifyContent: 'space-between',
                }}
              >
                {assessmentsData
                  .map(
                    (_, index) => (index + startIndex) % assessmentsData.length,
                  )
                  .slice(0, 3)
                  .map((index) => (
                    <S.Block key={index} style={{ flex: '0 0 32%' }}>
                      <S.StarsWrapper>
                        {Array.from({ length: 6 }).map((_, starIndex) => (
                          <Image
                            key={starIndex}
                            src="/images/star.webp"
                            width={18}
                            height={18}
                            alt="Avaliações em estrelas"
                          />
                        ))}
                      </S.StarsWrapper>

                      <S.Text>{assessmentsData[index].text}</S.Text>
                      <S.WrapperClient>
                        <Image
                          src={assessmentsData[index].clientImage}
                          alt={`${assessmentsData[index].clientName} imagem`}
                          width={60}
                          height={60}
                        />
                        <S.WrapperText>
                          <S.Title>{assessmentsData[index].clientName}</S.Title>
                          <S.SecondaryTitle>
                            {assessmentsData[index].clientTitle}
                          </S.SecondaryTitle>
                        </S.WrapperText>
                      </S.WrapperClient>
                    </S.Block>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </S.WrapperBox>

        <S.WrapperBlocks>
          <div onClick={handlePrevClick} style={{ cursor: 'pointer' }}>
            <Image
              src="/images/left.webp"
              alt="Seta para a esquerda"
              width={24}
              height={24}
            />
          </div>
          <div
            onClick={handleNextClick}
            style={{
              cursor: 'pointer',
            }}
          >
            <Image
              src="/images/right.webp"
              alt="Seta para a direita"
              width={24}
              height={24}
            />
          </div>
        </S.WrapperBlocks>
      </S.Wrapper>
    </S.AssessmentsSlide>
  );
};

export default AssessmentsSlide;
