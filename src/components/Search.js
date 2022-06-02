import React, { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState('');

  const onFormChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value)
    console.log(term);
  }
  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label>Search each term</label>
          <input
            type="text"
            className="input"
            value={term}
            onChange={(event) => onFormChange(event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
