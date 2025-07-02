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
    text: "Si tu inversión perdiera el 50% de su valor en un mes, ¿qué harías?",
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
    bitcoin: 35,
    ethereum: 25,
    altcoins: 0,
    stablecoins: 40,
    memecoins: 0,
    description: "Este portafolio conservador prioriza la preservación del capital y un riesgo controlado. Se concentra únicamente en Bitcoin, Ethereum y stablecoins para máxima estabilidad.",
    diversificationTips: [
      "Mantené un alto porcentaje en stablecoins para proteger tu capital",
      "Concentrá tus inversiones en Bitcoin y Ethereum como base sólida",
      "Evitá altcoins y tokens especulativos para minimizar riesgos",
      "Considerá el staking de stablecoins para generar rendimientos moderados",
      "Mantené reservas adecuadas de efectivo fuera del mundo cripto para emergencias"
    ]
  },
  Moderate: {
    riskLevel: 'Moderate',
    bitcoin: 25,
    ethereum: 25,
    altcoins: 35,
    stablecoins: 10,
    memecoins: 5,
    description: "Este portafolio balanceado busca equilibrar crecimiento y seguridad. Distribuye el riesgo entre las principales criptomonedas y una exposición controlada a altcoins (incluyendo DeFi) y una pequeña porción en memecoins.",
    diversificationTips: [
      "Balanceá tu exposición entre Bitcoin y Ethereum para diversificar tu base principal",
      "Explorá altcoins establecidas con casos de uso comprobados, incluyendo proyectos DeFi",
      "Investigá proyectos con auditorías de seguridad y buena reputación",
      "Destiná un pequeño porcentaje a memecoins con comunidades activas",
      "Reequilibrá periódicamente tu portafolio para mantener las proporciones objetivo"
    ]
  },
  High: {
    riskLevel: 'High',
    bitcoin: 15,
    ethereum: 15,
    altcoins: 50,
    stablecoins: 5,
    memecoins: 15,
    description: "Este portafolio agresivo maximiza el potencial de crecimiento con mayor exposición a altcoins (incluyendo DeFi) y memecoins. Es ideal para inversores con alto conocimiento del mercado y tolerancia al riesgo.",
    diversificationTips: [
      "Mantené Bitcoin y Ethereum como base de tu portafolio para cierta estabilidad",
      "Diversificá entre múltiples altcoins de distintos sectores, incluyendo DeFi",
      "Aprovechá las oportunidades en protocolos DeFi con estrategias más agresivas",
      "Invertí en memecoins con comunidades activas y potencial de crecimiento viral",
      "Considerá realizar toma de ganancias periódicamente en tus posiciones más volátiles"
    ]
  }
};

