import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState('programming');
  const [results,setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState(term);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    },1000);

    return () => {
      clearTimeout(timerId)
    }
  },[term])

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
        params: {
        action: 'query',
        list: 'search',
        origin: '*',
        format: 'json',
        srsearch: debouncedTerm
        }
      });
      setResults(data.query.search);
    };
    search();
  },[debouncedTerm]);

  const onFormChange = (event) => {
    event.preventDefault();
    setTerm(event.target.value)
    
  }

  const renderedResults = results.map((result) => {
    return (
      <div className="item segment" key={result.pageid}>
        <div className="right floated content">
          <a href={`https://en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <div className="description">
            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
          </div>
        </div>
      </div>
    );
  })

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
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
  );
};

export default Search;
