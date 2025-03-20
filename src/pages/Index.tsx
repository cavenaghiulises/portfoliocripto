
import { useState } from "react";
import { RiskLevel } from "@/types";
import RiskAssessment from "@/components/RiskAssessment";
import PortfolioRecommendation from "@/components/PortfolioRecommendation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const Index = () => {
  const [stage, setStage] = useState<"intro" | "assessment" | "result">("intro");
  const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null);

  const handleStartAssessment = () => {
    setStage("assessment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAssessmentComplete = (level: RiskLevel) => {
    setRiskLevel(level);
    setStage("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartOver = () => {
    setStage("intro");
    setRiskLevel(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header />
      
      <main className="pt-20">
        {stage === "intro" && (
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            <section className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 animate-fadeIn">
                Investment Portfolio Advisor
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight animate-fadeIn" style={{ animationDelay: "0.1s" }}>
                Design Your Perfect Investment Portfolio
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                Answer a few questions about your investment goals and risk tolerance,
                and we'll create a personalized portfolio recommendation.
              </p>
              <button
                onClick={handleStartAssessment}
                className="px-8 py-4 bg-primary text-white rounded-full shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: "0.3s" }}
              >
                Get Started
              </button>
            </section>
            
            <section className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our intelligent portfolio advisor creates personalized recommendations based on your unique situation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Answer Questions",
                    description: "Complete our risk assessment questionnaire to help us understand your investment goals and risk tolerance.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                    )
                  },
                  {
                    title: "Get Recommendations",
                    description: "Receive a personalized portfolio allocation with specific investment suggestions tailored to your profile.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 8v13H3V8" />
                        <path d="M1 3h22v5H1z" />
                        <path d="M10 12h4" />
                      </svg>
                    )
                  },
                  {
                    title: "Build Your Future",
                    description: "Implement your personalized portfolio strategy with confidence, knowing it's aligned with your financial goals.",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M12 2v20" />
                        <path d="m17 5-5-3-5 3" />
                        <path d="M17 19v-8" />
                        <path d="M7 19v-3" />
                        <path d="M7 8v3" />
                        <path d="M17 8v3" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-border/30 shadow-sm",
                      "opacity-0 animate-slideUp"
                    )}
                    style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="max-w-3xl mx-auto mb-24">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold mb-4">Why Choose Us</h2>
                <p className="text-muted-foreground">
                  We provide expert guidance to help you make informed investment decisions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Personalized Recommendations",
                    description: "Get portfolio recommendations tailored to your unique financial situation and goals."
                  },
                  {
                    title: "Diversification Strategy",
                    description: "Learn how to properly diversify your investments to reduce risk while maintaining growth potential."
                  },
                  {
                    title: "Cost-Efficient Options",
                    description: "We recommend low-cost investment options to maximize your returns over time."
                  },
                  {
                    title: "Evidence-Based Approach",
                    description: "Our recommendations are based on academic research and financial best practices."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "p-5 border border-border/50 rounded-xl bg-white/50 backdrop-blur-sm",
                      "opacity-0 animate-slideUp"
                    )}
                    style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
                  >
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section id="contact" className="max-w-2xl mx-auto text-center">
              <div
                className={cn(
                  "p-8 md:p-12 rounded-2xl bg-foreground/5 border border-border/30",
                  "opacity-0 animate-fadeIn"
                )}
                style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
              >
                <h2 className="text-2xl font-semibold mb-4">Ready to Start Investing?</h2>
                <p className="text-muted-foreground mb-6">
                  Take the first step toward building your investment portfolio today.
                </p>
                <button
                  onClick={handleStartAssessment}
                  className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-sm"
                >
                  Start Risk Assessment
                </button>
              </div>
            </section>
          </div>
        )}
        
        {stage === "assessment" && (
          <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-3">Risk Assessment</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Answer the following questions to help us determine your investment risk tolerance.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-border/30 shadow-sm">
              <RiskAssessment onComplete={handleAssessmentComplete} />
            </div>
          </div>
        )}
        
        {stage === "result" && riskLevel && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <PortfolioRecommendation
              riskLevel={riskLevel}
              onStartOver={handleStartOver}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
