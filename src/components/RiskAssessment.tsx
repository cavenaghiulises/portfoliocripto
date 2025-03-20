
import { useState } from "react";
import { riskAssessmentQuestions, calculateRiskLevel } from "@/data/investments";
import { cn } from "@/lib/utils";
import { RiskLevel } from "@/types";

interface RiskAssessmentProps {
  onComplete: (riskLevel: RiskLevel) => void;
}

const RiskAssessment = ({ onComplete }: RiskAssessmentProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [animationDirection, setAnimationDirection] = useState<"next" | "prev">("next");

  const currentQuestion = riskAssessmentQuestions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === riskAssessmentQuestions.length - 1;
  const progress = ((currentQuestionIndex + 1) / riskAssessmentQuestions.length) * 100;

  const handleOptionSelect = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = score;
    setAnswers(newAnswers);

    if (isLastQuestion) {
      const totalScore = newAnswers.reduce((sum, score) => sum + score, 0);
      const riskLevel = calculateRiskLevel(totalScore);
      onComplete(riskLevel);
    } else {
      setAnimationDirection("next");
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (!isFirstQuestion) {
      setAnimationDirection("prev");
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
      }, 300);
    }
  };

  const getSlideAnimation = () => {
    if (animationDirection === "next") {
      return "animate-slideUp";
    }
    return "animate-slideUp";
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-right text-sm text-muted-foreground">
          Pregunta {currentQuestionIndex + 1} de {riskAssessmentQuestions.length}
        </div>
      </div>

      <div
        key={currentQuestionIndex}
        className={cn("space-y-8", getSlideAnimation())}
      >
        <h2 className="text-2xl font-medium">{currentQuestion.text}</h2>

        <div className="space-y-3">
          {currentQuestion.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              className={cn(
                "w-full p-4 text-left rounded-xl border border-border/60 transition-all duration-200",
                "hover:border-primary/50 hover:bg-primary/5",
                answers[currentQuestionIndex] === option.score &&
                  "border-primary bg-primary/5"
              )}
              onClick={() => handleOptionSelect(option.score)}
            >
              <span className="text-foreground">{option.text}</span>
            </button>
          ))}
        </div>

        <div className="pt-4 flex justify-between">
          {!isFirstQuestion && (
            <button
              onClick={handlePrevious}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Anterior
            </button>
          )}
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RiskAssessment;
