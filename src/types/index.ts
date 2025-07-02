
export type RiskLevel = 'Low' | 'Moderate' | 'High';

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface InvestmentOption {
  id: string;
  name: string;
  ticker: string;
  type: 'Bitcoin' | 'Ethereum' | 'Altcoin' | 'DeFi' | 'Stablecoin' | 'Memecoin';
  description: string;
}

export interface PortfolioAllocation {
  riskLevel: RiskLevel;
  bitcoin: number;
  ethereum: number;
  altcoins: number;
  stablecoins: number;
  memecoins: number;
  description: string;
  diversificationTips: string[];
}