export const investmentOptions: InvestmentOption[] = [
  // Bitcoin
  {
    id: "bitcoin-1",
    name: "Bitcoin",
    ticker: "BTC",
    type: "Bitcoin",
    description: "La primera y más grande criptomoneda por capitalización de mercado. A menudo considerada como 'oro digital' y reserva de valor."
  },
  {
    id: "bitcoin-2",
    name: "Fondo Indexado de Bitcoin",
    ticker: "BTCi",
    type: "Bitcoin",
    description: "Exposición diversificada a Bitcoin a través de diferentes mercados y servicios custodiales, minimizando riesgos de contraparte."
  },
  {
    id: "bitcoin-3",
    name: "Bitcoin ETF",
    ticker: "BTCETF",
    type: "Bitcoin",
    description: "Fondo cotizado en bolsa que sigue el precio de Bitcoin, ofreciendo exposición regulada sin necesidad de custodiar activos directamente."
  },
  
  // Ethereum
  {
    id: "ethereum-1",
    name: "Ethereum",
    ticker: "ETH",
    type: "Ethereum",
    description: "Una plataforma blockchain programable que permite aplicaciones descentralizadas, contratos inteligentes y finanzas descentralizadas (DeFi)."
  },
  {
    id: "ethereum-2",
    name: "Ethereum Staking",
    ticker: "stETH",
    type: "Ethereum",
    description: "Depositar ETH para contribuir a la seguridad de la red y recibir recompensas de staking entre 3-5% anual."
  },
  {
    id: "ethereum-3",
    name: "Ethereum ETF",
    ticker: "ETHF",
    type: "Ethereum",
    description: "Fondo cotizado en bolsa que sigue el precio de Ethereum, permitiendo exposición a través de cuentas de inversión tradicionales."
  },
  
  // Altcoins
  {
    id: "altcoin-1",
    name: "Solana",
    ticker: "SOL",
    type: "Altcoin",
    description: "Blockchain de alta performance y baja latencia que facilita el desarrollo de aplicaciones descentralizadas y defi."
  },
  {
    id: "altcoin-2",
    name: "Cardano",
    ticker: "ADA",
    type: "Altcoin",
    description: "Plataforma blockchain basada en prueba de participación desarrollada con rigor académico y enfoque en sostenibilidad y escalabilidad."
  },
  {
    id: "altcoin-3",
    name: "Polkadot",
    ticker: "DOT",
    type: "Altcoin",
    description: "Protocolo que permite a blockchains especializadas transferir mensajes y valor entre sí, facilitando una web descentralizada."
  },
  {
    id: "altcoin-4",
    name: "Avalanche",
    ticker: "AVAX",
    type: "Altcoin",
    description: "Plataforma de contratos inteligentes de alto rendimiento que busca ser una alternativa más escalable a Ethereum."
  },
  {
    id: "altcoin-5",
    name: "Cosmos",
    ticker: "ATOM",
    type: "Altcoin",
    description: "Ecosistema de blockchains interoperables diseñadas para escalar y comunicarse entre sí, conocido como el 'Internet de las blockchains'."
  },
  
  // DeFi
  {
    id: "defi-1",
    name: "Uniswap",
    ticker: "UNI",
    type: "DeFi",
    description: "Exchange descentralizado líder que utiliza un sistema automatizado de creación de mercado para facilitar el intercambio de tokens."
  },
  {
    id: "defi-2",
    name: "Aave",
    ticker: "AAVE",
    type: "DeFi",
    description: "Protocolo de préstamos descentralizado que permite a los usuarios prestar y tomar prestados criptoactivos sin necesidad de intermediarios."
  },
  {
    id: "defi-3",
    name: "Curve Finance",
    ticker: "CRV",
    type: "DeFi",
    description: "Exchange descentralizado optimizado para el intercambio eficiente de stablecoins y otros activos con comportamiento similar."
  },
  {
    id: "defi-4",
    name: "MakerDAO",
    ticker: "MKR",
    type: "DeFi",
    description: "Protocolo que permite a los usuarios generar la stablecoin DAI utilizando criptoactivos como colateral."
  },
  {
    id: "defi-5",
    name: "Compound",
    ticker: "COMP",
    type: "DeFi",
    description: "Protocolo de préstamos donde los usuarios pueden ganar intereses o pedir prestado activos contra colateral."
  },
  
  // Stablecoins
  {
    id: "stablecoin-1",
    name: "USD Coin",
    ticker: "USDC",
    type: "Stablecoin",
    description: "Stablecoin respaldada 1:1 por dólares estadounidenses, ofreciendo estabilidad en un mercado volátil."
  },
  {
    id: "stablecoin-2",
    name: "Tether",
    ticker: "USDT",
    type: "Stablecoin",
    description: "La stablecoin más utilizada y con mayor volumen de operaciones, diseñada para mantener paridad con el dólar estadounidense."
  },
  {
    id: "stablecoin-3",
    name: "Dai",
    ticker: "DAI",
    type: "Stablecoin",
    description: "Stablecoin descentralizada cuyo valor está vinculado al dólar estadounidense y respaldada por criptoactivos como colateral."
  },
  {
    id: "stablecoin-4",
    name: "Binance USD",
    ticker: "BUSD",
    type: "Stablecoin",
    description: "Stablecoin emitida por Binance y Paxos, respaldada 1:1 por dólares estadounidenses y conforme a regulaciones."
  },
  {
    id: "stablecoin-5",
    name: "Cesta de Stablecoins",
    ticker: "STABLES",
    type: "Stablecoin",
    description: "Exposición diversificada a múltiples stablecoins para minimizar el riesgo específico de cada protocolo."
  },
  
  // Memecoins
  {
    id: "memecoin-1",
    name: "Dogecoin",
    ticker: "DOGE",
    type: "Memecoin",
    description: "La memecoin original basada en el meme del perro Shiba Inu 'Doge'. Tiene una comunidad grande y activa."
  },
  {
    id: "memecoin-2",
    name: "Shiba Inu",
    ticker: "SHIB",
    type: "Memecoin",
    description: "Token inspirado en Dogecoin que ha evolucionado para desarrollar un ecosistema con intercambio descentralizado y otros productos."
  },
  {
    id: "memecoin-3",
    name: "Pepe",
    ticker: "PEPE",
    type: "Memecoin",
    description: "Memecoin basada en el popular meme del personaje Pepe the Frog, con una comunidad activa y fuerte presencia en redes sociales."
  },
  {
    id: "memecoin-4",
    name: "Floki",
    ticker: "FLOKI",
    type: "Memecoin",
    description: "Proyecto de memecoin con el nombre del perro de Elon Musk, que busca combinar el poder de los memes con utilidad real."
  },
  {
    id: "memecoin-5",
    name: "Bonk",
    ticker: "BONK",
    type: "Memecoin",
    description: "Token memético nativo del ecosistema Solana con una fuerte comunidad y enfoque en la integración con proyectos DeFi dentro de Solana."
  }
];
