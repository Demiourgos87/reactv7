import React from "react";
import ReactDOM from "react-dom";
// import Pet from "./components/Pet";
import SearchParams from "./SearchParams";

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
    <div id="my-app">
      <h1>Adopt me</h1>
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Boyo" animal="Dog" breed="Border Collie" />
      <Pet name="Bitch" animal="Cat" breed="Siamese" /> */}

      <SearchParams></SearchParams>
    </div>
  );
};

// Non JSX
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

// JSX
ReactDOM.render(<App />, document.getElementById("root"));
