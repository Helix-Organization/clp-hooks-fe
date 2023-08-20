"use client";

import BackArrow from "@/assets/svgs/back-arrow.svg";
import DownArrow from "@/assets/svgs/down-arrow.svg";
import { useParams } from "next/navigation";
import * as S from "./AddLiquidity.styled";

import { Button, Slider } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DepositAmountInput } from "../DepositAmountInput";

const AddLiquidity = () => {
  const params = useParams();
  const [tokenAValue, setTokenAValue] = useState();
  const [tokenBValue, setTokenBValue] = useState();

  const token = params.token as string;

  return (
    <S.AddLiquidity>
      <S.Header>
        <S.HeaderItem>
          <Link href="/">
            <BackArrow />
          </Link>
        </S.HeaderItem>
        <S.HeaderItem>
          <h1>Add Liquidity</h1>
        </S.HeaderItem>
        <S.HeaderItem />
      </S.Header>

      <S.Contents>
        <S.ContentsItem>
          <S.SubTitle>Select Pair</S.SubTitle>
          <S.TokenButtonWrapper>
            <S.TokenButton>
              {token}
              <DownArrow className="arrow" />
            </S.TokenButton>
            <S.TokenButton>
              {token}
              <DownArrow className="arrow" />
            </S.TokenButton>
          </S.TokenButtonWrapper>
          <S.FeeTier>
            <span>1% fee tier</span>
          </S.FeeTier>

          <S.SubTitle>Deposit Amounts</S.SubTitle>

          <S.DepositAmountInputWrapper>
            <DepositAmountInput
              value={tokenAValue}
              token={token}
              balance={0}
              dollarValue={12.5}
              onChange={(value) => console.log(value)}
            />
            <DepositAmountInput
              value={tokenBValue}
              token={token}
              balance={0}
              dollarValue={12.5}
              onChange={(value) => console.log(value)}
            />
          </S.DepositAmountInputWrapper>
        </S.ContentsItem>
        <S.ContentsItem>
          <S.SubTitle>Set Price Range</S.SubTitle>

          <Slider range defaultValue={[0, 1]} min={0} max={1} step={0.01} />
          <Button type="primary">Preview</Button>
        </S.ContentsItem>
      </S.Contents>
    </S.AddLiquidity>
  );
};

export default AddLiquidity;
