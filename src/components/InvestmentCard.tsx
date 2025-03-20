
import React, { useState } from "react";
import { InvestmentOption } from "@/types";
import { cn } from "@/lib/utils";

interface InvestmentCardProps {
  investment: InvestmentOption;
  className?: string;
  delay?: number;
}

const InvestmentCard = ({ investment, className, delay = 0 }: InvestmentCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getBgColor = (type: string) => {
    switch (type) {
      case "Stocks":
        return "bg-stocks/10 border-stocks/20";
      case "Bonds":
        return "bg-bonds/10 border-bonds/20";
      case "Cash":
        return "bg-cash/10 border-cash/20";
      default:
        return "bg-muted border-muted";
    }
  };

  const getTextColor = (type: string) => {
    switch (type) {
      case "Stocks":
        return "text-stocks";
      case "Bonds":
        return "text-bonds";
      case "Cash":
        return "text-cash";
      default:
        return "text-foreground";
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl p-5 border transition-all duration-300",
        "opacity-0 animate-slideUp",
        getBgColor(investment.type),
        isHovered && "shadow-lg transform -translate-y-1",
        className
      )}
      style={{ animationDelay: `${delay}s`, animationFillMode: "forwards" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-3">
        <span className={cn("text-xs font-medium px-2 py-1 rounded-full", getBgColor(investment.type), getTextColor(investment.type))}>
          {investment.type}
        </span>
      </div>
      
      <h3 className="font-medium text-lg mb-1">{investment.name}</h3>
      <p className={cn("text-sm font-medium mb-3", getTextColor(investment.type))}>
        {investment.ticker}
      </p>
      
      <p className="text-sm text-muted-foreground">
        {investment.description}
      </p>
      
      <div className={cn(
        "absolute bottom-5 right-5 w-8 h-8 rounded-full flex items-center justify-center",
        "transform transition-transform duration-300",
        isHovered ? "scale-110" : "scale-100",
        getBgColor(investment.type)
      )}>
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
          className={getTextColor(investment.type)}
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default InvestmentCard;
