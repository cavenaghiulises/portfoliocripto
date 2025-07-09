import { InvestmentOption, PortfolioAllocation, Question, RiskLevel } from "@/types";

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

export const calculateRiskLevel = (score: number): RiskLevel => {
  if (score <= 6) return 'UltraConservative';
  if (score <= 8) return 'VeryConservative';
  if (score <= 10) return 'Conservative';
  if (score <= 12) return 'ConservativeModerate';
  if (score <= 14) return 'BalancedModerate';
  if (score <= 16) return 'GrowthModerate';
  if (score <= 17) return 'AggressiveModerate';
  if (score <= 18) return 'Aggressive';
  if (score <= 19) return 'VeryAggressive';
  return 'UltraAggressive';
};

export const portfolioAllocations: Record<RiskLevel, PortfolioAllocation> = {
  UltraConservative: {
    riskLevel: 'UltraConservative',
    bitcoin: 20,
    ethereum: 15,
    altcoins: 0,
    stablecoins: 65,
    memecoins: 0,
    description: "Portfolio ultra conservador que prioriza máxima preservación del capital con mínima volatilidad. Ideal para principiantes o inversores muy cautelosos.",
    diversificationTips: [
      "Mantené la mayoría de tu inversión en stablecoins para protección completa",
      "Usá Bitcoin y Ethereum solo como pequeña exposición al crecimiento cripto",
      "Considerá staking de stablecoins para rendimientos seguros del 3-5%",
      "Evitá completamente altcoins y tokens especulativos",
      "Mantené siempre reservas de emergencia fuera del ecosistema cripto"
    ]
  },
  VeryConservative: {
    riskLevel: 'VeryConservative',
    bitcoin: 25,
    ethereum: 20,
    altcoins: 0,
    stablecoins: 55,
    memecoins: 0,
    description: "Portfolio muy conservador con exposición limitada a Bitcoin y Ethereum, manteniendo la mayoría en stablecoins para estabilidad.",
    diversificationTips: [
      "Mantené más del 50% en stablecoins para estabilidad",
      "Limitá la exposición a Bitcoin y Ethereum únicamente",
      "Considerá DCA (Dollar Cost Averaging) para reducir volatilidad de entrada",
      "Evitá tokens de alto riesgo y proyectos experimentales",
      "Revisá tu portfolio mensualmente pero evitá cambios frecuentes"
    ]
  },
  Conservative: {
    riskLevel: 'Conservative',
    bitcoin: 35,
    ethereum: 25,
    altcoins: 0,
    stablecoins: 40,
    memecoins: 0,
    description: "Portfolio conservador equilibrado entre las principales criptomonedas y stablecoins, evitando activos especulativos.",
    diversificationTips: [
      "Mantené un balance sólido entre Bitcoin, Ethereum y stablecoins",
      "Considerá el staking de ETH para generar rendimientos adicionales",
      "Evitá altcoins hasta ganar más experiencia en el mercado",
      "Implementá estrategias de rebalanceo trimestral",
      "Mantené disciplina durante las correcciones del mercado"
    ]
  },
  ConservativeModerate: {
    riskLevel: 'ConservativeModerate',
    bitcoin: 30,
    ethereum: 30,
    altcoins: 15,
    stablecoins: 25,
    memecoins: 0,
    description: "Portfolio conservador con ligera exposición a altcoins establecidas, manteniendo una base sólida en Bitcoin y Ethereum.",
    diversificationTips: [
      "Introducí altcoins establecidas como Solana, Cardano o Avalanche",
      "Mantené Bitcoin y Ethereum como tu base principal",
      "Investigá thoroughly antes de agregar nuevos altcoins",
      "Considerá proyectos con casos de uso claros y adopción real",
      "Mantené stablecoins como colchón de seguridad"
    ]
  },
  BalancedModerate: {
    riskLevel: 'BalancedModerate',
    bitcoin: 25,
    ethereum: 25,
    altcoins: 35,
    stablecoins: 10,
    memecoins: 5,
    description: "Portfolio balanceado que combina estabilidad y crecimiento, con exposición moderada a altcoins y mínima a memecoins.",
    diversificationTips: [
      "Balanceá entre seguridad (BTC/ETH) y oportunidades de crecimiento",
      "Diversificá altcoins entre diferentes sectores (DeFi, Layer 1, etc.)",
      "Destiná solo un pequeño porcentaje a memecoins establecidas",
      "Rebalanceá trimestralmente para mantener proporciones objetivo",
      "Considerá toma de ganancias parcial en altcoins exitosas"
    ]
  },
  GrowthModerate: {
    riskLevel: 'GrowthModerate',
    bitcoin: 20,
    ethereum: 25,
    altcoins: 45,
    stablecoins: 5,
    memecoins: 5,
    description: "Portfolio enfocado en crecimiento con mayor exposición a altcoins prometedoras, manteniendo una base en las principales criptomonedas.",
    diversificationTips: [
      "Explorá altcoins de diferentes categorías: DeFi, Gaming, AI, Layer 2",
      "Mantené Bitcoin y Ethereum como ancla de estabilidad",
      "Investigá proyectos con roadmaps claros y equipos sólidos",
      "Considerá participar en stakings y farming de DeFi",
      "Establecé targets de toma de ganancias para altcoins exitosas"
    ]
  },
  AggressiveModerate: {
    riskLevel: 'AggressiveModerate',
    bitcoin: 15,
    ethereum: 20,
    altcoins: 50,
    stablecoins: 5,
    memecoins: 10,
    description: "Portfolio agresivo con fuerte exposición a altcoins y mayor tolerancia a memecoins, buscando maximizar oportunidades de crecimiento.",
    diversificationTips: [
      "Diversificá ampliamente entre altcoins de alto potencial",
      "Considerá inversiones en proyectos early-stage con due diligence",
      "Balanceá entre tokens establecidos y oportunidades emergentes",
      "Mantené seguimiento activo de developments en tus inversiones",
      "Implementá estrategias de trailing stops para proteger ganancias"
    ]
  },
  Aggressive: {
    riskLevel: 'Aggressive',
    bitcoin: 15,
    ethereum: 15,
    altcoins: 50,
    stablecoins: 5,
    memecoins: 15,
    description: "Portfolio agresivo que maximiza exposición a altcoins y memecoins, ideal para inversores experimentados con alta tolerancia al riesgo.",
    diversificationTips: [
      "Mantené Bitcoin y Ethereum como mínima estabilidad",
      "Explorá activamente nuevos proyectos y narrativas del mercado",
      "Participá en airdrops y programas de incentivos de protocolos",
      "Considerá yield farming y estrategias DeFi más complejas", 
      "Establecé límites de pérdida para gestionar riesgo de drawdown"
    ]
  },
  VeryAggressive: {
    riskLevel: 'VeryAggressive',
    bitcoin: 10,
    ethereum: 15,
    altcoins: 55,
    stablecoins: 0,
    memecoins: 20,
    description: "Portfolio muy agresivo con máxima exposición a altcoins y memecoins, eliminando stablecoins para maximizar potencial de crecimiento.",
    diversificationTips: [
      "Enfocate en altcoins de menor capitalización con alto potencial",
      "Participá activamente en comunidades y ecosistemas de tus inversiones",
      "Considerá inversiones en Pre-sales y IDOs con research profundo",
      "Aprovechá momentos de alta volatilidad para rebalancear",
      "Mantené disciplina en la toma de ganancias durante bull markets"
    ]
  },
  UltraAggressive: {
    riskLevel: 'UltraAggressive',
    bitcoin: 5,
    ethereum: 10,
    altcoins: 60,
    stablecoins: 0,
    memecoins: 25,
    description: "Portfolio ultra agresivo para traders experimentados, con mínima exposición a Bitcoin/Ethereum y máxima a oportunidades especulativas.",
    diversificationTips: [
      "Explorá oportunidades en micro-caps y proyectos pre-launch",
      "Mantené solo exposición mínima a Bitcoin y Ethereum",
      "Participá activamente en trends y narrativas del momento",
      "Considerá leverage y derivados cripto con extrema precaución",
      "Implementá sistemas rigurosos de risk management y stop losses"
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
