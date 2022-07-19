import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front-end JavaScript framework.",
  },
  {
    title: "Title 1",
    content: "Content.",
  },
  {
    title: "Title 2",
    content: "Content.",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
      </div>
    );
  }
}

export default App;
