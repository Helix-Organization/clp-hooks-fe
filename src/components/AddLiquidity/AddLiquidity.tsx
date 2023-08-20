"use client";

import BackArrow from "@/assets/svgs/back-arrow.svg";
import DownArrow from "@/assets/svgs/down-arrow.svg";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import * as S from "./AddLiquidity.styled";

import { Button, Slider } from "antd";
import Link from "next/link";
import { useState } from "react";
import { DepositAmountInput } from "../DepositAmountInput";
import { SelectTokenModal } from "../SelectTokenModal";

const AddLiquidity = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const tokenA = params.token as string;
  const tokenB = searchParams.get("t") as string;
  const router = useRouter();

  const [amountOfTokenA, setAmountOfTokenA] = useState<number>();
  const [amountOfTokenB, setAmountOfTokenB] = useState<number>();
  const [isOpenSelectTokenAModal, setIsOpenSelectTokenAModal] = useState(false);
  const [isOpenSelectTokenBModal, setIsOpenSelectTokenBModal] = useState(false);

  const handleTokenASelect = (token: string) => {
    router.push(`/add/${token}${tokenB ? `?t=${tokenB}` : ""}`);
  };

  const handleTokenBSelect = (token: string) => {
    router.push(`/add/${tokenA}?t=${token}`);
  };

  console.log(amountOfTokenA, amountOfTokenB);

  return (
    <>
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
              <S.TokenButton onClick={() => setIsOpenSelectTokenAModal(true)}>
                {tokenA}
                <DownArrow className="arrow" />
              </S.TokenButton>
              <S.TokenButton onClick={() => setIsOpenSelectTokenBModal(true)}>
                {tokenB}
                <DownArrow className="arrow" />
              </S.TokenButton>
            </S.TokenButtonWrapper>
            <S.FeeTier>
              <span>1% fee tier</span>
            </S.FeeTier>

            <S.SubTitle>Deposit Amounts</S.SubTitle>

            <S.DepositAmountInputWrapper>
              <DepositAmountInput
                value={amountOfTokenA}
                token={tokenA}
                balance={0}
                dollarValue={12.5}
                onChange={(value) => setAmountOfTokenA(value)}
              />
              <DepositAmountInput
                value={amountOfTokenB}
                token={tokenB}
                balance={0}
                dollarValue={12.5}
                onChange={(value) => setAmountOfTokenB(value)}
              />
            </S.DepositAmountInputWrapper>
          </S.ContentsItem>
          <S.ContentsItem>
            <S.SubTitle>Set Price Range</S.SubTitle>

            <Slider range defaultValue={[0, 1]} min={0} max={1} step={0.01} />
            <Button
              type="primary"
              disabled={!amountOfTokenA || !amountOfTokenB}
            >
              {!amountOfTokenA || !amountOfTokenB
                ? "Enter an Amounts"
                : "Preview"}
            </Button>
          </S.ContentsItem>
        </S.Contents>
      </S.AddLiquidity>
      {isOpenSelectTokenAModal && (
        <SelectTokenModal
          onSelect={handleTokenASelect}
          tokens={[]}
          onClose={() => setIsOpenSelectTokenAModal(false)}
        />
      )}
      {isOpenSelectTokenBModal && (
        <SelectTokenModal
          onSelect={handleTokenBSelect}
          tokens={[]}
          onClose={() => setIsOpenSelectTokenBModal(false)}
        />
      )}
    </>
  );
};

export default AddLiquidity;
