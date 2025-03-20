
import { useState, useEffect } from "react";
import { PortfolioAllocation, RiskLevel, InvestmentOption } from "@/types";
import { portfolioAllocations, investmentOptions } from "@/data/investments";
import AllocationChart from "./AllocationChart";
import InvestmentCard from "./InvestmentCard";
import { cn } from "@/lib/utils";

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
    { name: "Acciones", value: portfolio.stocks, color: "#34C759" },
    { name: "Bonos", value: portfolio.bonds, color: "#5E5CE6" },
    { name: "Efectivo", value: portfolio.cash, color: "#FF9500" },
  ];

  const getInvestmentsByType = (type: InvestmentOption["type"]) => {
    return investmentOptions
      .filter((option) => option.type === type)
      .slice(0, 3);
  };

  const stockOptions = getInvestmentsByType("Stocks");
  const bondOptions = getInvestmentsByType("Bonds");
  const cashOptions = getInvestmentsByType("Cash");

  return (
    <div
      className={cn(
        "max-w-4xl mx-auto transition-opacity duration-1000",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          Tu Portafolio Personalizado
        </div>
        <h2 className="text-3xl font-semibold mb-3">
          Portafolio de Riesgo {riskLevel === 'Low' ? 'Bajo' : riskLevel === 'Moderate' ? 'Moderado' : 'Alto'}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {portfolio.description}
        </p>
      </div>

      <div className="bg-white/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-sm mb-12">
        <h3 className="text-xl font-medium mb-6 text-center">
          Asignación de Activos Recomendada
        </h3>
        <AllocationChart data={chartData} />
      </div>

      <div className="mb-12">
        <h3 className="text-xl font-medium mb-6">Consejos de Diversificación</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.diversificationTips.map((tip, index) => (
            <div
              key={index}
              className="p-4 border border-border/50 rounded-xl bg-white/50 backdrop-blur-sm"
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
          <h4 className="text-lg font-medium mb-4">Acciones ({portfolio.stocks}%)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stockOptions.map((option, index) => (
              <InvestmentCard
                key={option.id}
                investment={option}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-4">Bonos ({portfolio.bonds}%)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bondOptions.map((option, index) => (
              <InvestmentCard
                key={option.id}
                investment={option}
                delay={0.1 * (index + 3)}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Efectivo ({portfolio.cash}%)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cashOptions.map((option, index) => (
              <InvestmentCard
                key={option.id}
                investment={option}
                delay={0.1 * (index + 6)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mb-8">
        <button
          onClick={onStartOver}
          className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-sm"
        >
          Comenzar de Nuevo
        </button>
      </div>
    </div>
  );
};

export default PortfolioRecommendation;
