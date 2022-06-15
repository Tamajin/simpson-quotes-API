import React, { useState } from "react";
import axios from 'axios';
import './App.css';
import QuoteCard from "./components/QuoteCard";

function App() {  
  const [quote, setQuote] = useState(null);

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  };

  return (
    <div className="App">
    <QuoteCard quote={quote}/>
    <button onClick={getQuote}>Get a random quote</button>
    </div>
  );
}

export default App;
