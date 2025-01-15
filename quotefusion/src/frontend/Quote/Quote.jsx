import React, { useState, useEffect } from "react";
import axios from "axios";
import './Quote.css'

const Quote = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/api/random").then((response) => {
      setQuote(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Random Quote</h1>
      {quote ? (
        <blockquote>
          <p>"{quote.text}"</p>
          <footer>- {quote.author}</footer>
        </blockquote>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Quote;
