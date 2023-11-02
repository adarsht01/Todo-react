// import React from "react";
// import ReactDom from "react-dom";

// ReactDom.render(<App />,document.getElementById("root"));

import App from "./components/App";
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App  />);