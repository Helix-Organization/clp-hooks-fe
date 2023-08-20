"use client";

import { WalletConnect } from "@/components/WalletConnect";
import * as S from "./Header.styled";
import { HeaderProps } from "./Header.types";

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <S.IconWrapper>🖤</S.IconWrapper>
        <WalletConnect />
      </S.Nav>
    </S.Header>
  );
};

export default Header;
