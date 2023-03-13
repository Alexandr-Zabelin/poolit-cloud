import React, { FC, useCallback, useState } from 'react';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

import { CardList, OnCardClickArg } from '@components/CardList';
import { colors } from '@src/styled-config';

import { CardListSectionProps } from './types';
import { FileCard } from './FileCard';
import { CloseButtonContainer, ModalBody } from './styled';

export const CardListSection: FC<CardListSectionProps> = ({ listData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState<OnCardClickArg | null>(null);

  const onCardClick = useCallback(
    (card: OnCardClickArg) => {
      setCurrentCard(card);
      setIsOpen(true);
    },
    [setCurrentCard, setIsOpen],
  );

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      {isOpen && currentCard && (
        <Modal open={isOpen} onClose={onClose}>
          <ModalBody>
            <CloseButtonContainer>
              <IconButton onClick={onClose}>
                <CloseIcon htmlColor={colors.bgPrimary} fontSize="large" />
              </IconButton>
            </CloseButtonContainer>
            <FileCard data={currentCard.data} />
          </ModalBody>
        </Modal>
      )}
      <CardList data={listData} onCardClick={onCardClick} />
    </>
  );
};
