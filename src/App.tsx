// App.tsx
import React from 'react';
import QuoteGenerator from './QuoteGenerator';
import './main.css';
const App: React.FC = () => {
  return (
    <div>
      <h1>Генератор Цитат</h1>
      <QuoteGenerator />
    </div>
  );
};

export default App;
