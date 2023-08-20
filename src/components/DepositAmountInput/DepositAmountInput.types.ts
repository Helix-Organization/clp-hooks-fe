export interface DepositAmountInputProps {
  token: string;
  value?: number;
  onChange: (value: number) => void;
  balance: number;
  dollarValue?: number;
}
