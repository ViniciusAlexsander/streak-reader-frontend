const quotes = [
  {
    id: "1",
    text: "Cinco minutos de leitura hoje podem transformar o seu amanhã. Vamos juntos?",
  },
  {
    id: "2",
    text: "O hábito de aprender algo novo todos os dias é o que diferencia os vencedores. Continue essa jornada!",
  },
  {
    id: "3",
    text: "Cada edição da nossa newsletter é um pequeno passo rumo ao conhecimento. Não pare agora!",
  },
  {
    id: "4",
    text: "Seu futuro eu agradecerá pelo tempo que você investe em crescer hoje. Vamos nessa?",
  },
  {
    id: "5",
    text: "Uma boa leitura por dia mantém a ignorância longe. Não deixe seu streak morrer!",
  },
  {
    id: "6",
    text: "A constância constrói resultados incríveis. Que tal mais um dia de leitura?",
  },
  {
    id: "7",
    text: "O sucesso vem da repetição. Mantenha seu streak e veja os frutos!",
  },
  { id: "8", text: "Você já chegou até aqui. Não quebre sua sequência agora!" },
  {
    id: "9",
    text: "Ler um pouco todos os dias é como investir em si mesmo. Continue!",
  },
  { id: "10", text: "Se você quer ser melhor do que ontem, leia hoje!" },
  {
    id: "11",
    text: "Você já garantiu seu streak de leitura hoje? Não deixe a chama apagar! 🔥",
  },
  {
    id: "12",
    text: "Cada dia lido é um nível a mais na sua evolução. Vamos para o próximo desafio?",
  },
  {
    id: "13",
    text: "Sua sequência está crescendo! Será que você consegue superar sua própria marca?",
  },
  {
    id: "14",
    text: "Você é parte de uma minoria que se compromete com o aprendizado diário. Continue assim!",
  },
  {
    id: "15",
    text: "Não deixe o contador zerar! Seu futuro depende dos hábitos que você constrói hoje.",
  },
] as const;

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
