
import { InvestmentOption, PortfolioAllocation, Question } from "@/types";

export const riskAssessmentQuestions: Question[] = [
  {
    id: 1,
    text: "How long do you plan to invest before needing the money?",
    options: [
      { text: "Less than 3 years", score: 1 },
      { text: "3-5 years", score: 2 },
      { text: "5-10 years", score: 3 },
      { text: "More than 10 years", score: 4 },
    ],
  },
  {
    id: 2,
    text: "If your investment lost 20% of its value in a month, what would you do?",
    options: [
      { text: "Sell everything to prevent further losses", score: 1 },
      { text: "Sell some investments to reduce risk", score: 2 },
      { text: "Do nothing and wait for recovery", score: 3 },
      { text: "Buy more while prices are lower", score: 4 },
    ],
  },
  {
    id: 3,
    text: "Which best describes your investment knowledge?",
    options: [
      { text: "I'm new to investing", score: 1 },
      { text: "I understand the basics", score: 2 },
      { text: "I'm comfortable with various investment strategies", score: 3 },
      { text: "I have extensive investment experience", score: 4 },
    ],
  },
  {
    id: 4,
    text: "What is your primary investment goal?",
    options: [
      { text: "Preserving capital", score: 1 },
      { text: "Generating income", score: 2 },
      { text: "Balanced growth and income", score: 3 },
      { text: "Maximizing long-term growth", score: 4 },
    ],
  },
  {
    id: 5,
    text: "How much fluctuation in your investment value can you tolerate?",
    options: [
      { text: "Minimal fluctuations", score: 1 },
      { text: "Small fluctuations", score: 2 },
      { text: "Moderate fluctuations", score: 3 },
      { text: "Large fluctuations for potential higher returns", score: 4 },
    ],
  },
];

export const calculateRiskLevel = (score: number): 'Low' | 'Moderate' | 'High' => {
  if (score <= 10) return 'Low';
  if (score <= 15) return 'Moderate';
  return 'High';
};

export const portfolioAllocations: Record<string, PortfolioAllocation> = {
  Low: {
    riskLevel: 'Low',
    stocks: 20,
    bonds: 60,
    cash: 20,
    description: "This conservative portfolio prioritizes capital preservation and income over growth. It's designed for investors with a shorter time horizon or lower risk tolerance.",
    diversificationTips: [
      "Consider high-quality, dividend-paying stocks for the equity portion",
      "Focus on short to intermediate-term high-grade bonds",
      "Maintain adequate cash reserves for emergencies and opportunities",
      "Geographic diversification can help reduce country-specific risks"
    ]
  },
  Moderate: {
    riskLevel: 'Moderate',
    stocks: 60,
    bonds: 30,
    cash: 10,
    description: "This balanced portfolio aims to provide growth and income with moderate risk. It suits investors with medium-term horizons who can tolerate some market fluctuations.",
    diversificationTips: [
      "Diversify across large, mid, and small-cap stocks",
      "Consider adding international exposure through developed markets",
      "Include both government and corporate bonds for fixed income diversity",
      "Rebalance annually to maintain target allocations"
    ]
  },
  High: {
    riskLevel: 'High',
    stocks: 80,
    bonds: 15,
    cash: 5,
    description: "This growth-oriented portfolio maximizes long-term appreciation potential. It's suitable for investors with longer time horizons who can withstand significant market volatility.",
    diversificationTips: [
      "Include exposure to emerging markets for higher growth potential",
      "Consider sector diversification across technology, healthcare, and other growth areas",
      "Add small allocations to alternative investments like REITs",
      "Maintain disciplined investing during market downturns to benefit from lower prices"
    ]
  }
};

export const investmentOptions: InvestmentOption[] = [
  // Stocks
  {
    id: "stock-1",
    name: "Vanguard Total Stock Market ETF",
    ticker: "VTI",
    type: "Stocks",
    description: "Provides broad exposure to the entire U.S. equity market, including small, mid, and large-cap growth and value stocks."
  },
  {
    id: "stock-2",
    name: "iShares Core S&P 500 ETF",
    ticker: "IVV",
    type: "Stocks",
    description: "Tracks the S&P 500 Index, offering exposure to 500 large U.S. companies representing approximately 80% of the U.S. market capitalization."
  },
  {
    id: "stock-3",
    name: "Vanguard FTSE Developed Markets ETF",
    ticker: "VEA",
    type: "Stocks",
    description: "Provides exposure to established international markets outside the U.S., including developed markets in Europe, Australia, Asia, and the Far East."
  },
  {
    id: "stock-4",
    name: "Schwab U.S. Dividend Equity ETF",
    ticker: "SCHD",
    type: "Stocks",
    description: "Focuses on high-quality, dividend-paying U.S. stocks with a record of consistently raising their dividends."
  },
  {
    id: "stock-5",
    name: "Vanguard Growth ETF",
    ticker: "VUG",
    type: "Stocks",
    description: "Invests in large U.S. companies that are expected to grow faster than the market average."
  },
  
  // Bonds
  {
    id: "bond-1",
    name: "Vanguard Total Bond Market ETF",
    ticker: "BND",
    type: "Bonds",
    description: "Provides broad exposure to U.S. investment-grade bonds with a focus on treasuries, corporate bonds, and mortgage-backed securities."
  },
  {
    id: "bond-2",
    name: "iShares Core U.S. Aggregate Bond ETF",
    ticker: "AGG",
    type: "Bonds",
    description: "Tracks the Bloomberg U.S. Aggregate Bond Index, representing the U.S. investment-grade bond market."
  },
  {
    id: "bond-3",
    name: "Vanguard Short-Term Bond ETF",
    ticker: "BSV",
    type: "Bonds",
    description: "Invests in U.S. government and corporate bonds with maturities between 1-5 years, offering lower interest rate risk than longer-term bonds."
  },
  {
    id: "bond-4",
    name: "iShares TIPS Bond ETF",
    ticker: "TIP",
    type: "Bonds",
    description: "Invests in Treasury Inflation-Protected Securities (TIPS), which provide protection against inflation."
  },
  {
    id: "bond-5",
    name: "Vanguard Intermediate-Term Corporate Bond ETF",
    ticker: "VCIT",
    type: "Bonds",
    description: "Focuses on investment-grade corporate bonds with maturities between 5-10 years."
  },
  
  // Cash/Money Market
  {
    id: "cash-1",
    name: "Vanguard Federal Money Market Fund",
    ticker: "VMFXX",
    type: "Cash",
    description: "Invests in short-term U.S. government securities and repurchase agreements, offering stability and liquidity."
  },
  {
    id: "cash-2",
    name: "SPDR Bloomberg 1-3 Month T-Bill ETF",
    ticker: "BIL",
    type: "Cash",
    description: "Invests in U.S. Treasury Bills with maturities between 1-3 months, offering extremely low risk and high liquidity."
  },
  {
    id: "cash-3",
    name: "JPMorgan Ultra-Short Income ETF",
    ticker: "JPST",
    type: "Cash",
    description: "Invests in a diversified portfolio of short-term, investment-grade fixed income securities, aiming for higher yield than money market funds."
  },
  {
    id: "cash-4",
    name: "Vanguard Short-Term Treasury ETF",
    ticker: "VGSH",
    type: "Cash",
    description: "Provides exposure to short-term U.S. Treasury bonds with maturities between 1-3 years."
  },
  {
    id: "cash-5",
    name: "Fidelity® Government Money Market Fund",
    ticker: "SPAXX",
    type: "Cash",
    description: "Invests in cash, U.S. government securities and repurchase agreements that are collateralized fully by cash or government securities."
  }
];
