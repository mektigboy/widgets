import React from "react";
import Accordion from "./components/Accordion";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end JavaScript framework.",
  },
  {
    title: "Title",
    content: "Content.",
  },
  {
    title: "Title",
    content: "Content.",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Accordion items={items} />
      </div>
    );
  }
}

export default App;
