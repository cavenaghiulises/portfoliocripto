
import { InvestmentOption, PortfolioAllocation, Question } from "@/types";

export const riskAssessmentQuestions: Question[] = [
  {
    id: 1,
    text: "¿Por cuánto tiempo planeas invertir antes de necesitar el dinero?",
    options: [
      { text: "De 3 a 6 meses", score: 1 },
      { text: "De 6 meses a 1 año", score: 2 },
      { text: "De 1 a 5 años", score: 3 },
      { text: "Más de 5 años", score: 4 },
    ],
  },
  {
    id: 2,
    text: "Si tu inversión perdiera el 20% de su valor en un mes, ¿qué harías?",
    options: [
      { text: "Vender todo para evitar más pérdidas", score: 1 },
      { text: "Vender algunas inversiones para reducir el riesgo", score: 2 },
      { text: "No hacer nada y esperar la recuperación", score: 3 },
      { text: "Comprar más mientras los precios están bajos", score: 4 },
    ],
  },
  {
    id: 3,
    text: "¿Qué opción describe mejor tu conocimiento sobre inversiones?",
    options: [
      { text: "Soy nuevo en inversiones", score: 1 },
      { text: "Entiendo los conceptos básicos", score: 2 },
      { text: "Me siento cómodo con varias estrategias de inversión", score: 3 },
      { text: "Tengo amplia experiencia en inversiones", score: 4 },
    ],
  },
  {
    id: 4,
    text: "¿Cuál es tu principal objetivo de inversión?",
    options: [
      { text: "Preservar el capital", score: 1 },
      { text: "Generar ingresos", score: 2 },
      { text: "Equilibrio entre crecimiento e ingresos", score: 3 },
      { text: "Maximizar el crecimiento a largo plazo", score: 4 },
    ],
  },
  {
    id: 5,
    text: "¿Cuánta fluctuación en el valor de tu inversión podés tolerar?",
    options: [
      { text: "Fluctuaciones mínimas", score: 1 },
      { text: "Pequeñas fluctuaciones", score: 2 },
      { text: "Fluctuaciones moderadas", score: 3 },
      { text: "Grandes fluctuaciones para potenciales rendimientos mayores", score: 4 },
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
    bonds: 50,
    cash: 20,
    crypto: 10,
    description: "Este portafolio conservador prioriza la preservación del capital y los ingresos sobre el crecimiento. Está diseñado para inversores con un horizonte temporal más corto o una menor tolerancia al riesgo.",
    diversificationTips: [
      "Considerá acciones de alta calidad y que paguen dividendos para la porción de renta variable",
      "Enfocate en bonos de alta calidad a corto y mediano plazo",
      "Mantené reservas adecuadas de efectivo para emergencias y oportunidades",
      "La diversificación geográfica puede ayudar a reducir riesgos específicos de cada país",
      "Limitá la exposición a criptomonedas a las de mayor capitalización de mercado"
    ]
  },
  Moderate: {
    riskLevel: 'Moderate',
    stocks: 50,
    bonds: 25,
    cash: 10,
    crypto: 15,
    description: "Este portafolio balanceado busca proporcionar crecimiento e ingresos con un riesgo moderado. Es adecuado para inversores con horizontes a mediano plazo que pueden tolerar algunas fluctuaciones del mercado.",
    diversificationTips: [
      "Diversificá entre acciones de grande, mediana y pequeña capitalización",
      "Considerá añadir exposición internacional a través de mercados desarrollados",
      "Incluí bonos tanto gubernamentales como corporativos para diversificar la renta fija",
      "Reequilibrá anualmente para mantener las asignaciones objetivo",
      "Explorá diferentes sectores de criptomonedas como DeFi, NFTs y blockchains de capa 1"
    ]
  },
  High: {
    riskLevel: 'High',
    stocks: 60,
    bonds: 10,
    cash: 5,
    crypto: 25,
    description: "Este portafolio orientado al crecimiento maximiza el potencial de apreciación a largo plazo. Es adecuado para inversores con horizontes temporales más largos que pueden soportar una volatilidad significativa del mercado.",
    diversificationTips: [
      "Incluí exposición a mercados emergentes para un mayor potencial de crecimiento",
      "Considerá la diversificación por sectores entre tecnología, salud y otras áreas de crecimiento",
      "Agregá pequeñas asignaciones a inversiones alternativas como REITs",
      "Mantené una inversión disciplinada durante las caídas del mercado para beneficiarte de precios más bajos",
      "Diversificá entre diferentes categorías de activos digitales, incluyendo tokens de utilidad y tokens de gobierno"
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
    description: "Proporciona amplia exposición a todo el mercado de renta variable de EE.UU., incluyendo acciones de pequeña, mediana y gran capitalización, tanto de crecimiento como de valor."
  },
  {
    id: "stock-2",
    name: "iShares Core S&P 500 ETF",
    ticker: "IVV",
    type: "Stocks",
    description: "Sigue el índice S&P 500, ofreciendo exposición a 500 grandes empresas estadounidenses que representan aproximadamente el 80% de la capitalización del mercado de EE.UU."
  },
  {
    id: "stock-3",
    name: "Vanguard FTSE Developed Markets ETF",
    ticker: "VEA",
    type: "Stocks",
    description: "Proporciona exposición a mercados internacionales establecidos fuera de EE.UU., incluyendo mercados desarrollados en Europa, Australia, Asia y el Lejano Oriente."
  },
  {
    id: "stock-4",
    name: "Schwab U.S. Dividend Equity ETF",
    ticker: "SCHD",
    type: "Stocks",
    description: "Se centra en acciones estadounidenses de alta calidad que pagan dividendos con un historial de aumento constante de sus dividendos."
  },
  {
    id: "stock-5",
    name: "Vanguard Growth ETF",
    ticker: "VUG",
    type: "Stocks",
    description: "Invierte en grandes empresas estadounidenses que se espera que crezcan más rápido que el promedio del mercado."
  },
  
  // Bonds
  {
    id: "bond-1",
    name: "Vanguard Total Bond Market ETF",
    ticker: "BND",
    type: "Bonds",
    description: "Proporciona amplia exposición a bonos de grado de inversión de EE.UU. con un enfoque en bonos del tesoro, bonos corporativos y valores respaldados por hipotecas."
  },
  {
    id: "bond-2",
    name: "iShares Core U.S. Aggregate Bond ETF",
    ticker: "AGG",
    type: "Bonds",
    description: "Sigue el índice Bloomberg U.S. Aggregate Bond, representando el mercado de bonos de grado de inversión de EE.UU."
  },
  {
    id: "bond-3",
    name: "Vanguard Short-Term Bond ETF",
    ticker: "BSV",
    type: "Bonds",
    description: "Invierte en bonos gubernamentales y corporativos de EE.UU. con vencimientos entre 1-5 años, ofreciendo menor riesgo de tasa de interés que los bonos a más largo plazo."
  },
  {
    id: "bond-4",
    name: "iShares TIPS Bond ETF",
    ticker: "TIP",
    type: "Bonds",
    description: "Invierte en Valores del Tesoro Protegidos contra la Inflación (TIPS), que brindan protección contra la inflación."
  },
  {
    id: "bond-5",
    name: "Vanguard Intermediate-Term Corporate Bond ETF",
    ticker: "VCIT",
    type: "Bonds",
    description: "Se centra en bonos corporativos de grado de inversión con vencimientos entre 5-10 años."
  },
  
  // Cash/Money Market
  {
    id: "cash-1",
    name: "Vanguard Federal Money Market Fund",
    ticker: "VMFXX",
    type: "Cash",
    description: "Invierte en valores gubernamentales a corto plazo de EE.UU. y acuerdos de recompra, ofreciendo estabilidad y liquidez."
  },
  {
    id: "cash-2",
    name: "SPDR Bloomberg 1-3 Month T-Bill ETF",
    ticker: "BIL",
    type: "Cash",
    description: "Invierte en Letras del Tesoro de EE.UU. con vencimientos entre 1-3 meses, ofreciendo un riesgo extremadamente bajo y alta liquidez."
  },
  {
    id: "cash-3",
    name: "JPMorgan Ultra-Short Income ETF",
    ticker: "JPST",
    type: "Cash",
    description: "Invierte en una cartera diversificada de valores de renta fija a corto plazo de grado de inversión, con el objetivo de lograr un rendimiento mayor que los fondos del mercado monetario."
  },
  {
    id: "cash-4",
    name: "Vanguard Short-Term Treasury ETF",
    ticker: "VGSH",
    type: "Cash",
    description: "Proporciona exposición a bonos del Tesoro de EE.UU. a corto plazo con vencimientos entre 1-3 años."
  },
  {
    id: "cash-5",
    name: "Fidelity® Government Money Market Fund",
    ticker: "SPAXX",
    type: "Cash",
    description: "Invierte en efectivo, valores gubernamentales de EE.UU. y acuerdos de recompra que están totalmente garantizados por efectivo o valores gubernamentales."
  },
  
  // Crypto
  {
    id: "crypto-1",
    name: "Bitcoin",
    ticker: "BTC",
    type: "Crypto",
    description: "La primera y más grande criptomoneda por capitalización de mercado. A menudo considerada como 'oro digital' y reserva de valor."
  },
  {
    id: "crypto-2",
    name: "Ethereum",
    ticker: "ETH",
    type: "Crypto",
    description: "Una plataforma blockchain programable que permite aplicaciones descentralizadas, contratos inteligentes y finanzas descentralizadas (DeFi)."
  },
  {
    id: "crypto-3",
    name: "Solana",
    ticker: "SOL",
    type: "Crypto",
    description: "Blockchain de alta performance y baja latencia que facilita el desarrollo de aplicaciones descentralizadas y defi."
  },
  {
    id: "crypto-4",
    name: "Binance Coin",
    ticker: "BNB",
    type: "Crypto",
    description: "El token nativo del ecosistema Binance, utilizado para pagar tarifas de transacción y participar en ofertas de tokens."
  },
  {
    id: "crypto-5",
    name: "Stablecoin Index (USDC, USDT, DAI)",
    ticker: "STABLES",
    type: "Crypto",
    description: "Canasta de stablecoins respaldadas por dólar que ofrecen estabilidad en un mercado volátil, útiles para preservar capital durante periodos de incertidumbre."
  }
];
