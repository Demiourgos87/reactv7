import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./components/Pet";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Details from "./Details";

// Non JSX
// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Boyo",
//       animal: "Dog",
//       breed: "Border Collie",
//     }),
//     React.createElement(Pet, {
//       name: "Bitch",
//       animal: "Cat",
//       breed: "Siamese",
//     }),
//   ]);
// };

// JSX
const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/" element={<SearchParams />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

// Non JSX
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

// JSX
ReactDOM.render(<App />, document.getElementById("root"));
