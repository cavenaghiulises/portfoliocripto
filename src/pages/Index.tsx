import { useState } from "react";
import { RiskLevel } from "@/types";
import RiskAssessment from "@/components/RiskAssessment";
import PortfolioRecommendation from "@/components/PortfolioRecommendation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Disclaimer from "@/components/Disclaimer";
import { cn } from "@/lib/utils";
const Index = () => {
  const [stage, setStage] = useState<"intro" | "assessment" | "result">("intro");
  const [riskLevel, setRiskLevel] = useState<RiskLevel | null>(null);
  const handleStartAssessment = () => {
    setStage("assessment");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handleAssessmentComplete = (level: RiskLevel) => {
    setRiskLevel(level);
    setStage("result");
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const handleStartOver = () => {
    setStage("intro");
    setRiskLevel(null);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {stage === "intro" && <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
            
            
            <section className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight animate-fadeIn" style={{
            animationDelay: "0.1s"
          }}>Diseñá tu
Portafolio de Inversión Cripto</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fadeIn" style={{
            animationDelay: "0.2s"
          }}>
                Respondé algunas preguntas sobre tus objetivos de inversión y tolerancia al riesgo,
                y crearemos una recomendación de portafolio personalizada.
              </p>
              <button onClick={handleStartAssessment} style={{
            animationDelay: "0.3s"
          }} className="px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 animate-fadeIn bg-blue-600 hover:bg-blue-500 text-slate-50 text-lg">
                Comenzar
              </button>
            </section>
            
            <section className="mb-24">
              <div className="text-center mb-16 py-0">
                <h2 className="text-3xl font-semibold mb-4">Cómo Funciona</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Mediante asistencia por IA, la app crea recomendaciones personalizadas
basadas en tu situación única.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[{
              title: "Respondé Preguntas",
              description: "Completá el cuestionario de evaluación de riesgo para entender tus objetivos de inversión y tolerancia al riesgo.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
            }, {
              title: "Obtené Recomendaciones",
              description: "Recibí una asignación de portafolio personalizada con sugerencias de inversión específicas adaptadas a tu perfil.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M21 8v13H3V8" />
                        <path d="M1 3h22v5H1z" />
                        <path d="M10 12h4" />
                      </svg>
            }, {
              title: "Acción!",
              description: "Implementá tu estrategia de portafolio personalizada si te parece adecuada, sabiendo que está alineada con tus objetivos financieros.",
              icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                        <path d="M12 2v20" />
                        <path d="m17 5-5-3-5 3" />
                        <path d="M17 19v-8" />
                        <path d="M7 19v-3" />
                        <path d="M7 8v3" />
                        <path d="M17 8v3" />
                      </svg>
            }].map((item, index) => <div key={index} className={cn("flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border shadow-sm", "opacity-0 animate-slideUp")} style={{
              animationDelay: `${0.2 + index * 0.1}s`,
              animationFillMode: "forwards"
            }}>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>)}
              </div>
            </section>
            
            <section className="max-w-3xl mx-auto mb-24">
              <div className="text-center mb-10">
                
                
              </div>
              
              
            </section>
            
            <section className="max-w-2xl mx-auto text-center">
              <div className={cn("p-8 md:p-12 rounded-2xl bg-foreground/5 border border-border/30", "opacity-0 animate-fadeIn")} style={{
            animationDelay: "0.4s",
            animationFillMode: "forwards"
          }}>
                <h2 className="text-2xl font-semibold mb-4">¿Listo para diseñar tu portfolio de inversión cripto?</h2>
                <p className="text-muted-foreground mb-6">Empezá a construir tu portafolio de inversión hoy!</p>
                <button onClick={handleStartAssessment} className="px-6 py-3 rounded-full transition-colors shadow-sm text-lg text-slate-50 bg-blue-600 hover:bg-blue-500">
                  Iniciar Evaluación de Riesgo
                </button>
              </div>
            </section>
            
            <div className="max-w-4xl mx-auto mt-16">
              <Disclaimer />
            </div>
          </div>}
        
        {stage === "assessment" && <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-3">Evaluación de Riesgo</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Respondé las siguientes preguntas para ayudarnos a determinar tu tolerancia al riesgo de inversión.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-sm">
              <RiskAssessment onComplete={handleAssessmentComplete} />
            </div>
          </div>}
        
        {stage === "result" && riskLevel && <div className="max-w-6xl mx-auto px-6 py-16">
            <PortfolioRecommendation riskLevel={riskLevel} onStartOver={handleStartOver} />
          </div>}
      </main>
      
      <Footer />
    </div>;
};
export default Index;