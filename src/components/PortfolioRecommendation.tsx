
import { useState, useEffect } from "react";
import { PortfolioAllocation, RiskLevel, InvestmentOption } from "@/types";
import { portfolioAllocations, investmentOptions } from "@/data/investments";
import AllocationChart from "./AllocationChart";
import InvestmentCard from "./InvestmentCard";
import Disclaimer from "./Disclaimer";
import SocialShare from "./SocialShare";
import { cn } from "@/lib/utils";

const getRiskLevelDisplayName = (riskLevel: RiskLevel): string => {
  const displayNames: Record<RiskLevel, string> = {
    UltraConservative: 'Ultra Conservador',
    VeryConservative: 'Muy Conservador', 
    Conservative: 'Conservador',
    ConservativeModerate: 'Conservador Moderado',
    BalancedModerate: 'Moderado Balanceado',
    GrowthModerate: 'Moderado de Crecimiento',
    AggressiveModerate: 'Moderado Agresivo',
    Aggressive: 'Agresivo',
    VeryAggressive: 'Muy Agresivo',
    UltraAggressive: 'Ultra Agresivo'
  };
  return displayNames[riskLevel];
};

interface PortfolioRecommendationProps {
  riskLevel: RiskLevel;
  onStartOver: () => void;
}

const PortfolioRecommendation = ({
  riskLevel,
  onStartOver,
}: PortfolioRecommendationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolio = portfolioAllocations[riskLevel];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const chartData = [
    { name: "Bitcoin", value: portfolio.bitcoin, color: "#4335A7" },
    { name: "Ethereum", value: portfolio.ethereum, color: "#80C4E9" },
    { name: "Altcoins", value: portfolio.altcoins, color: "#FFF6E9" },
    { name: "Stablecoins", value: portfolio.stablecoins, color: "#9B8ADB" },
    { name: "Memecoins", value: portfolio.memecoins, color: "#FF9E9E" },
  ].filter(item => item.value > 0);

  const getInvestmentsByType = (type: InvestmentOption["type"]) => {
    return investmentOptions
      .filter((option) => option.type === type)
      .slice(0, 3);
  };

  const bitcoinOptions = getInvestmentsByType("Bitcoin");
  const ethereumOptions = getInvestmentsByType("Ethereum");
  const stablecoinOptions = getInvestmentsByType("Stablecoin");

  return (
    <div
      className={cn(
        "max-w-4xl mx-auto transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <Disclaimer />
      
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          Tu Portafolio Personalizado
        </div>
        <h2 className="text-3xl font-semibold mb-3">
          Portafolio {getRiskLevelDisplayName(riskLevel)}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {portfolio.description}
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-8 shadow-sm mb-12">
        <h3 className="text-xl font-medium mb-6 text-center">
          Asignación de Activos Recomendada
        </h3>
        <AllocationChart data={chartData} />
        <SocialShare portfolioType={getRiskLevelDisplayName(riskLevel)} chartData={chartData} />
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-medium mb-6">Consejos de Diversificación</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.diversificationTips.map((tip, index) => (
            <div
              key={index}
              className="p-4 border border-border rounded-xl bg-card"
            >
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-primary/10 text-primary p-1 mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-foreground/80">{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-xl font-medium mb-6">Inversiones Recomendadas</h3>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4">Bitcoin ({portfolio.bitcoin}%)</h4>
          <div className="p-4 border border-border rounded-xl bg-card mb-4">
            <p className="text-foreground/80">
              <strong>Ticker:</strong> BTC
            </p>
            <p className="text-foreground/80 mt-1">
              <a href="https://www.coingecko.com/es/monedas/bitcoin" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline">
                Ver en CoinGecko
              </a>
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4">Ethereum ({portfolio.ethereum}%)</h4>
          <div className="p-4 border border-border rounded-xl bg-card mb-4">
            <p className="text-foreground/80">
              <strong>Ticker:</strong> ETH
            </p>
            <p className="text-foreground/80 mt-1">
              <a href="https://www.coingecko.com/es/monedas/ethereum" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-primary hover:underline">
                Ver en CoinGecko
              </a>
            </p>
          </div>
        </div>

        {portfolio.altcoins > 0 && (
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4">Altcoins ({portfolio.altcoins}%)</h4>
            <div className="p-4 border border-border rounded-xl bg-card mb-4">
              <p className="text-foreground/80">
                Categoría para criptomonedas alternativas de alto potencial, incluyendo proyectos DeFi
              </p>
            </div>
          </div>
        )}

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4">Stablecoins ({portfolio.stablecoins}%)</h4>
          <div className="space-y-3">
            <div className="p-4 border border-border rounded-xl bg-card">
              <p className="text-foreground/80">
                <strong>USDT (Tether):</strong>{" "}
                <a href="https://www.coingecko.com/es/monedas/tether" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Ver en CoinGecko
                </a>
              </p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-card">
              <p className="text-foreground/80">
                <strong>USDC (USD Coin):</strong>{" "}
                <a href="https://www.coingecko.com/es/monedas/usdc" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Ver en CoinGecko
                </a>
              </p>
            </div>
            <div className="p-4 border border-border rounded-xl bg-card">
              <p className="text-foreground/80">
                <strong>USDS (Sky Dollar):</strong>{" "}
                <a href="https://www.coingecko.com/es/monedas/usds" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-primary hover:underline">
                  Ver en CoinGecko
                </a>
              </p>
            </div>
          </div>
        </div>

        {portfolio.memecoins > 0 && (
          <div className="mb-8">
            <h4 className="text-lg font-medium mb-4">Memecoins ({portfolio.memecoins}%)</h4>
            <div className="p-4 border border-border rounded-xl bg-card mb-4">
              <p className="text-foreground/80">
                Categoría para tokens con comunidades activas basados en memes
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="text-center mb-8">
        <button
          onClick={onStartOver}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors shadow-sm"
        >
          Comenzar de Nuevo
        </button>
      </div>
    </div>
  );
};

export default PortfolioRecommendation;
