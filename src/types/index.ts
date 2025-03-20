
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
  type: 'Stocks' | 'Bonds' | 'Cash' | 'Crypto';
  description: string;
}

export interface PortfolioAllocation {
  riskLevel: RiskLevel;
  stocks: number;
  bonds: number;
  cash: number;
  crypto: number;
  description: string;
  diversificationTips: string[];
}
