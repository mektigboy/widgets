import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "The Color Blue", value: "blue" },
];

class App extends React.Component {
  render() {
    return (
      <div>
        <Dropdown options={options} />
      </div>
    );
  }
}

export default App;
