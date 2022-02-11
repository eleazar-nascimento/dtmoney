import React from 'react';
import logoImh from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenNewTransactionModal }) => {
  return (
    <Container>
      <Content>
      <img src={logoImh} alt="dt money" />
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>

      </Content>
    </Container>
  );
};

