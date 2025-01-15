import React, { useState } from "react";
import axios from "axios";
import '../Quote/Quote.css';

const SubmitQuote = () => {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/api/submit", { text, author })
      .then(() => {
        alert("Quote submitted!");
        setText("");
        setAuthor("");
      })
      .catch((error) => {
        alert("Failed to submit quote: " + error.response.data.error);
      });
  };

  return (
    <div>
      <h1>Submit a Quote</h1>
      <input
        type="text"
        placeholder="Quote"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SubmitQuote;
    