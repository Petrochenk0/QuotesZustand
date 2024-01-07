// QuoteGenerator.tsx
import React from 'react';
import useStore from './store';
import './main.css';
const QuoteGenerator: React.FC = () => {
  const { quote, generateQuote } = useStore();

  return (
    <div>
      <h2>Цитата дня:</h2>
      <h1 className="styleQuote">{quote}</h1>
      <section onClick={generateQuote} id="intro">
        <div id="intro-content" className="center-content">
          <div className="center-content-inner">
            <div className="content-section content-section-margin">
              <div className="content-section-grid clearfix">
                <a href="#" className="button nav-link">
                  <div className="bottom"></div>

                  <div className="top">
                    <div className="label">Сгенерируй фразу</div>

                    <div className="button-border button-border-left"></div>
                    <div className="button-border button-border-top"></div>
                    <div className="button-border button-border-right"></div>
                    <div className="button-border button-border-bottom"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuoteGenerator;
