import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("h1", {},'Hello World 1!'),
    React.createElement("h1", {},'Hello World 2!')
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);