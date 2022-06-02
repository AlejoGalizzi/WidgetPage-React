import React from "react";
import Accordion from "./Accordion";

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creatin components'
  },
]

export default () => {
  return <Accordion items={items}/>;
}


