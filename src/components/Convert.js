import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text); 

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);

      return () => {
        clearTimeout(timerId);
      }
    }, 1000)
  }, [text])
 
  useEffect(() => {
    const translate = async () => {
      const {data} = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: api_key,
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, debouncedText]);

  return <div><h1 className="ui header">{translated}</h1></div>;
};

export default Convert;
