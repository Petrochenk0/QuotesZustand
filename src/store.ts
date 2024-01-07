import { create } from 'zustand';

interface IQuote {
  quote: string;
  generateQuote: () => void;
}

const useStore = create<IQuote>((set) => ({
  quote: 'Программист не тестировщик',
  generateQuote: () => {
    const quotes = [
      '"Hello, World!" - первое, что говорит каждый программист.',
      'Код, как язык, имеет свои грамматические правила. Игнорирование их приведет к непониманию.',
      'Нет ничего более постоянного, чем временный хак.',
      'Не уступайте соблазну комментировать код. Скоро вы сами не сможете его прочитать.',
      'Чтение кода других - это как чтение книги в темноте, вы ищете героя, но не видите его лица.',
      'Если ваш код работает, но вы не знаете почему, не трогайте его. Ваше невежество возможно является его защитой.',
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    set({ quote: newQuote });
  },
}));
export default useStore;
