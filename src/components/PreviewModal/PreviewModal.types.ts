export interface PreviewModalProps {
  amountOfTokenA?: string;
  amountOfTokenB?: string;
  minPrice?: number;
  maxPrice?: number;
  feeTier: string;
  onClose: () => void;
}
