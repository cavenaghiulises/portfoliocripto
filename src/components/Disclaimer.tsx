import { AlertTriangle } from "lucide-react";
const Disclaimer = () => {
  return <div className="border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3 bg-red-200">
      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
      <div className="text-sm text-yellow-800">
        <p className="font-medium mb-1">Aviso Importante:</p>
        <p>
          La información presentada en esta plataforma NO constituye una recomendación de inversión. 
          Todas las decisiones de inversión son responsabilidad exclusiva del usuario. 
          Cualquier pérdida parcial o total de la inversión es 100% responsabilidad del usuario. 
          Siempre consulte con un asesor financiero profesional antes de tomar decisiones de inversión.
        </p>
      </div>
    </div>;
};
export default Disclaimer;