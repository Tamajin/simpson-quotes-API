import React from 'react';
import './QuoteCard.css';

const randomQuote = ({quote}) => (

  quote && (

  <figure className="QuoteCard">
    <img src={quote.image} alt={quote.character} />
    <figcaption>
      <blockquote>{quote.quote}</blockquote>
      <cite>{quote.character}</cite>
    </figcaption>
  </figure>
));

export default randomQuote;