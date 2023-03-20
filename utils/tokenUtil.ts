

export default function getTokenPriceChange(openPrice: number, closePrice: number): number {
  return ((closePrice - openPrice) / openPrice) * 100;
}